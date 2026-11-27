import { useEffect } from "react";
import { AppState, Platform } from "react-native";
import * as Notifications from "expo-notifications";
import { GetTasks } from "../screens/HomeScreen";

const CHANNEL_ID = "reminders";
const ID_PREFIX = "reminder-";

const MAX_SCHEDULED = 60;
const MAX_TIMEOUT = 2147483647;

let channelReady = false;
let queue = Promise.resolve();
let webTimers = {};

if(Platform.OS !== "web"){
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowBanner: true,
            shouldShowList: true,
            shouldPlaySound: true,
            shouldSetBadge: false,
        }),
    });
}

function getReminderTime(task){
    if(typeof task.reminderMinutes !== "number" || task.reminderMinutes < 0){
        return null;
    }

    return task.start - task.reminderMinutes * 60000;
}

function getReminderId(task){
    return ID_PREFIX + task.start + "-" + task.name;
}

async function requestNativePermission(){
    if(Platform.OS === "android"){
        try{
            await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
                name: "Reminders",
                importance: Notifications.AndroidImportance.HIGH,
                sound: "default",
                vibrationPattern: [0, 250, 250, 250],
                lightColor: "#7B2CBF",
            });
            channelReady = true;
        }
        catch(error){
            console.warn(error);
        }
    }

    const current = await Notifications.getPermissionsAsync();
    if(current.granted){
        return true;
    }

    const requested = await Notifications.requestPermissionsAsync();
    return requested.granted;
}

async function requestWebPermission(){
    if(typeof Notification === "undefined"){
        return false;
    }

    try{
        if(Notification.permission === "default"){
            await Notification.requestPermission();
        }
    }
    catch(error){
        console.warn(error);
    }

    return Notification.permission === "granted";
}

function requestPermission(){
    return Platform.OS === "web" ? requestWebPermission() : requestNativePermission();
}

async function cancelReminders(){
    if(Platform.OS === "web"){
        Object.values(webTimers).forEach(clearTimeout);
        webTimers = {};
        return;
    }

    const pending = await Notifications.getAllScheduledNotificationsAsync();
    const old = pending.filter((item) => item.identifier.startsWith(ID_PREFIX));
    await Promise.all(old.map((item) => Notifications.cancelScheduledNotificationAsync(item.identifier)));
}

async function scheduleReminder(task){
    const time = getReminderTime(task);
    const delay = time - Date.now();

    if(time === null || delay <= 0){
        return;
    }

    const body = task.name + " is due soon!";

    if(Platform.OS === "web"){
        const id = getReminderId(task);

        if(delay > MAX_TIMEOUT){
            return;
        }

        clearTimeout(webTimers[id]);
        webTimers[id] = setTimeout(() => {
            delete webTimers[id];

            try{
                new Notification("TaskR", { body: body });
            }
            catch(error){
                console.warn(error);
            }
        }, delay);
        return;
    }

    await Notifications.scheduleNotificationAsync({
        identifier: getReminderId(task),
        content: {
            title: "TaskR",
            body: body,
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DATE,
            date: new Date(time),
            ...(channelReady ? { channelId: CHANNEL_ID } : {}),
        },
    });
}

async function syncReminders(){
    await cancelReminders();

    const tasks = await GetTasks();
    const upcoming = tasks
        .filter((task) => getReminderTime(task) > Date.now())
        .sort((a, b) => getReminderTime(a) - getReminderTime(b))
        .slice(0, MAX_SCHEDULED);

    for(const task of upcoming){
        await scheduleReminder(task);
    }
}

async function cancelReminder(task){
    const id = getReminderId(task);

    if(Platform.OS === "web"){
        clearTimeout(webTimers[id]);
        delete webTimers[id];
        return;
    }

    await Notifications.cancelScheduledNotificationAsync(id);
}

export function scheduleTaskReminder(task){
    queue = queue.then(() => scheduleReminder(task)).catch(console.warn);
    return queue;
}

export function cancelTaskReminder(task){
    queue = queue.then(() => cancelReminder(task)).catch(console.warn);
    return queue;
}

export function refreshReminders(){
    queue = queue.then(syncReminders).catch(console.warn);
    return queue;
}

export function Reminders(){
    useEffect(() => {
        let allowed = false;
        let cancelled = false;

        const refresh = () => {
            if(allowed && !cancelled){
                refreshReminders();
            }
        };

        const askAgain = () => {
            requestPermission().then((granted) => {
                allowed = granted;
                refresh();
            });
        };

        askAgain();

        if(Platform.OS === "web"){
            window.addEventListener("click", askAgain, { once: true });
        }

        const appStateListener = AppState.addEventListener("change", (state) => {
            if(state === "active"){
                refresh();
            }
        });

        return () => {
            cancelled = true;
            appStateListener.remove();

            if(Platform.OS === "web"){
                window.removeEventListener("click", askAgain);
            }
        };
    }, []);

    return null;
}

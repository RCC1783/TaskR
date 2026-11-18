import { useEffect, useRef } from "react";
import { Platform } from "react-native";
import * as Notifications from "expo-notifications";

const CHANNEL_ID = "reminders";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export function shouldSendReminder(date){
    return true;
}

async function requestPermission(){
    if(Platform.OS === "android"){
        await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
            name: "Reminders",
            importance: Notifications.AndroidImportance.HIGH,
        });
    }

    const current = await Notifications.getPermissionsAsync();
    if(current.granted){
        return true;
    }

    const requested = await Notifications.requestPermissionsAsync();
    return requested.granted;
}

async function sendReminder(date){
    const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    await Notifications.scheduleNotificationAsync({
        content: {
            title: "TaskR",
            body: "It's " + time,
        },
        trigger: { channelId: CHANNEL_ID },
    });
}

export function Reminders(){
    const lastSent = useRef(null);

    useEffect(() => {
        let timer;
        let cancelled = false;
        let allowed = false;

        const check = () => {
            if(cancelled) return;

            const now = new Date();
            const minuteKey = now.getHours() + ":" + now.getMinutes();

            if(allowed && shouldSendReminder(now) && lastSent.current !== minuteKey){
                lastSent.current = minuteKey;
                sendReminder(now).catch(console.warn);
            }

            const untilNextMinute = 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());
            timer = setTimeout(check, untilNextMinute + 50);
        };

        requestPermission().then((granted) => {
            allowed = granted;
            check();
        });

        return () => {
            cancelled = true;
            clearTimeout(timer);
        };
    }, []);

    return null;
}

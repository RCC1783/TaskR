import { Text, View, Pressable, } from "react-native";
import { styles } from "../styles";
// some example tasks
export const TaskType = {
	EVENT: 0,
	DUE_DATE: 1,
	REMINDER: 2
};
export const TaskStatus = {
	INCOMPLETE: 0,
	IN_PROGRESS: 1,
	COMPLETE: 2
};
const tasks = [
		{name: "Homework", description: "Math Homework", type: TaskType.DUE_DATE, start: new Date(2026, 10, 20, 23).getTime(), end: -1, taskStatus: TaskStatus.INCOMPLETE },
		{name: "Group Meeting", description: "Business Planning Group Meeting for Project 2", type: TaskType.EVENT, start: new Date(2026, 10, 19, 11, 30).getTime(), end: new Date(2026, 10, 19, 13, 30).getTime(), taskStatus: TaskStatus.INCOMPLETE },
		{name: "Laundry Day", description: "Do your laundry!!!!", type: TaskType.REMINDER, start: new Date(2026, 10, 21, 16).getTime(), end: -1, taskStatus: TaskStatus.INCOMPLETE },
		{name: "Work on Project", description: "Do Stuff for Comp Sci Project", type: TaskType.REMINDER, start: new Date(2026, 10, 15, 16, 30).getTime(), end: -1, taskStatus: TaskStatus.COMPLETE }
		];
export function Task({task}) {
	const timeText = (task.type === TaskType.EVENT) ? new Date(task.start).toLocaleTimeString("en-US") + " - " + new Date(task.end).toLocaleTimeString("en-US")
		: new Date(task.start).toLocaleTimeString("en-US");
	const isCompleted = (task.taskStatus === TaskStatus.COMPLETE) ? styles.calTask.completed : 0;
	return (
	<Pressable style={styles.calTask}>
		<Text style={[styles.calTask.taskHeader, isCompleted]}>{timeText}</Text>	
		<Text style={styles.calTask.titleText}>{task.name}</Text>
	</Pressable>
	);
}
export function insertTasksForDayAndHour(dayDelta, stamp) {
	const tasksNow = [];
	const unixTimeDayDelta = Date.UTC(2000, 0, 2, 0, 0) - Date.UTC(2000, 0, 1, 0, 0);
	const unixTimeHourDelta = Date.UTC(2000, 0, 2, 2, 0) - Date.UTC(2000, 0, 2, 1, 0);
	const taskBlockTimeStamp = stamp + dayDelta * unixTimeDayDelta;
	// tasks array will probably be sorted, algorithm will change
	for (let i=0; i<tasks.length; i++) {
		const timeDiffStart = Math.abs(tasks[i].start - taskBlockTimeStamp)
		const timeDiffEnd = (tasks[i].end + unixTimeHourDelta - taskBlockTimeStamp)
		if ((tasks[i].start >= taskBlockTimeStamp && tasks[i].start < taskBlockTimeStamp + unixTimeHourDelta)) {
			tasksNow.push(
				<Task key={i} task={tasks[i]}/>	
			);
		}
	}
	return tasksNow;
}

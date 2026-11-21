import { Text, View, Pressable, } from "react-native";
import { styles } from "../styles";
import { Timestamp } from "firebase/firestore"
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
export class Task {
	name;
	description;
	type;
	start;
	end;
	taskStatus;
	constructor(name='',description='No description provided', type=TaskType.REMINDER, start=Date.now(), end=-1, taskStatus=TaskStatus.INCOMPLETE) {
		this.name=name;
		this.description=description;
		this.type = type;
		this.start = start;
		this.end = end;
		this.taskStatus = taskStatus;
	}
}
const tasks = [
		{name: "Homework", description: "Math Homework", type: TaskType.DUE_DATE, start: new Date(2026, 10, 20, 23).getTime(), end: -1, taskStatus: TaskStatus.INCOMPLETE },
		{name: "Group Meeting", description: "Business Planning Group Meeting for Project 2", type: TaskType.EVENT, start: new Date(2026, 10, 19, 11, 30).getTime(), end: new Date(2026, 10, 19, 13, 30).getTime(), taskStatus: TaskStatus.INCOMPLETE },
		{name: "Laundry Day", description: "Do your laundry!!!!", type: TaskType.REMINDER, start: new Date(2026, 10, 21, 16).getTime(), end: -1, taskStatus: TaskStatus.INCOMPLETE },
		{name: "Study Session", description: "study for next week", type: TaskType.REMINDER, start: new Date(2026, 10, 21, 16, 30).getTime(), end: -1, taskStatus: TaskStatus.INCOMPLETE },
		{name: "Work on Project", description: "Do Stuff for Comp Sci Project", type: TaskType.REMINDER, start: new Date(2026, 10, 15, 16, 30).getTime(), end: -1, taskStatus: TaskStatus.COMPLETE }
		];
export function CalenderTask({task, dynamicStyle}) {
	const timeText = (task.type === TaskType.EVENT) ? new Date(task.start).toLocaleTimeString("en-US") + " - " + new Date(task.end).toLocaleTimeString("en-US")
		: new Date(task.start).toLocaleTimeString("en-US");
	const isCompleted = (task.taskStatus === TaskStatus.COMPLETE) ? dynamicStyle.calTask.completed : 0;
	return (
	<Pressable style={dynamicStyle.calTask}>
		<Text style={[dynamicStyle.calTask.taskHeader, isCompleted]}>{dynamicStyle.isMobile ? null : timeText}</Text>	
		<Text style={dynamicStyle.calTask.titleText}>{dynamicStyle.isMobile ? null : task.name}</Text>
	</Pressable>
	);
}
export function insertTasksForDayAndHour(dayDelta, stamp, dynamicStyle) {
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
				<CalenderTask dynamicStyle={dynamicStyle} key={i} task={tasks[i]}/>	
			);
		}
	}
	return tasksNow;
}

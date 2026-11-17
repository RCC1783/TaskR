import { Text, View, Pressable, } from "react-native";
import { styles } from "../styles";
import { TaskType, TaskStatus } from "../modules/Task";
function TimeStamp({time, children, nextDay, current}) {
	return (
		<View style={[styles.hr, styles.calender.tsContainer, nextDay]}>
			<Text style={[styles.calender.timeStamp, current]}>{time}</Text>
			{children}	
		</View>
	);
}
function TaskContainer({curDay, day}) {
	const curDayStyle = (curDay === day) ? styles.calender.taskContainer.curDay : 0;
	return (
		<View style={[styles.calender.taskContainer, curDayStyle]}>
			<Text style={{color:"#E0AAFF"}}></Text>		
		</View>
	);

}
function CalenderHeader({curDay, days}) {
	return (
		<View style={styles.calender.header}>
			{days.map(day => {
				const styleCurDay = (curDay===day) ? styles.calender.headerLabels.curDay : 0;
				return (<Text style={[styles.calender.headerLabels, styleCurDay]}>{day}</Text>);
			})}
		</View>
	);
}
// some example tasks
const tasks = [
		{name: "Homework", description: "Math Homework", type: TaskType.DUE_DATE, length: -1, start: Date.UTC(26, 10, 16, 10), end: -1, taskStatus: TaskStatus.INCOMPLETE },
		{name: "Group Meeting", description: "Business Planning Group Meeting for Project 2", type: TaskType.EVENT, start: Date.UTC(26, 10, 17, 12), end: Date.UTC(26, 10, 17, 13, 30), taskStatus: TaskStatus.INCOMPLETE },
		{name: "Laundry Day", description: "Do your laundry!!!!", type: TaskType.REMINDER, length: -1, start: Date.UTC(26, 10, 15, 11), end: -1, taskStatus: TaskStatus.COMPLETE }
		];

export function Calender() {
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const curDay = new Date(Date.now()).getDay();
	const curHour = new Date(Date.now()).getHours();
	let startHour = curHour - 2;
	if (startHour < 0) {
		startHour = 0;
	}
	let timestamps = [];
	let suffix = "AM";
	for (let i=0; i<12; i++) {
		let t = (startHour+i) % 12;
		if ((startHour+i)%24 > 11 && (startHour+i)%24 != 0) {
			suffix = "PM";
		} else {
			suffix = "AM";
		}
		if (t==0) {
			t = 12;
		}
		timestamps.push((<TimeStamp 
			nextDay={((startHour+i)%24==23) ? styles.calender.daySeperator : {}} 
			current={((startHour+i)%24==curHour) ? {color: "#C77DFF", fontWeight: "bold", fontSize: "0.9em"} : {}}
			time={t+":00 "+suffix}
			children={days.map(day =>{return (<TaskContainer curDay={days[curDay]} day={day}/>)})}
			/>));
	}

	return (
		<View style={styles.calender}>
			<CalenderHeader curDay={days[curDay]} days={days}/>
			{timestamps}
		</View>
	);
}

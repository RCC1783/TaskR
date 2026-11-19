import { Text, View, Pressable, ScrollView} from "react-native";
import { styles } from "../styles";
import { TaskType, TaskStatus, insertTasksForDayAndHour } from "../modules/Task";
function TimeStamp({time, children, nextDay, current}) {
	return (
		<View style={[styles.hr, styles.calender.tsContainer, nextDay]}>
			<Text style={[styles.calender.timeStamp, current]}>{time}</Text>
			{children}	
		</View>
	);
}
function TaskContainer({curDay, day, stamp}) {
	const curDayStyle = (curDay === day) ? styles.calender.taskContainer.curDay : 0;
	const tasks = insertTasksForDayAndHour(day-curDay, stamp);
	const shrinkPadding = (tasks.length != 0) ? {padding: "0em"} : 0;
	return (
		<View style={[styles.calender.taskContainer, curDayStyle, shrinkPadding]}>
			{insertTasksForDayAndHour(day - curDay, stamp)}
		</View>
	);

}
function CalenderHeader({curDay, days}) {
	return (
		<View style={styles.calender.header}>
			{days.map((day, index) => {
				const styleCurDay = (curDay===day) ? styles.calender.headerLabels.curDay : 0;
				return (<Text key={index} style={[styles.calender.headerLabels, styleCurDay]}>{day}</Text>);
			})}
		</View>
	);
}

export function Calender() {
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const curDay = new Date(Date.now()).getDay();
	const curHour = new Date(Date.now()).getHours();
	const curDate = new Date(Date.now()).getDate();
	const curMonth = new Date(Date.now()).getMonth();
	const curYear = new Date(Date.now()).getFullYear();

	const curUnixTimeStamp = new Date(curYear, curMonth, curDate, 0).getTime();
	const unixTimeHourDelta = Date.UTC(2000, 0, 1, 2, 0) - Date.UTC(2000, 0, 1, 1, 0);
	let timeStampUnixTimeDate = curUnixTimeStamp;
	const startHour = 0;
	let timestamps = [];
	let suffix = "AM";
	for (let i=0; i<24; i++) {
		let t = (startHour+i) % 12;
		const ot = (startHour+i) % 24;
		if (ot > 11 && ot != 0) {
			suffix = "PM";
		} else {
			suffix = "AM";
		}
		if (t==0) {
			t = 12;
		}
		timestamps.push((<TimeStamp 
			key={i}
			nextDay={(ot==23) ? styles.calender.daySeperator : {}} 
			current={(ot==curHour) ? {color: "#C77DFF", fontWeight: "bold", fontSize: 14} : {}}
			time={t+":00 "+suffix}
			children={days.map((day, index) =>{return (<TaskContainer key={index} stamp={timeStampUnixTimeDate} day={index} curDay={curDay}/>)})}
			/>));
		timeStampUnixTimeDate += unixTimeHourDelta;
	}

	return (
		<ScrollView style={styles.calender}>
			<CalenderHeader curDay={days[curDay]} days={days}/>
			{timestamps}
		</ScrollView>
	);
}

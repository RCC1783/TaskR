import { Text, View, Pressable, ScrollView, Dimensions} from "react-native";
import { styles } from "../styles";
import { /*TaskType, TaskStatus,*/ insertTasksForDayAndHour } from "../modules/Task";
function TimeStamp({time, children, nextDay, current, dynamicStyle}) {
	return (
		<View style={[styles.hr, dynamicStyle.calender.tsContainer, nextDay]}>
			<Text style={[dynamicStyle.calender.timeStamp, current]}>{time}</Text>
			{children}	
		</View>
	);
}
function TaskContainer({curDay, day, stamp, dynamicStyle}) {
	const curDayStyle = (curDay === day) ? dynamicStyle.calender.taskContainer.curDay : 0;
	const tasks = insertTasksForDayAndHour(day-curDay, stamp, dynamicStyle);
	const shrinkPadding = (tasks.length != 0) ? {paddingTop: 0, paddingBottom: 0} : 0;
	return (
		<View style={[dynamicStyle.calender.taskContainer, curDayStyle, shrinkPadding]}>
			{tasks}
		</View>
	);

}
function CalenderHeader({curDay, days, dynamicStyle}) {
	return (
		<View style={dynamicStyle.calender.header}>
			{days.map((day, index) => {
				const styleCurDay = (curDay===day) ? dynamicStyle.calender.headerLabels.curDay : 0;
				return (<Text key={index} style={[dynamicStyle.calender.headerLabels, styleCurDay]}>{day}</Text>);
			})}
		</View>
	);
}

export function Calender() {
	const surveyWidth = Dimensions.get("window").width <= 767;
	const dynamicStyle = surveyWidth ? styles.mobileCalenderStyles : styles.calenderStyles;
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
			dynamicStyle={dynamicStyle}
			key={i}
			nextDay={(ot==23) ? dynamicStyle.calender.daySeperator : {}} 
			current={(ot==curHour) ? dynamicStyle.calender.currentTime : {}}
			time={t+":00 "+suffix}
			children={days.map((day, index) =>{return (<TaskContainer dynamicStyle={dynamicStyle} key={index} stamp={timeStampUnixTimeDate} day={index} curDay={curDay}/>)})}
			/>));
		timeStampUnixTimeDate += unixTimeHourDelta;
	}

	return (
		<ScrollView style={dynamicStyle.calender}>
			<CalenderHeader dynamicStyle={dynamicStyle} curDay={days[curDay]} days={days}/>
			{timestamps}
		</ScrollView>
	);
}

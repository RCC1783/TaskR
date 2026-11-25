import { Text, View, Pressable, FlatList, TextInput, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import { collection, doc, getDocs, setDoc, Timestamp } from "firebase/firestore";
import { firestoreDB } from "../firebaseConfig";
import { Task } from "../modules/Task"
import { Host, Slider, Column } from "@expo/ui"
import { InteractivePressable } from "../modules/InteractivePressable";
import { NavMenu } from "../modules/navMenu"

// Uploads inputed task to firestore database
async function UploadTask(newTask) {
    try{
        const docRef = doc(collection(firestoreDB, 'test'));
        setDoc(docRef, {
            ...newTask
        });
    } catch{
        console.error("Fail to create task");
    }
}
function monthStringify(month) {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[Math.round(month)];
}
function timeSelect(hour, minute) {
	const morn = (hour >= 12) ? "PM" : "AM";
	if (hour == 0 || hour == 12) {
		hour = 12;
	} else {
		hour = hour % 12;
	}
	minute = (minute < 10) ? "0"+minute : minute;
	return hour+":"+minute+morn;
}

function ScrollSelect({name, parse, value, onValueChange, min, max, step, hideView=true}) {
	return (
	<Host matchContents={{vertical: true}} style={styles.scrollSelect}>
		<Column spacing={8} style={styles.scrollSelect}>
		<View style={styles.scrollSelect.titleContainer}>
			<Text style={styles.scrollSelect.title}>{name + ((hideView) ? '\0' : ": ")}</Text>
			<Text style={styles.scrollSelect.title}>{(hideView) ? null : parse(value)}</Text>
		</View>
		<Slider style={styles.scrollSelect.slider} value={value} onValueChange={onValueChange} min={min} max={max} step={step}/>
		</Column>
	</Host>
	);

}

// Screen where user is able to input task details and create the task
export default function CreateNewTask({navigation}){
	const d = new Date(Date.now());
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [newTask, setNewTask] = useState(null);
	const [taskYear, setTaskYear] = useState(d.getFullYear());
	const [taskMonth, setTaskMonth] = useState(d.getMonth());
	const [taskDay, setTaskDay] = useState(d.getDate());
	const [taskHour, setTaskHour] = useState(d.getHours());
	const [taskMinute, setTaskMinute] = useState(d.getMinutes());

    useEffect(() => {
        if(newTask == null) return;
        UploadTask(newTask);
        navigation.goBack();
    }, [newTask])

    return(
        <SafeAreaView style={styles.viewportContainer}>
            <Text style={styles.h1}>Create New Task</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Task Name"
                value={taskName}
                onChangeText={setTaskName}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Description"
                value={taskDescription}
                onChangeText={setTaskDescription}
            />
	    <View style={styles.timeSelect}>
	    <Text style={styles.timeSelect.text}>{"Time: "+monthStringify(taskMonth)+" "+taskDay+", "+taskYear+" at "+timeSelect(taskHour, taskMinute)}</Text>
	    <TextInput
		style={styles.textInput}
	    	placeholder="Year"
	    	value={taskYear}
	    	onChangeText={setTaskYear}
	    />
	    <ScrollSelect
		name={"Month"}
	    	parse={monthStringify}
	    	value={taskMonth} onValueChange={setTaskMonth} min={0} max={11} step={1}
	    />
	    <ScrollSelect
		name={"Day"}
	    	parse={(day) =>{return day;}}
	    	value={taskDay} onValueChange={setTaskDay} min={1} max={31} step={1}
	    />
	    <ScrollSelect
		name={"Hour"}
	    	parse={(hour) =>{return (hour == 0 || hour==12) ? 12 : hour % 12;}}
	    	hideView={true}
	    	value={taskHour} onValueChange={setTaskHour} min={0} max={23} step={1}
	    />
	    <ScrollSelect
		name={"Minute"}
	    	hideView={true}
	    	parse={(minute) =>{return minute;}}
	    	value={taskMinute} onValueChange={setTaskMinute} min={0} max={59} step={1}
	    />
	    </View>
            <InteractivePressable
                style={styles.button}
                onPress={() => setNewTask(new Task(taskName, taskDescription, undefined, new Date(taskYear, taskMonth, taskDay, taskHour, taskMinute).getTime()))}
                text={"Create New Task"}
            />
            <NavMenu navigation={navigation}/>
        </SafeAreaView>
    )
}

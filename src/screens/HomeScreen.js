import { Text, View, Pressable, FlatList, } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InteractivePressable } from "../modules/InteractivePressable"
import { Calender } from "../modules/Calender"

import { styles } from "../styles";
import { NavMenu } from "../modules/navMenu";
import { useCallback, useEffect, useState } from "react";
import { collection, deleteDoc, getDocs, doc, Timestamp } from "firebase/firestore";
import { firestoreDB } from "../firebaseConfig";

// Function to get tasks from firebase
export async function GetTasks(){
    const querySnapshot = await getDocs(collection(firestoreDB, "test"));
    let allDocs = [];
    querySnapshot.forEach((doc) => {
        allDocs.push({
            ...doc.data(),
            id: doc.id
        });
    });
    
    return allDocs;
}

async function DeleteTasks() {
	const query = await getDocs(collection(firestoreDB, "test"));
	query.forEach(async (docSnapshot) => {
		await deleteDoc(doc(firestoreDB, "test", docSnapshot.id));
	});
}

// The main screen of the application. Displays most upcoming task and calendar view
export default function HomeScreen({navigation}){
    // const navigation = useNavigation();
    let date = new Date();

    const [taskList, setTaskList] = useState([]);

    useFocusEffect(
        useCallback(() => {
            GetTasks().then(result => { setTaskList(result);});
        }, [])
    );

    useEffect(() => {
        taskList.sort((a, b) => {
            return a.start - b.start;
        })
    }, [taskList])

    return (
        <SafeAreaView style={styles.viewportContainer}>
            <View style={[{height: 0}]}><View style={styles.devUserIcon}/></View>
            <Text style={styles.h2}>Today is</Text>
            <Text style={styles.h1}>{date.toDateString()}</Text>
            
            <View style={styles.hr}/>

            <Text style={styles.h2}>Upcoming</Text>

            {taskList.length > 0 && (
                <View style={styles.taskBlock}>
                    <Text style={styles.taskBlock.date}>Do by: {new Date(taskList[0].start).toLocaleString("en-US")}</Text>
                    <Text style={styles.taskBlock.title}>{taskList[0].name}</Text>
                    <Text style={styles.taskBlock.description}>{taskList[0].description}</Text>
                    <Pressable>
                        <Text style={styles.taskBlock.editButton}>Edit</Text>
                    </Pressable>
                </View>
            )}
            
            <View style={styles.hr}/>

	        <Calender/>

            <NavMenu navigation={navigation}/>
        </SafeAreaView>
    );
}

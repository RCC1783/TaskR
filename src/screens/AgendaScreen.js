import { Text, View, Pressable, FlatList, } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { InteractivePressable } from "../modules/InteractivePressable"

import { styles } from "../styles";
import { NavMenu } from "../modules/navMenu";
import { useCallback, useEffect, useState } from "react";
// import { collection, getDocs, Timestamp } from "firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import { firestoreDB } from "../firebaseConfig";
import { GetTasks } from "./HomeScreen";
import { cancelTaskReminder } from "../modules/Reminders";

// deletes a task from firebase
async function DeleteTask(task) {
    await deleteDoc(doc(firestoreDB, "test", task.id));
    cancelTaskReminder(task);
}

// Screen to display all tasks chronologically from oldest to newest
export default function AgendaScreen({navigation}) {
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

        const removeTask = (task) => {
            DeleteTask(task)
                .then(() => setTaskList(taskList.filter((item) => item.id !== task.id)))
                .catch(console.error);
        }

    return(
        <SafeAreaView style={styles.viewportContainer}>
            <View style={[{height: 0}]}><View style={styles.devUserIcon}/></View>
            <Text style={styles.h2}>Today is</Text>
            <Text style={styles.h1}>{date.toDateString()}</Text>
            
            <View style={styles.hr}/>
            <Text style={styles.h2}>All</Text>
            <FlatList
                data={taskList}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View style={styles.taskBlock}>
                        <Text style={styles.taskBlock.date}>Do by: {new Date(item.start).toLocaleString("en-US")}</Text>
                        <Text style={styles.taskBlock.title}>{item.name}</Text>
                        <Text style={styles.taskBlock.description}>{item.description}</Text>
                        <View style={styles.taskBlock.actions}>
                            <Pressable>
                                <Text style={[styles.taskBlock.editButton, {width: 'auto'}]}>Edit</Text>
                            </Pressable>
                            <Pressable onPress={() => removeTask(item)}>
                                <Text style={styles.taskBlock.deleteButton}>Delete</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            />
            
            <NavMenu navigation={navigation}/>
        </SafeAreaView>
    )
}

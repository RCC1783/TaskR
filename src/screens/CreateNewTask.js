import { Text, View, Pressable, FlatList, TextInput, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import { collection, doc, getDocs, setDoc, Timestamp } from "firebase/firestore";
import { firestoreDB } from "../firebaseConfig";

class Task {
    dueDate = null;
    title = ''
    description = "no description provided";
    constructor(tite, description){
        this.title = tite;
        this.description = description;
        this.dueDate = Timestamp.now();
    }
}

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

export default function CreateNewTask({navigation}){
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [newTask, setNewTask] = useState(null);

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
            <Pressable
                style={styles.button}
                onPress={() => setNewTask(new Task(taskName, taskDescription))}
            >
                <Text style={styles.button.text}>Create New Task</Text>
            </Pressable>
        </SafeAreaView>
    )
}
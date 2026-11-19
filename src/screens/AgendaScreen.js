import { Text, View, Pressable, FlatList, } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { InteractivePressable } from "../modules/InteractivePressable"

import { styles } from "../styles";
import { NavMenu } from "../modules/navMenu";
import { useCallback, useEffect, useState } from "react";
// import { collection, getDocs, Timestamp } from "firebase/firestore";
// import { firestoreDB } from "../firebaseConfig";
import { GetTasks } from "./HomeScreen";

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
                return a.dueDate.toDate() - b.dueDate.toDate();
            })
        }, [taskList])

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
                        <Text style={styles.taskBlock.date}>Do by: {item.dueDate.toDate().toLocaleString()}</Text>
                        <Text style={styles.taskBlock.title}>{item.title}</Text>
                        <Text style={styles.taskBlock.description}>{item.description}</Text>
                        <Pressable>
                            <Text style={styles.taskBlock.editButton}>Edit</Text>
                        </Pressable>
                    </View>
                )}
            />
            
            <NavMenu navigation={navigation}/>
        </SafeAreaView>
    )
}
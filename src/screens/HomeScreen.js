import { Text, View, Pressable, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InteractivePressable } from "../modules/InteractivePressable"
import { Calender } from "../modules/Calender"

import { styles } from "../styles";
import { NavMenu } from "../../navMenu";

export default function HomeScreen({navigation}){
    // const navigation = useNavigation();
    let date = new Date();

    return (
        <SafeAreaView style={styles.viewportContainer}>
            <View style={[{height: 0}]}><View style={styles.devUserIcon}/></View>
            <Text style={styles.h1}>Today is</Text>
            <Text style={styles.h2}>{date.toDateString()}</Text>
            
            <View style={styles.hr}/>

            <Text style={styles.h2}>Upcoming</Text>

            {/* Just for testing - will be populated with a real task later*/}
            <View style={styles.taskBlock}>
                <Text style={styles.taskBlock.date}>07/15/2026 at 2:30pm</Text>
                <Text style={styles.taskBlock.title}>Homework</Text>
                <Text style={styles.taskBlock.description}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</Text>
                <Pressable>
                    <Text style={styles.taskBlock.editButton}>Edit</Text>
                </Pressable>
            </View>
            <View style={styles.hr}/>
	    <InteractivePressable 
	    	style={styles.button} 
	    	text={"New Task"} 
	    />
            {/* I want this to be at the bottom of the screen but was encountering issues lol */}
            <NavMenu navigation={navigation}/>
	    <Calender/>
        </SafeAreaView>
    );
}

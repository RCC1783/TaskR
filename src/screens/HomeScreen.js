import { Text, View, Pressable, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../styles";

export default function HomeScreen(){
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.viewportContainer}>
            <Text style={styles.h1}>Today is</Text>
            <Text style={styles.h2}>Monday June 16, 2026</Text>

            <Text style={styles.h1}>---</Text>

            <Text style={styles.h2}>Due Soon</Text>

            {/* Just for testing - will be populated with a real task later*/}
            <View style={styles.taskBlock}>
                <Text style={styles.taskBlock.date}>2:30pm 07/15/2026</Text>
                <Text style={styles.taskBlock.title}>Homework</Text>
                <Text style={styles.taskBlock.description}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</Text>
                <Text style={styles.taskBlock.editButton}>Edit</Text>
            </View>
        </SafeAreaView>
    );
}
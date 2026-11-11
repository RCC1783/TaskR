import { Text, View, Pressable, TextInput, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../styles";

export default function LoginScreen({navigation}){
    return (
        <SafeAreaView style={[styles.viewportContainer, {justifyContent:'center', alignItems: 'center'}]}>
            <Text style={styles.logotype}>TaskR</Text>
            <TextInput
                style={styles.textInput}
                placeholder="email"
                placeholderTextColor={styles.textInput.placeholder.colour}
                inputMode="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.textInput}
                placeholder="password"
                placeholderTextColor={styles.textInput.placeholder.colour}
                autoCapitalize="none"
                secureTextEntry={true}
            />
            <Pressable style={styles.button} onPress={() => navigation.navigate('home')}>
                <Text style={styles.button.text}>Log In</Text>
            </Pressable>
            <Pressable >
                <Text style={styles.linkStyle}>Create Account</Text>
            </Pressable>
        </SafeAreaView>
    )
}
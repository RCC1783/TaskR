import { Text, View, Pressable, TextInput, } from "react-native";
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../styles";

export default function LoginScreen({navigation}){
    const [isHover, setHover] = useState(false);
    const [isPressed, setPress] = useState(false);
    const buttonPress = isPressed ? styles.button.pressed : 0; 
    const buttonState = isHover ? (isPressed ? buttonPress : styles.button.idle) : 0;	
    
    return (
        <SafeAreaView style={[styles.viewportContainer, styles.viewportContainer.homeScreen, { justifyContent:'center', alignItems: 'center'}]}>
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
            <Pressable style={[styles.button, buttonState]} 
	        onHoverIn={() => setHover(true)}
	        onHoverOut={() => setHover(false)}
		onPressIn={() => setPress(true)}
	    	onPress={() => {setPress(false); navigation.navigate('home')}}
	    >
                <Text style={styles.button.text}>Log In</Text>
            </Pressable>
            <Pressable >
                <Text style={styles.linkStyle}>Create Account</Text>
            </Pressable>
        </SafeAreaView>
    );
}

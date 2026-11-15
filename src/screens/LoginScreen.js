import { Text, View, Pressable, TextInput, } from "react-native";
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InteractivePressable } from "../modules/InteractivePressable"
import { styles } from "../styles";

export default function LoginScreen({navigation}){ 
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
	    <InteractivePressable
	    	onPress={()=>{navigation.navigate('home')}}
	    	style={styles.button}
	    	text={"Log In"}
	    />
            <Pressable >
                <Text style={styles.linkStyle}>Create Account</Text>
            </Pressable>
        </SafeAreaView>
    );
}

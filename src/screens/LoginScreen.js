import { Text, View, Pressable, TextInput, } from "react-native";
import { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InteractivePressable } from "../modules/InteractivePressable"
import { styles } from "../styles";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebaseConfig";

// Function to request sign in from firebase authentication module
async function SignIn(email, password, navigation) {
    try{
        if(email == '' || password == '') return "sign in fail";
        const response = await signInWithEmailAndPassword(firebaseAuth, email, password);

        navigation.navigate("home");
        return "sign in success";
    }catch (error){
        console.error("Sign in failed:");
        return "sign in fail";
    }
}

// Function to request sign up from firebase authentication module
async function SignUp(email, password, navigation) {
    try {
        if(email == '' || password == '') return "sign up fail";
        const response = await createUserWithEmailAndPassword(firebaseAuth,email, password);

        navigation.navigate('home');
        return "sign up success";
    } catch (error) {
        console.error(error.message);
        return "sign up fail";
    }
}

// Screen for users to log in
export default function LoginScreen({navigation}){ 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signInState, setSignInState] = useState('');

    return (
        <SafeAreaView style={[styles.viewportContainer, styles.viewportContainer.homeScreen, { justifyContent:'center', alignItems: 'center'}]}>
            <Text style={styles.logotype}>TaskR</Text>
            {signInState == "sign in fail" && (
                <Text style={styles.taskBlock.description}>Sign in failed. Please try again or create account.</Text>
            )}
            {signInState == "sign up fail" && (
                <Text style={styles.taskBlock.description}>Sign Up failed. Please ensure you are using a valid email and using a password that is 8 characters long with at least one uppercase, lowercase, and number.</Text>
            )}
            <TextInput
                style={styles.textInput}
                placeholder="email"
                placeholderTextColor={styles.textInput.placeholder.colour}
                inputMode="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.textInput}
                placeholder="password"
                placeholderTextColor={styles.textInput.placeholder.colour}
                autoCapitalize="none"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <InteractivePressable
                onPress={()=> SignIn(email, password, navigation)
                    .then(result => {setSignInState(result)})}
                style={styles.button}
                text={"Log In"}
            />
            <Pressable 
                onPress={() => SignUp(email, password, navigation)
                    .then(result => {setSignInState(result)})}
            >
                <Text style={styles.linkStyle}>Create Account</Text>
            </Pressable>
        </SafeAreaView>
    );
}

import { Text, View, Pressable, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { styles } from "../styles";
import { useEffect, useState } from "react";



export const NavMenu = ({navigation}) => {
    const insets = useSafeAreaInsets();

    if(navigation == null) return;
    // Might replace w icons later
    return(
        <View style={{flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'center', gap: 15, width: '100%', position: 'fixed', left: insets.left, bottom: insets.bottom}}>
            <View style={styles.navMenu}>
                <Pressable onPress={() => navigation.navigate('home')}>
                    <Text style={styles.navMenu.text}>Home</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('agenda')}>
                    <Text style={styles.navMenu.text}>Agenda</Text>
                </Pressable>
            </View>
            <Pressable 
                style={[styles.button, {maxWidth: '15%', minWidth: 50}]}
                onPress={() => navigation.navigate("newTask")}
                >
                <Text style={styles.button.text}>+</Text>
            </Pressable>
        </View>
    );
}

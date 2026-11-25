import { Text, View, Pressable, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { InteractivePressable } from "./InteractivePressable"
import { styles } from "../styles";
import { useEffect, useState } from "react";

// Reusable Navigation bar to switch between screens. Add to bottom of other screens to use
export const NavMenu = ({navigation}) => {
    const insets = useSafeAreaInsets();

    if(navigation == null) return;
    // Might replace w icons later
    return(
        <View style={{flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'center', gap: 15, width: '100%', position: 'fixed', left: insets.left, bottom: insets.bottom}}>
            <View style={styles.navMenu}>
                <InteractivePressable 
	    		style={styles.navMenu.button}
	    		onPress={() => navigation.navigate('home')}
                    	text={"Home"}
                />
                <InteractivePressable 
	    		onPress={() => navigation.navigate('agenda')}
                	style={styles.navMenu.button}
	    		text={"Agenda"}
	    	/>
            </View>
            <InteractivePressable 
                style={[styles.button, {maxWidth: '15%', minWidth: 50}]}
                onPress={() => navigation.navigate("newTask")}
                text={"+"}
            />
        </View>
    );
}

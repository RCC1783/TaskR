import { Text, View, Pressable, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from "./src/styles";

export const NavMenu = ({navigation}) => {
    // const insets = useSafeAreaInsets();

    if(navigation == null) return;
    // Might replace w icons later
    return(
        <View style={styles.navMenu}>
            <Pressable>
                <Text style={styles.navMenu.text}>Home</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.navMenu.text}>Calendar</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.navMenu.text}>Agenda</Text>
            </Pressable>
        </View>
    );
}
import { Text, Pressable, } from "react-native";
import { useState } from 'react';
export function InteractivePressable({text, style, onPress=() => 0}) {
	const [isHover, setHover] = useState(false);
	const [isPressed, setPress] = useState(false);
	const buttonPress = isPressed ? style.pressed : 0; 
	const buttonState = isHover ? (isPressed ? buttonPress : style.hover) : 0;	

	return (
            <Pressable style={[style, buttonState]}
	        onHoverIn={() => {setHover(true)}}
	        onHoverOut={() => {setHover(false); setPress(false)}}
		onPressIn={() => {setPress(true)}}
	    	onPress={() => {onPress(); setPress(false);}}
	    >
                <Text style={style.text}>{text}</Text>
	    </Pressable>
	);

	

}

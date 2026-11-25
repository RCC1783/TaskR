import { Text, Pressable, } from "react-native";
import { useState } from 'react';
export function InteractivePressable({text, style, onPress=() => 0}) {
	const st = (style[0] != null) ? style[0] : style;
	const [isHover, setHover] = useState(false);
	const [isPressed, setPress] = useState(false);
	const buttonPress = isPressed ? st.pressed : 0; 
	const buttonState = isHover ? (isPressed ? buttonPress : st.hover) : 0;	

	return (
            <Pressable style={[style, buttonState]}
	        onHoverIn={() => {setHover(true)}}
	        onHoverOut={() => {setHover(false); setPress(false)}}
		onPressIn={() => {setPress(true)}}
	    	onPress={() => {onPress(); setPress(false);}}
	    >
                <Text style={st.text}>{text}</Text>
	    </Pressable>
	);

	

}

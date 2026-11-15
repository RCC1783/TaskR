import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewportContainer: {
	homeScreen: {
	backgroundImage: "linear-gradient(159deg,rgba(16, 0, 43, 1) 0%, #330A5C 50%, #10002B 100%)"
	},
	backgroundColor: "#10002B",
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 25,
        paddingVertical: 20,
        gap: 10,
    },

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 10,

    },

    logotype: {
        fontSize: 48,
        fontFamily: 'calSans',
        maxWidth: 600,
	color: '#ffffff',
	filter: "drop-shadow(0px 0px 12px #5A189A);",
	marginBottom: 25
    },
    h1: {
        fontSize: 24,
        fontFamily: "comfortaa",
        fontWeight: 'bold',
	color: "#9D4EDD"
    },
    h2: {
        fontSize: 20,
        fontFamily: "comfortaa",
        fontWeight: 'semibold',
	color: "#9D4EDD"
    },

    hr: {
        borderColor: '#7B2CBF',
        borderBottomWidth: 1,
        borderRadius: 5
    },
    textInput: {
        placeholder: {
            colour: '#E0AAFF'
        },
	backgroundColor: "#240046",
	color: '#C77DFF',

        fontSize: 16,
        fontFamily: "comfortaa",
        // textAlign: 'center',

        boxShadow: '0 1px 6px 0 rgba(224, 170, 255, 0.17) inset',

        borderRadius: 25,

        paddingHorizontal: 20,
        paddingVertical: 10,

        width: '100%',
        maxWidth: 400
    },
    button: {
        text: {
            fontSize: 16,
            fontFamily: "comfortaa",
            textAlign: 'center',
            color: '#ffff',
        },
	hover: {
            backgroundColor: '#9D4EDD'
	},
	pressed: {
	    backgroundColor: '#5A189A',
	    transition: 'background-color 0s'
	},

        backgroundColor: '#7B2CBF',
	transition: 'background-color 0.25s',

        shadowOpacity: 0.15,
        shadowRadius: 5,
        shadowColor: "#9D4EDD",
        shadowOffset: {width: 0, height: 1},
        elevation: 5,

        borderRadius: 25,

        paddingHorizontal: 20,
        paddingVertical: 10,

        width: '100%',
        maxWidth: 400
    },
    linkStyle: {
        fontFamily: "comfortaa",
        fontWeight: 'bold',
        color: '#E0AAFF'
    },

    taskBlock: {
        date: {
            fontSize: 13,
            fontFamily: "comfortaa",
        },
        title: {
            fontSize: 20,
            fontFamily: "comfortaa",
            fontWeight: 'bold',
            
        },
        description: {
            fontSize: 14,
            fontFamily: "comfortaa",
        },
        editButton: {
            fontSize: 14,
            fontFamily: "comfortaa",
            fontWeight: "bold",
            color: "#7B2CBF",

            width: '100%',
            textAlign: 'right'
        },


        backgroundColor: '#C77DFF',
        shadowOpacity: 0.15,
        shadowRadius: 5,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 1},
        elevation: 5,

        borderRadius: 25,

        paddingHorizontal: 20,
        paddingVertical: 10,
        maxWidth: 500,
    },

    navMenu: {
        text: {
            fontSize: 14,
            fontFamily: "comfortaa",
            fontWeight: 'bold',
	    color: "#9D4EDD"
        },
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
	backgroundColor: "#240046",
	borderRadius: '1em',
	borderStyle: 'solid',
	borderWidth: '1px',
	borderColor: '#5A189A',
        
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,

        boxShadow: '0 0 4px 2px #5a189a inset',
    },

    devUserIcon: {
        backgroundColor: '#c4c4c4',
        borderRadius: 25,
        width: 50,
        height: 50,
        position: 'absolute',
        right: 20,
        top: 15
    }
});

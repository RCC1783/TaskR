import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewportContainer: {
        homeScreen: {
            backgroundImage: "linear-gradient(191deg, #4C097E 25.01%, #3D1D91 75.01%)"
        },
	    backgroundImage: "linear-gradient(180deg, #4C097E 43.76%, #3D1D91 100%)",
        flex: 1,
        minHeight: '100%',
        flexDirection: 'column',
        paddingHorizontal: 25,
        paddingVertical: 20,
        gap: 10,
        overflow: 'scroll'
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
	    color: "#ffffff"
    },
    h2: {
        fontSize: 20,
        fontFamily: "comfortaa",
        fontWeight: 'semibold',
	    color: "#ffffff"
    },

    hr: {
        borderColor: '#ffffff',
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
            fontSize: 12,
            fontWeight: 'light',
            fontFamily: "comfortaa",
            color: '#FFFF'
        },
        title: {
            fontSize: 20,
            fontFamily: "comfortaa",
            fontWeight: 'bold',
            color: '#FFFF'
        },
        description: {
            fontSize: 14,
            fontFamily: "comfortaa",
            color: '#FFFF'
        },
        editButton: {
            fontSize: 12,
            fontFamily: "comfortaa",
            fontWeight: "bold",
            color: "#FFBAB8",

            width: '100%',
            textAlign: 'right'
        },


        backgroundColor: 'rgba(3, 0, 10, 0.3)',
        boxShadow: '1px 2px 2px 0 rgba(185, 255, 251, 0.15) inset, 0 2px 5px 0 rgba(0, 0, 0, 0.50)',
        elevation: 5,

        border: '1.5px solid rgba(162, 95, 255, 0.3)',
        borderRadius: 25,

        paddingHorizontal: 15,
        paddingVertical: 12,
        gap: 5, 
        maxWidth: 500,
        marginHorizontal: 5,
        marginBottom: 10,
    },

    navMenu: {
        text: {
            fontSize: 14,
            fontFamily: "comfortaa",
            fontWeight: 'bold',
	        color: "#fff",
        },
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        
        backgroundColor: "rgba(41, 26, 65, 0.95)",
        borderRadius: 16,
        border: '1px solid rgba(244, 128, 255, 0.27)',
        
        paddingHorizontal: 45,
        paddingVertical: 10,
        borderRadius: 25,

        boxShadow: '1px 2px 1.5px 0 rgba(231, 179, 255, 0.25) inset, 0 1px 5px 0 rgba(0, 0, 0, 0.15)',
        effects: 110
    },

    devUserIcon: {
        backgroundColor: '#c4c4c4',
        borderRadius: 25,
        width: 50,
        height: 50,
        position: 'absolute',
        right: 20,
        top: 15
    },

    calender: {
	timeStamp: {
		color: '#7B2CBF',
		fontSize: 12.8,
		minWidth: "5%",
		flexShrink: 1,
	},
        tsContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		textAlign: "left",
        },
	daySeperator: {
		borderBottomWidth: 3,
		borderColor: "#9D4EDD",
		borderRadius: 1
	},
	header: {
		marginLeft: "5%",
		display: "flex",
		flexDirection: "row",
		paddingTop: 9.6,
		paddingBottom: 9.6,

	},
	taskContainer: {
		paddingTop: 16,
		paddingBottom: 16,
		flexGrow: 2, 
		flexShrink: 2,
		flexBasis: "0px",
		maxWidth: "calc(100% / 7)",
		height: "100%",
		curDay: {
			backgroundColor: "#240046",
		},
	},
	headerLabels: {
		flexGrow: 2, 
		flexShrink: 2,
		flexBasis: "0px",
		fontSize: 16,
		textAlign: "center",
		color: "#9D4EDD",
		maxWidth: "calc(100% / 7)",
		curDay: {
			color: "#C77DFF",
			fontWeight: "bold"
		}
	}

    },
    calTask: {
    	taskHeader: {
		backgroundColor: "red",
		fontSize: 12,
        borderRadius: 12.8,
		paddingLeft: 8,
            	fontFamily: "comfortaa",
		color: "#10002B",
	},
    	completed: {
		backgroundColor: "green"
	},
	titleText: {
            	fontFamily: "comfortaa",
		fontStyle: "bold",
		fontSize: 16,
		color: "black",
	},
	margin: 0,
        backgroundColor: '#C77DFF',
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 4,
    }
});

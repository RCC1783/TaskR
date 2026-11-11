import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewportContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#ffff",
        paddingHorizontal: 25,
        paddingVertical: 20,
        gap: 10,
    },

    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingHorizontal: 20,
        paddingVertical: 10,

    },

    logotype: {
        fontSize: 48,
        fontFamily: 'calSans',

        maxWidth: 600
    },
    h1: {
        fontSize: 24,
        fontFamily: "comfortaa",
        fontWeight: 'bold',
        color: '#454545'
    },
    h2: {
        fontSize: 20,
        fontFamily: "comfortaa",
        fontWeight: 'semibold'
    },

    hr: {
        borderColor: '#000',
        borderBottomWidth: 1,
        borderRadius: 5
    },
    textInput: {
        placeholder: {
            colour: '#565656'
        },

        fontSize: 16,
        fontFamily: "comfortaa",
        // textAlign: 'center',

        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.15) inset',

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

        backgroundColor: '#C16330',

        shadowOpacity: 0.15,
        shadowRadius: 5,
        shadowColor: "#000",
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
        color: '#6C95C2'
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
            color: "#6C95C2",

            width: '100%',
            textAlign: 'right'
        },


        backgroundColor: '#ffff',
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
            fontWeight: 'bold'
        },
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,

        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.15)',
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
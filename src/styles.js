import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewportContainer: {
        flex: 1,
        backgroundColor: "#ffff",
        paddingHorizontal: 25,
        paddingVertical: 40,
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
        fontWeight: 'bold'
    },
    h2: {
        fontSize: 24,
        fontFamily: "comfortaa",
        fontWeight: 'semibold'
    },

    textInput: {
        placeholder: {
            colour: '#565656'
        },

        fontSize: 16,
        fontFamily: "comfortaa",
        // textAlign: 'center',

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
        fontSize: 16,
        fontFamily: "comfortaa",
        fontWeight: 'bold',
        color: '#6C95C2'
    },

    taskBlock: {
        date: {
            fontSize: 12,
            fontFamily: "comfortaa",
        },
        title: {
            fontSize: 16,
            fontFamily: "comfortaa",
            fontWeight: 'bold',
            
        },
        description: {
            fontSize: 13,
            fontFamily: "comfortaa",
        },
        editButton: {
            fontSize: 13,
            fontFamily: "comfortaa",
            fontWeight: "semibold"
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

        gap: 5,
    }

});
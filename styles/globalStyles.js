import { StyleSheet } from 'react-native';
import constants from 'expo-constants';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6F9A88",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: constants.statusBarHeight,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'green',
        textAlign: "center",
    },
    subtitleText: {
        fontSize: 20,
        textAlign: "center",
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        textAlign: "center",
    },
    body: {
        flex: 3,
        backgroundColor: '#F2BE00',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        alignItems: 'center'
    },
    background: {
        width: "100%",
        height: "100%",
    },
    logo: {
        width: 100,
        height: 100,
        marginLeft: "15%",
        marginTop: "10%",
    },
    header: {
        color: "white",
        fontSize: 60,
        textAlign: "center",
        marginTop: 50,
    },

    style: {
        flex: 1,
        justifyContent: "center",
        padding: 8,
        marginTop: 15,
    },
    signUpForm: {
        flex: 1,
        justifyContent: "center",
        padding: 8,
        marginTop: 15,
    },
    InputField: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1
    },
    leftIconStyle: {
        marginRight: 10
    },
    buttonGroup: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        flex: 1
    },
    buttonGroupRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '10%'
    },
    button: {
        fontSize: 25,
        backgroundColor: "#6F9A88",
        color: "#fff",
        width: "80%",
        borderRadius: 25,
        textAlign: "center",
        fontWeight: "bold",
        marginLeft: "10%",
        marginRight: "10%",
        padding: "2%",
        marginTop: "5%",
    },
    mButton: {
        fontSize: 16,
        backgroundColor: "#6F9A88",
        color: "#fff",
        width: "80%",
        borderRadius: 25,
        textAlign: "center",
        fontWeight: "bold",
        marginLeft: "10%",
        marginRight: "10%",
        padding: "2%",
        marginTop: "5%",
    },
    sButton: {
        fontSize: 10,
        backgroundColor: "#6F9A88",
        color: "#fff",
        width: "35%",
        borderRadius: 25,
        textAlign: "center",
        fontWeight: "bold",
        marginLeft: "5%",
        marginRight: "5%",
        padding: "2%",
        marginTop: "5%",
    },
    buttonPink: {
        margin: '5%',
        backgroundColor: 'pink'
    },
    buttonMini: {
        marginHorizontal: '-5%'
    },
    backgroundBox: {
        marginVertical: 30, backgroundColor: 'white', width: '85%', flexDirection: 'column', borderRadius: 25, justifyContent: 'space-between', flex: 1, alignSelf: 'center', paddingVertical: 10
    }
});

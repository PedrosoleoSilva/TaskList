import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    Container: {
        width: '100%',
        backgroundColor: '#242424',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    textParticipante: {
        flex: 1,
        fontSize: 16,
        color: '#6b6b6b',
        marginLeft: 16,
    },
    textButton: {
        fontSize:24,
        color: '#fff'
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
});

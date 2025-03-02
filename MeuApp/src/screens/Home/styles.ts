import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 24
    },
    nomeEvent: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 48,
        color: '#6b6b6b'
    },
    dateEvent: {
        fontSize: 16,
        color: '#6b6b6b'
    },
    textInput: {
        flex: 1,
        height: 56,
        backgroundColor: '#1E1E1E',
        borderRadius: 5,
        padding: 16,
        fontSize: 16,
        marginRight: 10,
        fontWeight: 'bold' ,
   
    },
    textButton: {
        fontSize:24,
        color: '#fff'
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#15e83c',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    }
});
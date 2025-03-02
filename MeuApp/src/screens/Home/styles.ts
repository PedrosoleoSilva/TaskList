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
        color: '#fff'
    },
    dateEvent: {
        fontSize: 16,
        color: '#fff'
    },
    textInput: {
        height: 56,
        backgroundColor: '#1E1E1E',
        borderRadius: 5,
        padding: 16,
        fontSize: 16,
        marginRight: 12,
        fontWeight: 'bold' ,
        marginTop: 16   
    },
    textButton: {
        fontSize:24,
        
    },
    button: {
        width: 46,
        height: 46,
        backgroundColor: '#15e83c',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
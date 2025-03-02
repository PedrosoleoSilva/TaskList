import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";


const Home = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.nomeEvent}>Lista de Eventos</Text>
            <Text style={styles.dateEvent}>01 de março de 2025.</Text>
            
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite nome convidado"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
        </View>
    );
}

export default Home;
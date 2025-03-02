import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Participantes from "../../components/Participantes";


const Home = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.nomeEvent}>Lista de Eventos</Text>
            <Text style={styles.dateEvent}>01 de março de 2025.</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite nome convidado"
                    placeholderTextColor="#6b6b6b"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>
            <Participantes
                name="Leonardo"
            />
            <Participantes
                name="Pedro"
            />

        </View>
    );
}

export default Home;
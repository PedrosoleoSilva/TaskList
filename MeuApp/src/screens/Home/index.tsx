import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";


const Home = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.nomeEvent}>Lista de Eventos</Text>
            <Text style={styles.dateEvent}>01 de março de 2025.</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite nome convidado"
                />
            </View>
        </View>
    );
}

export default Home;
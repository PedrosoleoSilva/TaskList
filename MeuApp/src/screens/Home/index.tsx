import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from "react-native";
import { styles } from "./styles";
import Participantes from "../../components/Participantes";
import { useState } from "react";

const Home = () => {
    const [participants, setParticipants] = useState<string[]>([]);
    const [nome, setNome] = useState('');

    function adicionaParticipante() {
        if (participants.includes(nome)) {
            return Alert.alert("Erro", "Participante já existe na lista.");
        }
        setParticipants(prevState => [...prevState, nome]);
        setNome("");
    }

    function removeParticipante(name: string) {
        Alert.alert("Remover", `Você deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    };

    return (
        <View style={styles.Container}>
            <Text style={styles.nomeEvent}>Aniversário </Text>
            <Text style={styles.dateEvent}>01 de março de 2025.</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite o nome do convidado"
                    placeholderTextColor="#6b6b6b"
                    value={nome}
                    onChangeText={setNome}
                />
                <TouchableOpacity style={styles.button} onPress={adicionaParticipante}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participantes
                        key={item}
                        nome={item}
                        onRemove={() => removeParticipante(item)}
                    />
                )}
            />
        </View>
    );
}

export default Home;

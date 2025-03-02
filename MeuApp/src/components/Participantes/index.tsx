import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    nome: string;
    onRemove: () => void;
}

const Participantes = ({nome, onRemove}: Props) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.textParticipante}>
                {nome}
            </Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Participantes;
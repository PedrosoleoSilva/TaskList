import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    name: String,
}

const Participantes = ({name}: Props) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.textParticipante}>
                {name}
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Participantes;
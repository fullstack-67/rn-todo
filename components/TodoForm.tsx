import { FC } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, FONT } from "../constants/theme";

interface Props {
  txt: string;
  setTxt: (txt: string) => void;
  addTodo: (txt: string) => void;
}

const TodoForm: FC<Props> = ({ txt, setTxt, addTodo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>New Todo</Text>
      <View style={styles.formContainer}>
        <TextInput
          value={txt}
          onChangeText={(t) => setTxt(t)}
          placeholder={"Todo"}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addTodo(txt);
          }}
        >
          <Ionicons name="add" size={32} color={COLORS.lightWhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 20,
    backgroundColor: COLORS.gray2,
  },
  formContainer: { flexDirection: "row" },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderRadius: 4,
    backgroundColor: COLORS.lightWhite,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
  textTitle: {
    fontFamily: FONT.regular,
    color: COLORS.lightWhite,
  },
});

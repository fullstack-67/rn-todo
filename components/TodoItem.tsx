import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FC } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FONT, COLORS } from "../constants/theme";
import { type Todo } from "../utils/types";

interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

const TodoItem: FC<Props> = ({ todo, deleteTodo }) => {
  if (!todo) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.index}>{todo.id}</Text>
      <Text style={styles.text}>{todo.title!!}</Text>
      <TouchableOpacity
        onPress={() => {
          deleteTodo(todo.id);
        }}
      >
        <Ionicons style={styles.icon} name="trash" size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    gap: 10,
  },
  text: {
    fontFamily: FONT.regular,
    maxWidth: 250,
  },
  index: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: COLORS.primary,
    color: COLORS.lightWhite,
    fontFamily: FONT.regular,
    borderRadius: 20,
  },
  icon: {
    color: COLORS.gray2,
  },
});

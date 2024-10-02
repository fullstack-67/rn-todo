import { View, StyleSheet, ListRenderItemInfo, FlatList } from "react-native";
import { FC } from "react";
import { COLORS } from "../constants/theme";
import { type Todo } from "../utils/types";
import TodoItem from "./TodoItem";
interface Props {
  todos: Todo[];
  addTodo: (txt: string) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: FC<Props> = (props) => {
  const renderTodo = ({ item }: ListRenderItemInfo<Todo>) => (
    <TodoItem todo={item} deleteTodo={props.deleteTodo} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={props.todos}
        renderItem={renderTodo}
        keyExtractor={(todo: Todo) => todo.id.toString()}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  separator: {
    height: 1,
    backgroundColor: COLORS.gray2,
  },
});

const Separator = () => <View style={styles.separator} />;

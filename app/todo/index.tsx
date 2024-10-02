import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";
import { type Todo } from "../../utils/types";
import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";
export default function Todo() {
  const [txt, setTxt] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function deleteTodo(id: number) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function addTodo(txt: string) {
    if (!txt) return;
    const newTodo: Todo = {
      id: todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1,
      title: txt,
      userId: 1,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setTxt("");
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data.slice(0, 10));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <TodoForm txt={txt} setTxt={setTxt} addTodo={addTodo} />
      <TodoList {...{ todos, addTodo, deleteTodo }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#ffffff",
    gap: 20,
  },
});

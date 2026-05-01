import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

function addTodo(text) {
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
    };
};

setTodos((prev) => {
  const updated = prev.slice();
  updated.push(newTodo);
  return updated;
});

return (
    <TodoContext.Provider value={{ todos, addTodo }}>
        {children}
    </TodoContext.Provider>
);
}

export function useTodo() {
  return useContext(TodoContext);
}
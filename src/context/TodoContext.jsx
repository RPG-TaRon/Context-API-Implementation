import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  function addTodo(text) { // Create a new todo object
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]); // Add the new todo to the existing list
  }

  function toggleTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, // Keep the existing properties
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  return ( // Provide the todos and functions to the context consumers
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}> 
      {children}
    </TodoContext.Provider>
  );
}

function useTodos() {
  return useContext(TodoContext);
}

export { TodoProvider, useTodos };
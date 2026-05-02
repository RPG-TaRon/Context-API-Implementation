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
          completed: !todo.completed, // Switch completed true/false
        };
      }

      return todo; // Return unchanged todo if id does not match
    });

    setTodos(updatedTodos); // Update state with modified list
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id); 
    // Keep every todo except the one with matching id

    setTodos(updatedTodos); // Update state after removing todo
  }

  return ( // Provide the todos and functions to the context consumers
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

function useTodos() {
  return useContext(TodoContext); // Access todo context values anywhere
}

export { TodoProvider, useTodos };
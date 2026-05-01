import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]); // creating a new array with the new todo added to the end of the existing todos array
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo }}> // passing the todos state and addTodo function as the value of the context provider
      {children}
    </TodoContext.Provider>
  );
}

function useTodos() {
  return useContext(TodoContext);
}

export { TodoProvider, useTodos };
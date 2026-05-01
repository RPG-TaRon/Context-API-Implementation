import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div>
        <h1>Todo App</h1>
      </div>
    </TodoProvider>
  );
}

export default App;
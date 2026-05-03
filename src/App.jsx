import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";
import { ThemeProvider } from "./context/ThemeContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <FilterProvider>
        <ThemeProvider>
          <MainApp />
        </ThemeProvider>
      </FilterProvider>
    </TodoProvider>
  );
}

function MainApp() {
  return (
    <div className="app">
      <div className="todo-box">
        <h1>My Todo List</h1>

        <button>Toggle Theme</button>

        <TodoInput />

        <FilterButtons />

        <TodoList />
      </div>
    </div>
  );
}

export default App;
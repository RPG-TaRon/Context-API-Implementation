import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";
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
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div className="todo-box">
        <h1>My Todo List</h1>

        <ThemeToggleButton />

        <TodoInput />

        <FilterButtons />

        <TodoList />
      </div>
    </div>
  );
}

export default App;
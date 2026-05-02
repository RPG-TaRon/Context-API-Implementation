import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <FilterProvider>
        <div className="app">
          <div className="todo-box">
            <h1>My Todo List</h1>

            <button>Toggle Theme</button>

            <TodoInput />

            <div className="filter-row">
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>

            <TodoList />
          </div>
        </div>
      </FilterProvider>
    </TodoProvider>
  );
}

export default App;
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <div className="todo-box">
          <h1>My Todo List</h1>

          <button>Toggle Theme</button>

          <div className="input-row">
            <input type="text" placeholder="Enter a task..." />
            <button>Add</button>
          </div>

          <div className="filter-row">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>

          <div className="todo-list">
            <p>No tasks yet</p>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
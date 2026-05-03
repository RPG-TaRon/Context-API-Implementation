import { useTodos } from "../context/TodoContext";
import { useFilter } from "../context/FilterContext";

function TodoList() {
  const { todos, toggleTodo, deleteTodo, editTodo } = useTodos();
  const { filter } = useFilter();

  const filteredTodos = todos.filter((todo) => { // Filter the todos based on the filter value
    if (filter === "active") { // If filter is "active", only return todos that are not completed
      return todo.completed === false;
    }

    if (filter === "completed") { // If filter is "completed", only return todos that are completed
      return todo.completed === true;
    }

    return true;
  });

  if (filteredTodos.length === 0) { // If there are no todos to show after filtering, display a message
    return (
      <div className="todo-list">
        <p>No tasks to show</p>
      </div>
    );
  }

  // Function to handle editing a todo item
  function handleEdit(todo) {
    const newText = prompt("Edit your task:", todo.text);

    if (newText === null) return; // Cancelled prompt
    if (newText.trim() === "") return; // Don't allow empty text

    editTodo(todo.id, newText); // Call editTodo function from context with the id and new text
  }

  return (
    <div className="todo-list">
      {filteredTodos.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? "completed" : ""}>
            {todo.text}
          </span>

          <button onClick={() => handleEdit(todo)}>Edit</button>

          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

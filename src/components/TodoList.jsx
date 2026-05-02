import { useTodos } from "../context/TodoContext";

function TodoList() {
  const { todos, toggleTodo, deleteTodo, editTodo } = useTodos();

  if (todos.length === 0) {
    return (
      <div className="todo-list">
        <p>No tasks yet</p>
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
      {todos.map((todo) => (
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
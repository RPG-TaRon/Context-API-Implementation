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

  function handleEdit(todo) {
    const newText = prompt("Edit your task:", todo.text);

    if (newText === null) return;
    if (newText.trim() === "") return;

    editTodo(todo.id, newText);
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
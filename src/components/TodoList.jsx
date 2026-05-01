import { useTodos } from "../context/TodoContext";

function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return (
      <div className="todo-list">
        <p>No tasks yet</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <span>{todo.text}</span>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
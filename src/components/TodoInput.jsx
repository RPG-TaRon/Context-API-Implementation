import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoInput() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  function handleAdd() {
    if (text.trim() === "") return;

    addTodo(text);
    setText("");
  }

  return (
    <div className="input-row">
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
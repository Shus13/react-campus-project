import { useState, useEffect } from "react";
import { toast } from "sonner";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos"));
    if (stored) setTodos(stored);
  }, []);
  
  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add
  const addTodo = (e) => {
    e.preventDefault()
    if (!input.trim()) {
    
      toast.error("Empty todo halna mildaina ❌");
      return;
    }


    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    console.log(todos, "TODOO")

    setTodos([...todos, newTodo]);
    setInput("");
    // localStorage.setItem("todos", JSON.stringify(todos));  //prev value liyera garda hunxa
    toast.success("Todo added ✅");
  };

  // Delete
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
    toast("Deleted 🗑️");
  };

  // Toggle
  const toggleTodo = (id) => {
    const updated = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );

    setTodos(updated);

    const item = updated.find((t) => t.id === id);

    item.completed
      ? toast.success("Completed 🎉")
      : toast("Marked incomplete 🔄");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>

        {/* Input */}
        {/* <form  onSubmit={()=> addTodo(e)} className="flex gap-2 mb-4" > */}
        <form  onSubmit={addTodo} className="flex gap-2 mb-4" >
          <input
            type="text"
            placeholder="Enter todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTodo}
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </form>

        {/* List */}
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer flex-1 ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

        {/* Empty State */}
        {todos.length === 0 && (
          <p className="text-center text-gray-400 mt-4">
            No todos yet 😴
          </p>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
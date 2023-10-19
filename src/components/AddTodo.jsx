import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, cleanTodo, updateTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  // const inputRef = useRef(null);

  const addTodoHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    if (todo.id) {
      dispatch(updateTodo({ text: form.elements.todo?.value, id: todo.id }));
      dispatch(cleanTodo());

      form.reset();
    } else {
      dispatch(addTodo(form.elements.todo?.value));
      form.reset();
    }
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="w-screen space-x-3 mt-12 text-center">
      <input
        type="text"
        name="todo"
        // ref={inputRef}
        defaultValue={todo.text}
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        {todo.id ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default AddTodo;

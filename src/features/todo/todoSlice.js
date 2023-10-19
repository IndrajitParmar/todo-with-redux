import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "jhg-jghgt-yrr", text: "Hello World" }],
  todo: { id: "", text: "" },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    updateTodo: (state, action) => {
      const newTodo = {
        text: action.payload.text,
        id: action.payload.id,
      };

      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? newTodo : todo
      );
    },

    cleanTodo: (state) => {
      state.todo = initialState.todo;
    },

    editTodo: (state, action) => {
      state.todo = action.payload;
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo, editTodo, updateTodo, cleanTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [], currentTodo: null },
  reducers: {
    addTodo: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    changeTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
      state.items = state.items.map(item => {
        return item.id === state.currentTodo.id
          ? { text: action.payload, id: state.currentTodo.id }
          : item;
      });
    },
  },
});

export const { addTodo, deleteTodo, changeTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;

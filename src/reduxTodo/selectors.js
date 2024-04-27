import { createSelector } from '@reduxjs/toolkit';

export const items = state => state.todos.items;
export const filter = state => state.filter;
export const filteredTodos = createSelector(
  [items, filter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export const currentTodo = state => state.todos.currentTodo;

import { configureStore } from '@reduxjs/toolkit';
import { todoListReducer } from '../slices/TodoList.slice';
import { loadState, saveState } from '../helpers/localStorage';

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    todoList: store.getState().todoList,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/TodoList.type";

interface TodoListState {
    tasks: Todo[];
}

const initialState: TodoListState = {
    tasks: []
};

const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<Todo>) {
            state.tasks.push(action.payload);
        },
        removeTask(state, action: PayloadAction<number>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTask(state, action: PayloadAction<number>) {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        }
    }
});

export const { addTask, removeTask, toggleTask } = todoListSlice.actions;
export const todoListReducer = todoListSlice.reducer; 
//  The TodoList.slice.ts file contains the logic for the TodoList slice. The slice is created using the createSlice function from the Redux Toolkit. The slice contains the initial state, reducers, and actions for the TodoList slice. The addTask, removeTask, and toggleTask reducers are defined in the slice. The reducers update the state based on the action payload. The slice exports the actions and reducer for use in the store. 
//  Step 4: Update the TodoList.tsx Component 
//  Now that we have created the slice, we can update the TodoList.tsx component to use the actions from the slice.
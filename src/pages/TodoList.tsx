import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/TodoList.store";
import { addTask, removeTask, toggleTask } from "../slices/TodoList.slice";
import { Todo } from "../types/TodoList.type";
import { useState } from "react";

const TodoList = () => {
    const tasks = useSelector((state: RootState) => state.todoList.tasks);
    const dispatch = useDispatch<AppDispatch>();
    const [title, setTitle] = useState<string>('');

    const handleAddTask = () => {
        const newTask: Todo = {
            id: tasks.length + 1,
            title,
            completed: false,
            tasks: []
        };
        dispatch(addTask(newTask));
        setTitle('');
    };

    const handleRemoveTask = (id: number) => {
        dispatch(removeTask(id));
    };

    const handleToggleTask = (id: number) => {
        dispatch(toggleTask(id));
    };

    return (
        <div className="flex flex-col items-center p-4 min-h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-8">To do List</h1>
            <div className="flex mb-6 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Enter task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className=" text-black flex-1 p-2 rounded-l-md border-2 border-gray-500 focus:outline-none focus:border-blue-500"
                />
                <button
                    onClick={handleAddTask}
                    className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-all"
                >
                    Add Task
                </button>
            </div>
            <ul className="w-full max-w-md space-y-4">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="flex items-center justify-between bg-gray-800 p-4 rounded-md"
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggleTask(task.id)}
                                className="mr-4"
                            />
                            <span className={
                                task.completed ? "line-through text-gray-500" : ""
                            }>
                                {task.title}
                            </span>
                        </div>
                        <button
                            onClick={() => handleRemoveTask(task.id)}
                            className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-all"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

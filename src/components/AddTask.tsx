import React, { useState } from 'react';

const AddTask = ({ setTodos }: { setTodos: any }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setTodos((prevTodos: any) => {
            return [...prevTodos, { id: prevTodos.length + 1, Task: taskName, description: description, Completed: false }];
        })
        setTaskName("")
        setDescription("")
        console.log("added")
    };

    return (
        <div className="max-w-md mx-3 my-2 ">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskName">
                        Task Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="taskName"
                        type="text"
                        placeholder="Enter task name"
                        value={taskName}
                        onChange={handleTaskNameChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        placeholder="Enter task description"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;

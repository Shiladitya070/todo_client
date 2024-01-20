'use client'
import { useState } from "react";

import { Todo } from "@/components/Todo";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      Task: "Test",
      description: "",
      Completed: false
    },
    {
      id: 2,
      Task: "Task 2",
      description: "test task",
      Completed: true
    },
  ])

  return (
    <div>
      <Navbar />
      <div className="px-3">
        {todos && todos.map((todo) => (
          <Todo setTodo={setTodos} key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  )
}
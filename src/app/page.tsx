'use client'
import { useState } from "react";

import { Todo } from "@/components/Todo";
import Navbar from "@/components/Navbar";
import AddTask from "@/components/AddTask";

export default function Home() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      Task: "Test",
      description: "",
      Completed: false
    },
    {
      id: 3,
      Task: "Test 3 ",
      description: "text time",
      Completed: false
    },
    {
      id: 2,
      Task: "Task 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quae natus totam optio dicta minima excepturi tenetur quibusdam at delectus. Veniam quaerat cumque alias pariatur sit corporis suscipit nihil quam.",
      Completed: true
    },
  ])

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <div className="min-w-80">
          <AddTask setTodos={setTodos} />
        </div>
        <div className="px-3 h-screen flex flex-col flex-wrap">
          {todos && todos.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </div>
      </ div>
    </div>
  )
}
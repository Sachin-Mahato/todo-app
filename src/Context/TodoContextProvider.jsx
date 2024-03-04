import React, { useState } from 'react'
import TodoContext from './TodoContext'

const TodoContextProvider = ({children}) => {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState({})

  const addTask = (e) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }
    if(e.code === 'Enter') {
      setTasks((prevTasks) => ({...prevTasks, [newTask.id] : newTask}))
      setText("")
    }
  }

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = {...prevTasks};
      delete updatedTasks[id];
      return updatedTasks;
    })
  }

  const toggleCompleted = (id) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [id] : {
        ...prevTasks[id],
        completed: !prevTasks[id].completed
      }
    }))
  }
  return (
    <TodoContext.Provider value={{text, setText, tasks, setTasks, addTask, deleteTask, toggleCompleted}}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
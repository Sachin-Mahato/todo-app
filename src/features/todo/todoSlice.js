import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
  todos: [{id: 1, text: "Hello world", completed: false}]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
/** alway have the access state and action. state == current state and action === whatever data pass */
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, // payload is a object
        completed: true
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }
  }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer
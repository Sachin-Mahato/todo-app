import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
  todos: [{id: 1, text: "Hello world", completed: false}],
  todoCount: 1
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
        completed: false
      }
      state.todos.push(todo)
      state.todoCount++
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      if(state.todoCount > 0) {
        state.todoCount -= 1
      }
    },
    toggleComplete: (state, action) => {
      const {id} = action.payload;
      const todo = state.todos.find(task => task.id === id);
      if (todo) {
        todo.completed = !todo.completed; 
      }
    }
  }
})

export const {addTodo, removeTodo, toggleComplete} = todoSlice.actions
export default todoSlice.reducer



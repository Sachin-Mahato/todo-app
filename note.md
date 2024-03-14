      ```jsx
      // <header className="flex flex-col justify-center gap-8 px-8 align-middle  bg-[url(./images/bg-desktop-light.jpg)] bg-no-repeat h-[30dvh] bg-top">
      //   <section className="flex justify-between align-middle">
      //     <h1 className="uppercase text-2xl tracking-[10px] font-fw-bold text-white">
      //       todo
      //     </h1>
      //     <img src={moon} alt="moon icon" />
      //   </section>
      //   <div className="relative">
      //     <span className="inline-block absolute left-[10px] top-[50%] translate-y-[-50%] w-[18px] h-[18px] border-[1px] border-grayish-blue-lt  rounded-full"></span>
      //     <input
      //       type="text"
      //       placeholder="Create a new todo.."
      //       className="w-full py-4 px-4 text-left rounded-md placeholder:font-[500] indent-6"
      //       value={text}
      //       onChange={handleChange}
      //       onKeyDown={addTask}
      //     />
      //   </div>
      // </header>
      // <section className="h-[50vh]  bg-light-gray rounded-smh-[50vh] shadow-xl w-[87%] z-[1] mx-auto relative top-[-30px] rounded-md">
      //   <ul className="px-4">
      //     {Object.values(tasks).map((task ) => (
      //       <div
      //         key={task.id}
      //         className="flex gap-4 justify-between align-middle border-b-[1px] border-light-grayish-blue pb-2 "
      //       >
      //         <div className="flex gap-2 py-2  ">
      //           <li
      //             className=" w-5 h-5 mt-4 border-[1px] cursor-pointer  border-grayish-blue-lt hover:bg-gradient-to-b from-hsl(192, 100%, 76%) to-hsl(280, 87%, 65%)  rounded-full "
      //             style={{
      //               background: task.completed ? "linear-gradient(to bottom, hsl(192, 100%, 76%), hsl(280,87%,65%))" : "",
      //               display: task.completed ? "flex" : "",
      //               justifyContent: task.completed ? "center" : "",
      //               alignItems: task.completed ? "center" : ""
      //             }}
      //             // onClick={handleCheck}
      //             onClick={() => toggleCompleted(task.id)}
      //           >
      //             <img src={check} alt="check icon"
      //             style={{
      //               width: "10px",
      //               height: "10px",
      //             }}
      //             />
      //           </li>
      //           <li
      //             className="mt-4"
      //             style={{textDecoration: task.completed ? "line-through": ""}}
      //           >
      //             {task.text}
      //           </li>
      //         </div>
      //         <li className=" w-4 h-4 mt-4 py-2  bg-[url(./images/icon-cross.svg)] bg-no-repeat cursor-pointer" 
      //         onClick={() => deleteTask(task.id)}></li>
      //       </div>
      //     ))}
      //   </ul>
      // </section>
      {/* Status bar */}
      // <section className=" flex gap-2 justify-center align-middle capitalize shadow-xl p-2">
      //   <a href="">all</a>
      //   <a href="">active</a>
      //   <a href="">complete</a>
      // </section>

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-4 mt-12">
      <input
        type="text"
        className="bg-gray-801 rounded border border-b-gray-700 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="text-white bg-indigo-501 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Todo</button>
    </form>
  );
};

export default AddTodo;

import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {todos.map((todo) => (
          <li key={todo.id}
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
            <div className="text-white">
              {todo.text}
              </div>
            <button className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </div>
    </>
  );
};

export default Todos;


      ```
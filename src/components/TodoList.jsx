import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../features/todo/todoSlice";
import check from "../images/icon-check.svg";
import { StatusBar } from "./StatusBar";
import { useState } from "react";

const TodoList = ({darkMode}) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete({ id: id }));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filterTodo = todos.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    } else {
      return true;
    }
  });

  return (
    <>
      <section className=" bg-light-gray dark:bg-darkMode-blue dark:text-darkMode-grayish-blue h-[70dvh]">
        <ul className=" bg-white w-[84%]  sm:max-w-[30rem]  z-[1] mx-auto relative top-[-20px] sm:top-[-50px] rounded-md  sm:h-[25rem] shadow-xl dark:bg-darkMode-desaturated-blue">
          {filterTodo.map((todo) => (
            <div
              key={todo.id}
              className="flex gap-4 justify-between align-middle border-b-[1px] border-light-grayish-blue dark:border-darkMode-very-dark-grayish-blue-v2 pb-2 "
            >
              <div className="flex gap-2 ml-6">
                <li
                  className=" w-5 h-5 mt-4 border-[1px] cursor-pointer  border-grayish-blue-lt hover:bg-gradient-to-b from-hsl(192, 100%, 76%) to-hsl(280, 87%, 65%)  rounded-full "
                  onClick={() => handleToggleComplete(todo.id)}
                  style={{
                    background: todo.completed
                      ? "linear-gradient(to bottom, hsl(192, 100%, 76%), hsl(280,87%,65%))"
                      : "",
                    display: todo.completed ? "flex" : "",
                    justifyContent: todo.completed ? "center" : "",
                    alignItems: todo.completed ? "center" : "",
                  }}
                >
                  <img
                    src={check}
                    alt="check icon"
                    style={{
                      width: "10px",
                      height: "10px",
                      display: todo.completed ? "block" : "none"
                    }}
                  />
                </li>
                <li
                  className="mt-4 text-dark-grayish-very dark:text-darkMode-grayish-blue "
                  style={{
                    textDecoration: todo.completed ? "line-through" : "",
                    color: todo.completed ?(darkMode ? "hsl(234, 11%, 52%)" : "hsl(233, 14%, 35%)"): "",
                    fontWeight: todo.completed ? "300" : "",
                    textDecorationThickness: todo.completed ? "0.2px" : ""
                  }}
                >
                  {todo.text}
                </li>
              </div>
              <li
                className=" w-4 h-4 mr-6 mt-4 py-2  bg-[url(./images/icon-cross.svg)] bg-no-repeat cursor-pointer"
                onClick={() => dispatch(removeTodo(todo.id))}
              ></li>
            </div>
          ))}
          <StatusBar filter={filter} handleFilterChange={handleFilterChange} />
        </ul>
      </section>
    </>
  )
}

export default TodoList;

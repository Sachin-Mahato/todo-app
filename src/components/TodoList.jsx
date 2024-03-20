import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../features/todo/todoSlice";
import check from "../images/icon-check.svg";
import { useState } from "react";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const todoCount = useSelector((state) => state.todoCount);
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
      <section className=" bg-light-gray">
        <ul className="px-4 bg-white w-[84%] sm:max-w-[30rem]  z-[1] mx-auto relative xl:top-[-50px] rounded-md sm:h-[25rem] shadow-xl">
          {filterTodo.map((todo) => (
            <div
              key={todo.id}
              className="flex gap-4 justify-between align-middle border-b-[1px] border-light-grayish-blue pb-2 "
            >
              <div className="flex gap-2 ">
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
                    }}
                  />
                </li>
                <li
                  className="mt-4"
                  style={{
                    textDecoration: todo.completed ? "line-through" : "",
                  }}
                >
                  {todo.text}
                </li>
              </div>
              <li
                className=" w-4 h-4 mt-4 py-2  bg-[url(./images/icon-cross.svg)] bg-no-repeat cursor-pointer"
                onClick={() => dispatch(removeTodo(todo.id))}
              ></li>
            </div>
          ))}
          <div className=" relative flex justify-center items-center gap-12 my-2 ">
            <p className="text-dark-grayish-blue sm:basis-1/3">{todoCount} items left</p>
            <section className="sm:static w-full sm:px-0 sm:py-0 sm:basis-1/3 py-3 sm:shadow-none absolute top-12 shadow-lg flex gap-6 sm:gap-2 justify-center items-center capitalize">
              <p
                className={`cursor-pointer ${
                  filter === "all" ? "text-primary-blue" : ""
                }`}
                onClick={() => handleFilterChange("all")}
              >
                all
              </p>
              <p
                className={`cursor-pointer ${
                  filter === "active" ? "text-primary-blue" : ""
                }`}
                onClick={() => handleFilterChange("active")}
              >
                active
              </p>
              <p
                className={`cursor-pointer ${
                  filter === "completed" ? "text-primary-blue" : ""
                }`}
                onClick={() => handleFilterChange("completed")}
              >
                completed
              </p>
            </section>

            <p className="text-dark-grayish-blue capitalize cursor-pointer sm:basis-1/3 hover:text-dark-grayish-very">
              clear completed
            </p>
          </div>
        </ul>
      </section>
    </>
  );
};

export default TodoList;

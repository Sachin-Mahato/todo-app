import React, { useContext } from "react";
import check from "../images/icon-check.svg";
import TodoContext from "../Context/TodoContext";

const TodoList = () => {
  const { tasks, toggleCompleted, deleteTask } = useContext(TodoContext);

  return (
    <>
      <section className="h-[50vh]  bg-light-gray rounded-smh-[50vh] shadow-xl w-[87%] z-[1] mx-auto relative top-[-30px] rounded-md">
        <ul className="px-4">
          {Object.values(tasks).map((task) => (
            <div
              key={task.id}
              className="flex gap-4 justify-between align-middle border-b-[1px] border-light-grayish-blue pb-2 "
            >
              <div className="flex gap-2 py-2  ">
                <li
                  className=" w-5 h-5 mt-4 border-[1px] cursor-pointer  border-grayish-blue-lt hover:bg-gradient-to-b from-hsl(192, 100%, 76%) to-hsl(280, 87%, 65%)  rounded-full "
                  style={{
                    background: task.completed
                      ? "linear-gradient(to bottom, hsl(192, 100%, 76%), hsl(280,87%,65%))"
                      : "",
                    display: task.completed ? "flex" : "",
                    justifyContent: task.completed ? "center" : "",
                    alignItems: task.completed ? "center" : "",
                  }}
                  // onClick={handleCheck}
                  onClick={() => toggleCompleted(task.id)}
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
                    textDecoration: task.completed ? "line-through" : "",
                  }}
                >
                  {task.text}
                </li>
              </div>
              <li
                className=" w-4 h-4 mt-4 py-2  bg-[url(./images/icon-cross.svg)] bg-no-repeat cursor-pointer"
                onClick={() => deleteTask(task.id)}
              ></li>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
};

export default TodoList;


import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../features/todo/todoSlice";
import check from "../images/icon-check.svg"

const TodoList = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const todoCount = useSelector(state => state.todoCount)
    
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete({id: id}))
  }

  return (
    <>
      <section className="h-[50vh]  bg-light-gray  shadow-xl w-[84%] z-[1] mx-auto relative top-[-30px] rounded-md">
        <ul className="px-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex gap-4 justify-between align-middle border-b-[1px] border-light-grayish-blue pb-2 "
            >
              <div className="flex gap-2 py-2  ">
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
        </ul>
        <div> items left {todoCount}</div>
      </section>
    </>
  );
};

export default TodoList;

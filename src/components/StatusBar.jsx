import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export const StatusBar = (props) => {
  const todoCount = useSelector(state => state.todoCount)
  const todos = useSelector(state => state.todos)
  let extractId;
  let extractCompleted

  todos.forEach(todo => {
    const {id, completed} = todo
    extractId = id;
    extractCompleted = completed
  })

  const dispatch = useDispatch()
  const { filter, handleFilterChange } = props;

  return (
    <>
      <div className=" relative flex justify-center items-center gap-12 my-2 ">
        <p className="text-dark-grayish-blue sm:basis-1/3">
          {todoCount} items left
        </p>
        <section className="sm:static w-full my-8 sm:my-0 sm:px-0 sm:py-0 sm:basis-1/3 py-3 sm:shadow-none absolute top-12 shadow-lg flex gap-6 sm:gap-2 justify-center items-center capitalize">
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
        <p onClick={() => extractCompleted && dispatch(removeTodo(extractId))} className="text-dark-grayish-blue capitalize cursor-pointer sm:basis-1/3 hover:text-dark-grayish-very">
          clear completed
        </p>
      </div>
    </>
  );
};



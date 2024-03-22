import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export const StatusBar = (props) => {
  const { filter, handleFilterChange } = props;
  const {todos, todoCount } = useSelector(state => state)
  let extractId;
  let extractCompleted

  todos.forEach(todo => {
    const {id, completed} = todo
    extractId = id;
    extractCompleted = completed
  })

  const dispatch = useDispatch()

  return (
    <>
      <div className=" relative sm:top-4 flex justify-around sm:justify-center items-center gap-6 my-2 ">
        <p className="text-dark-grayish-blue sm:basis-1/3 ml-2">
          {todoCount} items left
        </p>
        <section className="bg-white dark:bg-darkMode-desaturated-blue sm:static w-full my-8 sm:my-0 sm:px-0 sm:py-0 sm:basis-1/3 py-3 sm:shadow-none absolute top-4 shadow-xl flex gap-6 sm:gap-2 justify-center items-center capitalize text-dark-grayish-blue">
          <p
            className={`cursor-pointer ${
              filter === "all" ? "text-primary-blue" : ""
            } dark:hover:text-darkMOde-grayish-blue-hover hover:text-dark-grayish-very hover:font-bold `}
            onClick={() => handleFilterChange("all")}
          >
            all
          </p>
          <p
            className={`cursor-pointer ${
              filter === "active" ? "text-primary-blue" : ""
            } dark:hover:text-darkMOde-grayish-blue-hover hover:text-dark-grayish-very hover:font-bold`}
            onClick={() => handleFilterChange("active")}
          >
            active
          </p>
          <p
            className={`cursor-pointer ${
              filter === "completed" ? "text-primary-blue" : ""
            } dark:hover:text-darkMOde-grayish-blue-hover hover:text-dark-grayish-very hover:font-bold`}
            onClick={() => handleFilterChange("completed")}
          >
            completed
          </p>
        </section>
        <p onClick={() => extractCompleted && dispatch(removeTodo(extractId))} className="text-dark-grayish-blue capitalize cursor-pointer sm:basis-1/3 hover:text-dark-grayish-very dark:hover:text-darkMOde-grayish-blue-hover">
          clear completed
        </p>
      </div>
    </>
  )
}



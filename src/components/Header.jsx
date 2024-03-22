import { useState } from "react";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const Header = ({ toggleDarkMode, darkMode }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const addTodoHandler = (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <>
      <header className="flex flex-col justify-center h-[30dvh] gap-8 px-8 items-center bg-[url(./images/bg-mobile-light.jpg)] bg-no-repeat bg-cover  sm:bg-[url(./images/bg-desktop-light.jpg)] sm:bg-no-repeat sm:bg-cover sm:h-[40dvh] bg-top dark:bg-[url(./images/bg-mobile-dark.jpg)] dark:sm:bg-[url(./images/bg-desktop-dark.jpg)]">
        <section className="flex justify-between w-full items-center sm:justify-center  sm:gap-[20rem]  ">
          <h1 className="uppercase text-2xl font-bold tracking-[10px]  text-white lg:font-bold lg:text-4xl lg:tracking-[12px] dark:text-white">
            todo
          </h1>
          <img
            src={darkMode ? sun : moon}
            alt="moon icon"
            className="w-6 h-6 cursor-pointer "
            onClick={toggleDarkMode}
          />
        </section>
        <div className="relative w-full sm:flex sm:justify-center sm:items-center">
          <input
            type="text"
            placeholder="Create a new todo.."
            className="py-4 pl-14 pr-4 w-full inline-block text-darkMode-blue font-normal rounded-md placeholder-font-500 indent-6 sm:w-[30rem] lg:text-xl relative dark:bg-darkMode-desaturated-blue dark:text-darkMode-grayish-blue"
            value={input}
            onChange={handleChange}
            onKeyDown={addTodoHandler}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10' fill='none' stroke='hsl(233, 11%, 84%)' stroke-width='0.1' stroke-linecap='round' stroke-linejoin='round' class='feather feather-circle'><circle cx='5' cy='5' r='1.7'></circle></svg>\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "5px center",
              paddingLeft: "2.5rem", //
            }}
          />
        </div>
      </header>
    </>
  );
};

export default Header;

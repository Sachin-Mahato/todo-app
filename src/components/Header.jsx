import React, { useContext } from "react";
import moon from "../images/icon-moon.svg"
import TodoContext from "../Context/TodoContext";

const Header = () => {
  const {text, addTask, setText} = useContext(TodoContext);
  const handleChange = (e) => {
    setText(e.target.value)
  }
  return (
    <>
      <header className="flex flex-col justify-center gap-8 px-8 align-middle  bg-[url(./images/bg-desktop-light.jpg)] bg-no-repeat h-[30dvh] bg-top">
        <section className="flex justify-between align-middle">
          <h1 className="uppercase text-2xl tracking-[10px] font-fw-bold text-white">
            todo
          </h1>
          <img src={moon} alt="moon icon" />
        </section>
        <div className="relative">
          <span className="inline-block absolute left-[10px] top-[50%] translate-y-[-50%] w-[18px] h-[18px] border-[1px] border-grayish-blue-lt  rounded-full"></span>
          <input
            type="text"
            placeholder="Create a new todo.."
            className="w-full py-4 px-4 text-left rounded-md placeholder:font-[500] indent-6"
            value={text}
            onChange={handleChange}
            onKeyDown={addTask}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
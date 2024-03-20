import { useState } from "react";
import moon from "../images/icon-moon.svg";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const addTodoHandler = (e) => {
    if (e.code === "Enter") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <>
      <header className="flex flex-col justify-center h-[30dvh] gap-8 px-8 items-center bg-[url(./images/bg-mobile-light.jpg)] bg-no-repeat bg-cover  sm:bg-[url(./images/bg-desktop-light.jpg)] sm:bg-no-repeat sm:bg-cover sm:h-[40dvh] bg-top">
        <section className="flex lg:justify-center gap-48 lg:gap-[20rem] items-center justify-between">
          <h1 className="uppercase text-2xl tracking-[10px]  text-white lg:font-bold lg:text-4xl lg:tracking-[12px]">
            todo
          </h1>
          <img src={moon} alt="moon icon" className="w-6 h-6" />
        </section>
        {/* <div className="relative w-full sm:flex sm:justify-center sm:items-center ">
          <span className="inline-block absolute left-[10px] md:left-32 top-[50%] translate-y-[-50%] w-[18px] h-[18px] border-[1px] border-grayish-blue-lt  rounded-full"></span>
          <input
            type="text"
            placeholder="Create a new todo.."
            className="py-4 w-full inline-block px-4 text-left
              rounded-md placeholder:font-[500] indent-6 sm:w-[30rem] lg:text-xl"
            value={input}
            onChange={handleChange}
            ooHandler}
          />
        </div> */}
<div className="relative w-full sm:flex sm:justify-center sm:items-center">
  <input
    type="text"
    placeholder="Create a new todo.."
    className="py-4 pl-14 pr-4 w-full inline-block rounded-md placeholder-font-500 indent-6 sm:w-96 lg:text-xl relative"
    value={input}
    onChange={handleChange}
    onKeyDown={addTodoHandler}
    style={{
      backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 10 10\' fill=\'none\' stroke=\'hsl(233, 11%, 84%)\' stroke-width=\'0.1\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'feather feather-circle\'><circle cx=\'5\' cy=\'5\' r=\'1.5\'></circle></svg>")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '5px center',
      paddingLeft: '2.5rem', // Adjust this value as per your design
    }}
  />
</div>




      </header>
    </>
  );
};

export default Header;

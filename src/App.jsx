import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={`${darkMode && "dark"} `}>
      <div className="dark:bg-darkMode-blue">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <TodoList darkMode={darkMode}/>
      </div>
    </div>
  );
}

export default App;

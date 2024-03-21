import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`${darkMode && "dark"}`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <TodoList />
    </div>
  );
}

export default App;

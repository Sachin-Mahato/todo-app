import TodoContextProvider from "./Context/TodoContextProvider";
import Header from "./components/Header";
import { StatusBar } from "./components/StatusBar";
import TodoList from "./components/TodoList";

function App() {

  return (
    <TodoContextProvider>
      <div>
        <Header />
        <TodoList />
        <StatusBar />
      </div>
    </TodoContextProvider>
  );
}

export default App;

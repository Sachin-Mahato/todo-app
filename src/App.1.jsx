import { StatusBar } from "./components/StatusBar";
import TodoList from "./components/TodoList";

export function App() {
  return (
    <>
      <Header />
      <TodoList />
      <StatusBar />
    </>
  );
}

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <div className="flex flex-col items-center h-screen justify-center">
        <h1 className="w-2/3 bg-slate-500 text-center text-white text-2xl mb-8 font-bold rounded-lg p-2">
          ToDo App
        </h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;

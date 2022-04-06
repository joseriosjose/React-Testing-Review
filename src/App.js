import "./App.css";
import Todo from "./components/Todo";

function App() {
  const todos = [
    {
      id: 1,
      title: "Aseo personal",
      completed: false,
    },
    {
      id: 2,
      title: "Correr 2 horas",
      completed: true,
    },
  ];

  return (
    <div className="App">
      {todos.map(({ id, title, completed }) => {
        return <Todo id={id} title={title} completed={completed} />;
      })}
    </div>
  );
}

export default App;

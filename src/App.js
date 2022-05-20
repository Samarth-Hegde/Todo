import "./App.css";
import { useState } from "react";
import ToDo from "./Components/ToDo";
import AddTask from "./Components/AddTask";

function App() {
  const [toDo, setToDo] = useState();
  const [tasks, setTasks] = useState([]);
  const handleChange = (e) => {
    if (!tasks.includes(e.target.value)) setToDo(e.target.value);
  };

  const deleteItem = (index) => {
    console.log(index);
    const newList = tasks.filter((item) => tasks.indexOf(item) !== index);
    setTasks(newList);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTasks((values) => [
      ...values,
      tasks.includes(toDo) ? "Task already added" : toDo,
    ]);
  };

  return (
    <div className="App">
      {tasks.map((task, index) => (
        <ToDo task={task} key={index} id={index} deleteItem={deleteItem} />
      ))}

      <AddTask handleChange={handleChange} handleClick={handleClick} />
    </div>
  );
}

export default App;

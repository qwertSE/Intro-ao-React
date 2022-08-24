import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import { Itasks } from "../types/Itasks";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<Itasks[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <Timer />
      <List tasks={tasks} />
    </div>
  );
}

export default App;

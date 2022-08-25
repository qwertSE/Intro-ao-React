import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import { Itask } from "../types/Itask";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<Itask[]>([]);

  /* Apenas para teste */
  console.log(tasks)
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <Timer />
      <List tasks={tasks} />
    </div>
  );
}

export default App;

import { useState } from "react";
import Item from "./Item";
import style from "./List.module.scss";

const List = () => {
  const [tasks, setTasks] = useState([
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Javascript",
      time: "01:00:00",
    },
    {
      task: "MongoDB",
      time: "01:30:00",
    },
  ]);
  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          setTasks([...tasks, { task: "Java", time: "00:30:00" }]);
        }}
      >
        {" "}
        Estudos do dia{" "}
      </h2>

      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default List;

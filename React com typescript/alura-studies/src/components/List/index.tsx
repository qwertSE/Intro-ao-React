import Item from "./Item";
import style from "./List.module.scss";
import { Itask } from "../../types/Itask";

const List = ({tasks}:{tasks:Itask[]}) => {

  return (
    <aside className={style.listaTarefas}>
      <h2>
        Estudos do dia
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

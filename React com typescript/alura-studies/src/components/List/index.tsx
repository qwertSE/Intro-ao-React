import Item from "./Item";
import style from "./List.module.scss";
import { Itasks } from "../../types/Itasks";

const List = ({tasks}:{tasks:Itasks[]}) => {

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

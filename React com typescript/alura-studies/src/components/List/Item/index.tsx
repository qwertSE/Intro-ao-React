import { Itasks } from '../../../types/Itasks';
import style from '../List.module.scss'

const Item = ({task, time, selected, done, id}: Itasks) => {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};

export default Item;

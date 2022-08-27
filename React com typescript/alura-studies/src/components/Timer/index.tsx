import Clock from "./Clock";
import style from "./Timer.module.scss";
import Button from "../Button";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/Itask";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
}

const Timer = ({ selected }: Props) => {
  const [time, setTime] = useState<Number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  /* Teste */
  /* console.log(`Total em segundos: ${timeToSeconds("02:25:03")}`); */

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <>time:{time}</>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>Começar!</Button>
    </div>
  );
};

export default Timer;

import Clock from "./Clock"
import style from "./Timer.module.scss";
import Button from "../Button";

const Timer = () => {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>Começar!</Button>
    </div>
  );
}

export default Timer;
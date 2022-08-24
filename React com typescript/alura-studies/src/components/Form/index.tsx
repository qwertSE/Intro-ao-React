import React, { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";



const Form = () => {

  function adicionarTarefa(event: React.FormEvent) {
    event.preventDefault();
    console.log(`Tarefa: ${task} Duração: ${time}`);
  }

  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00:00");

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          min="00:00:00"
          max="23:59:99"
          required
        />
      </div>
      <Button>Adicionar</Button>
    </form>
  );
};

export default Form;

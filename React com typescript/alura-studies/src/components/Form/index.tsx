import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";

function adicionarTarefa(event: React.FormEvent) {
  event.preventDefault();
  console.log("Teste");
}

const Form = () => {
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
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
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button>Adicionar</Button>
    </form>
  );
};

export default Form;

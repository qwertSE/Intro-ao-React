import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";

const times = [
  "Programação",
  "Front-End",
  "Data Science",
  "Devops",
  "Ux e Design",
  "Mobile",
  "Inovação e Gestão",
];

function Formulario() {
  const [nome, setNome] = useState("Danilo");
  const [cargo, setCargo] = useState("Desenvolvedor");
  const [imagem, setImagem] = useState("http://facebook.com");
  const [time, setTime] = useState("Front-End");

  const submit = (event) => {
    event.preventDefault();
    console.log(
      `O formulario de ${nome} no cargo de ${cargo} com a imagem no endereço ${imagem} e no time de ${time} foi enviado com sucesso!`
    );
  };

  return (
    <section className="formulario">
      <form onSubmit={submit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <ListaSuspensa
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
          label="Time"
          itens={times}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
}

export default Formulario;

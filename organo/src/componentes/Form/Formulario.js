import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

const times = [
  "Programação",
  "Front-End",
  "Data Science",
  "Devops",
  "Ux e Design",
  "Mobile",
  "Inovação e Gestão",
];

const submit = (event) => {
  event.preventDefault();
  console.log("O formulario foi enviado!");
};

function Formulario() {
  return (
    <section className="formulario">
      <form onSubmit={submit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto required={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto required={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
}

export default Formulario;

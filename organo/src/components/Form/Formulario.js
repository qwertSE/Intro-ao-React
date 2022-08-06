import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css";

function Formulario() {
  return (
    <section className="formulario">
      <form>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
      </form>
    </section>
  );
}

export default Formulario;

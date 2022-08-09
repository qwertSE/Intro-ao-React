import "./CampoTexto.css";

let valor = "";

/* Em desenvolvimento. */
const novoValor = (evento) => {
  valor = evento.target.value;
  console.log(valor);
};

function CampoTexto(props) {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={novoValor}
        required={props.required}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default CampoTexto;

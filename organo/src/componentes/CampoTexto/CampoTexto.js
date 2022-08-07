import "./CampoTexto.css";

function CampoTexto(props) {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input type="text" placeholder={props.placeholder}/>
    </div>
  );
}

export default CampoTexto;

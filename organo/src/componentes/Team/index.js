import Colaborador from "../Colaborador";
import "./team.css";

const Team = (props) => {
  return (
    <section className="team" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.name}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            img={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;

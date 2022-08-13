import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Form";
import Team from "./componentes/Team";

/* Times

"Programação",
  "Front-End",
  "Data Science",
  "Devops",
  "Ux e Design",
  "Mobile",
  "Inovação e Gestão",

*/

function App() {
  const [cards, setCard] = useState([]);

  const cadastro = (novoCard) => {
    /* Spread */
    setCard([...cards, novoCard]);
    console.log(cards);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario novoCard={(novoCard) => cadastro(novoCard)} />
      <Team name="Programação" />
      <Team name="Front-End" />
      <Team name="Data Science" />
      <Team name="Devops" />
      <Team name="Ux e Design" />
      <Team name="Mobile" />
      <Team name="Inovação e Gestão" />
    </div>
  );
}

export default App;

import { useState } from "react";
import Banner from "./componentes/Banner/Banner.js";
import Formulario from "./componentes/Form/Formulario.js";

function App() {
  const [cards, setCard] = useState([])



  const cadastro = (novoCard) =>{
   /* Spread */
   setCard([...cards, novoCard])
   console.log(cards)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario novoCard={novoCard => cadastro(novoCard)}/>
    </div>
  );
}

export default App;

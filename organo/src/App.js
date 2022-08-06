import Banner from './components/Banner/Banner.js'
import CampoTexto from './components/CampoTexto/CampoTexto.js';

function App() {
  return (
    
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>  
    </div>
  );
}

export default App;


import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Conteudo,{Olamundo} from './componentes/Conteudo'
import Rodape from './componentes/Rodape'


function App() {

  Olamundo();
  /* Todo componente deve retornar um html entre parenteses*/
  return (
    <>
   <Cabecalho logo="logo192.png" titulo='favoritemengo' subtitulo='O melhor gerenciador de favoritos do Brasil'/>
   <Conteudo/>
   <Rodape/>
   </>
   
  );
}

export default App;

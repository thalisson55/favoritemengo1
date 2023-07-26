
import './App.css';
import Cabecalho from './componentes/Cabecalho';
// import Conteudo,{Olamundo} from './componentes/Conteudo'
import Rodape from './componentes/Rodape';




  function App() {
    return (
      <div className="App">
        <Cabecalho logo={'logo192.png'} title="FavoriteMengo" />
        <main>
          <h2>O Palmeiras não tem mundial </h2>
        </main>
        <Rodape />
      </div>
    );
  };

export default App;

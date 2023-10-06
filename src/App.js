import "./App.css";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import CadastroUsuario from "./componentes/CadastroUsuario";
import Conteudo from "./componentes/Conteudo";
import Rodape from "./componentes/Rodape";
import TelaLogin from "./componentes/TelaLogin";

function App() {
  return (
    <div className="App">
      <Cabecalho title="FavoriteMengo" />
      <main>
        <h2>O Palmeiras não tem mundial </h2>
      </main>
      {/* <Conteudo /> */}
      <CadastroUsuario />
      <TelaLogin />
      <Rodape />
    </div>
  );
}

export default App;

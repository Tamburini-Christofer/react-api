//todo Importo css
import "./App.css";
//todo Importo MyHeader
import MyHeader from "./components/MyHeader";
//todo Importo MyMain
import MyMain from "./components/MyMain";

function App() {
  return (
    <>
        <div id="containerPrincipal">
          <MyHeader />
          <MyMain />
        </div>
    </>
  );
}

export default App;

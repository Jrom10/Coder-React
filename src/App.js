import NavBar from "./components/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer";

function App() {

  let saludo = { msj:"Hola Mundo" };
  function textoLog(a) {
    console.log(a)
  }

  return (
    <>
      <NavBar />
      <ItemListContainer item = {saludo} color={"blue"} textoLog={textoLog}/>
    </>
  );
}

export default App;

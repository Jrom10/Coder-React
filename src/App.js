import NavBar from "./components/NavBar/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

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

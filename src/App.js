import NavBar from "./components/NavBar/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  let saludo = { msj:"Hola Mundo" };
  function textAlert(a) {
    alert(a)
  }

  return (
    <>
      <NavBar />
      <ItemListContainer item = {saludo} color={"blue"} textAlert={textAlert}/>
    </>
  );
}

export default App;

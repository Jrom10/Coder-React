import NavBar from "./components/NavBar/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  
  let saludo = { msj:"Hola Mundo" }

  function textLog(a) {
    console.log(a);
  }
  
  function onAdd(info) {
    alert(info)
  }


  return (
    <>
      <NavBar />
      <ItemListContainer item = {saludo} color = {"blue"} textLog = {textLog}/>
      <ItemCount initial = {1} stock = {10} onAdd = {onAdd}/>
    </>
  );
}

export default App;

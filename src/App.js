import NavBar from "./components/NavBar/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  
  function onAdd(info) {
    alert(info)
  }

  const sumar = (a, b) => {
    return (a + b )
  }

  const restar = (a, b) => {
    return (a - b);
  }

  return (
    <>
      <NavBar />
      <ItemCount initial = {1} stock = {10} onAdd = {onAdd} sumar={sumar} restar={restar}/>
      <ItemListContainer/>
    </>
  );
}

export default App;

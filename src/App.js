import NavBar from "./components/NavBar/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  
  function onAdd(info) {
    alert(info)
  }

  return (
    <>
      <NavBar />
      <ItemCount initial = {1} stock = {10} onAdd = {onAdd}/>
      <ItemListContainer/>
    </>
  );
}

export default App;

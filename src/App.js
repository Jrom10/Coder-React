import NavBar from "./components/NavBar/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer";


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
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/product/:id" element={<ItemDetailContainer/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* <NavBar />
      <ItemCount initial = {1} stock = {10} onAdd = {onAdd} sumar={sumar} restar={restar}/>
      <ItemListContainer/>
      <ItemDetailContainer/> */}
    </>
  );
}

export default App;

import NavBar from "./components/NavBar/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import {CartProvider} from "./context/CartContex" 
import Checkout from "./components/Checkout/Checkout";
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
  },
});


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/product/:productId" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

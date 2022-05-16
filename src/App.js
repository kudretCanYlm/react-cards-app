import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import ShoppingCartContext from "./contexts/ShoppingCartContext";
import CartRoute from "./routes/CartRoute";
import {setCardFun} from "./reducer/ShoppingCartReducer"


function App() {

  let fun=setCardFun

  return (
    <ShoppingCartContext.Provider value={fun}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CartRoute />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartContext.Provider>

  );
}

export default App;

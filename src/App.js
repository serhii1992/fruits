import Header from "./Components/Header";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/fruits-time" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

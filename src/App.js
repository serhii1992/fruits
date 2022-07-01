import Header from "./Components/Header";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import {Routes, Route } from "react-router-dom";


function App() {


  return (
    <div>
      <Header />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;

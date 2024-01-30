import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home"
import Firmy from "./pages/pro-firmy"
import Ucet from "./pages/Ucet.js"
import Zajem from "./pages/Zajem.js";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SharedLayout />} >
          <Route index element={ <Home /> } />
          <Route path="pro-firmy" element={ <Firmy /> } />
          <Route path="Ucet" element={ <Ucet /> } />
          <Route path="Zajem" element={ <Zajem /> } />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;

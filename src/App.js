import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home"
import Zajem from "./pages/Zajem"
import Firmy from "./pages/Firmy"
import Ucet from "./pages/Ucet"

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SharedLayout />} >
          <Route index element={ <Home /> } />
          <Route path="zajem" element={ <Zajem /> } />
          <Route path="pro-firmy" element={ <Firmy /> } />
          <Route path="ucet" element={ <Ucet /> } />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;

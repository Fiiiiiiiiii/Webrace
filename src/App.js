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
          <Route path="./pages/Home.js" element={ <Zajem /> } />
          <Route path="./pages/Firmy.js" element={ <Firmy /> } />
          <Route path="./pages/Ucet.js" element={ <Ucet /> } />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;

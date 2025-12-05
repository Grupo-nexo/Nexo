import "./App.css";
import Cadastro from "./pages/Cadastro";
import RegistroDePonto from "./pages/registrodoponto";
import Home from "./pages/Home";
import Ponto from "./pages/Ponto";
import Localizacao from "./pages/Localizacao";
import PasswordRecovery from "./pages/PasswordRecovery";
import Login from "./pages/Login";
import QuickRecovery from "./pages/QuickRecovery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/registrodoponto" element={ <RegistroDePonto />} />
        <Route path="/ponto" element={<Ponto />} />
        <Route path="/localizacao" element={<Localizacao />} />
        <Route path="/recuperacao" element={<PasswordRecovery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quickRecovery" element={<QuickRecovery />} />
      </Routes>
    </Router>
  );
}

export default App;

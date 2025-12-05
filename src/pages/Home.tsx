import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="home-nav">
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/registrodoponto">Registro de Ponto</Link>
        <Link to="/Localizacao">Localização</Link>
        <Link to="/recuperacao">Recuperação</Link>
        <Link to="/login">Login</Link>
      </nav>

      {/* Conteúdo da Home */}
      <div className="home-content">
        <h1>Bem-vindo ao Sistema!</h1>
        <p>Use a barra de navegação acima para acessar as páginas.</p>
      </div>
    </div>
  );
}

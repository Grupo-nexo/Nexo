import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaFileAlt, FaAt, FaLock } from "react-icons/fa";
import logo from "../assets/Logonexo.png";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Menu lateral */}
        <aside className="login-menu">
        <div className="menu-item" onClick={() => navigate("/")}>
          <FaHome size={22} />
        <span>Home</span>
      </div>
      <div className="menu-item" onClick={() => navigate("/perfil")}>
          <FaUser size={22} />
        <span>Perfil</span>
     </div>
        <div className="menu-item" onClick={() => navigate("/sobre")}>
          <FaFileAlt size={22} />
        <span>Sobre Nós</span>
        </div>
        </aside>

        {/* Área do login */}
        <main className="login-main">
          <img src={logo} alt="Logo Nexo" className="login-logo" />
          <h2 className="login-title">Bem-vindo de volta!</h2>
          <p className="login-subtitle">Faça o login para continuar.</p>

          <div className="login-inputs">
            <div className="input-wrapper">
              <FaAt className="input-icon" />
              <input
                type="text"
                placeholder="Digite seu e-mail ou usuário"
                className="input-field"
              />
            </div>

            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Digite sua senha"
                className="input-field"
              />
            </div>

            <div className="login-links">
              <button
                className="link-button"
                onClick={() => navigate("/recuperacao")}
              >
                Esqueci minha senha
              </button>
              <button className="link-button">Lembre-me</button>
            </div>
          </div>

          <button className="login-button" onClick={() => navigate("/home")}>
            Acessar
          </button>

          <div className="login-register">
            <span>Não tem uma conta?</span>
            <button
              className="link-button"
              onClick={() => navigate("/cadastro")}
            >
              Cadastre-se aqui.
            </button>
          </div>

          <footer className="login-footer">
            © 2025 Nexo. Todos os direitos reservados. <br />
            Produtividade e organização em um só lugar.
          </footer>
        </main>
      </div>
    </div>
  );
}


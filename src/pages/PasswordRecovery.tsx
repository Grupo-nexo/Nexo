import React from "react";
import { useNavigate } from "react-router-dom";
import "./PasswordRecovery.css";
import logo from "../assets/Logonexo.png";

export default function PasswordRecovery() {
  const navigate = useNavigate();

  return (
    <div className="recovery-container">
      <header className="recovery-header">
        <div className="menu-icon">☰</div>
        <button className="back-button" onClick={() => navigate("/")}>
          Voltar
        </button>
      </header>

      <main className="recovery-main">
        <img src={logo} alt="Logo Nexo" className="recovery-logo" />

        <h1 className="recovery-title">Recuperação da senha</h1>
        <p className="recovery-subtitle">
          Digite seu número de telefone <br /> ou e-mail de recuperação.
        </p>

        <div className="input-wrapper">
          <span className="input-icon">@</span>
          <input
            type="text"
            placeholder="Número de telefone ou e-mail"
            className="input-field"
          />
        </div>

        <div className="link-group">
          <p className="link-text">Não recebeu seu Código?</p>
          <a href="#" className="resend-link">
            envie novamente.
          </a>
        </div>

        <p className="separator">ou</p>

        <button className="quick-recovery-link" onClick={() => navigate("/quickRecovery")}>
        Tentar recuperação rápida
        </button>
      </main>

      <footer className="recovery-footer">
        © 2025 Nexo. Todos os direitos reservados. <br />
        Produtividade e organização em um só lugar.
      </footer>
    </div>
  );
}

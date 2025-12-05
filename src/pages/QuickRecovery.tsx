import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logonexo.png";
import "./QuickRecovery.css";

export default function QuickRecovery() {
  const navigate = useNavigate();

  return (
    <div className="quick-container">
      <header className="quick-header">
        <div className="menu-icon">☰</div>
        <button className="back-button" onClick={() => navigate("/recuperacao")}>
          Voltar
        </button>
      </header>

      <main className="quick-main">
        <img src={logo} alt="Logo Nexo" className="quick-logo" />

        <h1 className="quick-title">Recuperação rápida</h1>
        <p className="quick-subtitle">
          Qual seu apelido de infância <br /> que ninguém sabe?
        </p>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Digite aqui seu apelido de infância"
            className="input-field"
          />
        </div>

        <button className="action-button">
          Enviar email de recuperação
        </button>

        <button
          className="quick-recovery-link"
          onClick={() => navigate("/recuperacao")}
        >
          Esqueceu sua chave de <br /> recuperação rápida?
        </button>
      </main>

      <footer className="quick-footer">
        © 2025 Nexo. Todos os direitos reservados. <br />
        Produtividade e organização em um só lugar.
      </footer>
    </div>
  );
}

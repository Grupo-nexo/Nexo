import React from "react";
import { useNavigate } from "react-router-dom";
import "./Ponto.css";
import logo from "../assets/Logonexo.png";

export default function Registro() {
    const navigate = useNavigate();
  return (
    <div className="registro-container">
      <div className="registro-card">
      <img src={logo} alt="Logo Nexo" className="ponto-logo" />
        <h1 className="registro-titulo">Registro de ponto concluído!</h1>
        <p className="registro-mensagem">Obrigado por registrar seu ponto!</p>
        <button className="registro-botao" onClick={() => navigate("/")}>Voltar para o início</button>
      </div>
      <footer className="registro-footer">
        © 2025 Nexo. Todos os direitos reservados. <br />
        Produtividade e organização em um só lugar.
      </footer>
    </div>
  );
}

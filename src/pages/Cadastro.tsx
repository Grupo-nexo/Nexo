import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaPhone, FaUsers, FaIdCard } from "react-icons/fa";

import "./Cadastro.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logonexo.png";

function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    setor: "",
    dia: "",
    mes: "",
    ano: "",
    id: "",
    termos: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      setFormData({ ...formData, [name]: e.target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    console.log(formData);
  };

  return (
    <div className="container">
     <div className="header">
     <button className="btn-voltar" onClick={() => navigate("/")}>Voltar</button>
     <img src={logo} alt="Logo Nexo" className="cadastro-logo" />
     <h2 className="title">Cadastro</h2>
     </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <FaUser className="icon" />
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            name="senha"
            placeholder="Crie sua senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <FaEnvelope className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Email corporativo"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirme sua senha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <FaPhone className="icon" />
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <FaUsers className="icon" />
          <select
            name="setor"
            value={formData.setor}
            onChange={handleChange}
            required
          >
            <option value="">Setor</option>
            <option value="RH">RH</option>
            <option value="Financeiro">Financeiro</option>
            <option value="TI">TI</option>
            <option value="Comercial">Comercial</option>
          </select>
        </div>

        <div className="data-nascimento">
          <label>Preencha com sua data de nascimento:</label>
          <div className="data-inputs">
            <select name="dia" value={formData.dia} onChange={handleChange} required>
              <option value="">Dia</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select name="mes" value={formData.mes} onChange={handleChange} required>
              <option value="">Mês</option>
              {[
                "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
              ].map((m, i) => (
                <option key={i + 1} value={m}>{m}</option>
              ))}
            </select>

            <select name="ano" value={formData.ano} onChange={handleChange} required>
              <option value="">Ano</option>
              {Array.from({ length: 70 }, (_, i) => {
                const year = 2025 - i;
                return (
                  <option key={year} value={String(year)}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="input-group">
          <FaIdCard className="icon" />
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={formData.id}
            onChange={handleChange}
          />
        </div>

        <div className="termos">
          <input
            type="checkbox"
            name="termos"
            checked={formData.termos}
            onChange={handleChange}
            required
          />
          <p>
            Ao preencher o formulário acima você concorda com os nossos{" "}
            <span>Termos de uso</span> e nossa <span>Política de Privacidade</span>.
          </p>
        </div>

        <button type="submit" className="btn-criar">
          Criar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;

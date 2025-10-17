'use client';

import { useState } from 'react';

export default function RecoveryPage() {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) {
      alert('Por favor, digite um telefone ou e-mail.');
      return;
    }
    alert(`Código de recuperação enviado para: ${input}`);
  };

  return (
    <>
      <header>
        <nav>
          <a href="#">🏠 Home</a>
          <a href="#">👤 Profile</a>
          <a href="#">📄 About</a>
        </nav>
      </header>

      <main>
        <div className="recovery-box">
          <h1 className="logo"><span>⦿⦿</span> NEXO</h1>
          <h2 className="title">Recuperação da senha</h2>
          <p>
            <strong>Digite seu número de telefone</strong><br />
            ou e-mail de recuperação.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="recovery-input"
              placeholder="Número de telefone ou e-mail"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <button type="submit" className="recovery-button">Enviar Código</button>
          </form>

          <a href="#" className="small-link">
            Não recebeu seu Código? <span className="highlight">envie novamente.</span>
          </a>

          <p className="small-link">
            <span className="highlight">ou</span>
          </p>

          <a href="#" className="small-link"><strong>Tentar recuperação rápida</strong></a>
        </div>
      </main>

      <footer className="footer">
        ©️ 2025 Nexo. Todos os direitos reservados.<br />
        Produtividade e organização em um só lugar.
      </footer>
    </>
  );
}

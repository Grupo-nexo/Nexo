"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { Home, User, FileText, AtSign, Lock } from "lucide-react";

// Fonte //
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function LoginPage() {
  return (
    // Fundo cinza //
    <div
      className={poppins.className}
      style={{
        backgroundColor: "#e5e5e5",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >

      {/* Bloco branco central */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "80px 100px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "1800px",
          minHeight: "900px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "center",
          position: "relative",
        }}
      >

        {/* Ícones do topo esquerdo */}
        <div
          style={{
            position: "absolute",
            top: "25px",
            left: "30px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Home size={20} color="#000" />
            <span style={{ fontWeight: 700, color: "#000" }}>Home</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <User size={20} color="#000" />
            <span style={{ fontWeight: 700, color: "#000" }}>Profile</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <FileText size={20} color="#000" />
            <span style={{ fontWeight: 700, color: "#000" }}>About</span>
          </div>
        </div>

        {/* Logo e cabeçalho */}
        <div
          style={{
            marginTop: "100px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          <img
            src="/logo.png.png"
            alt="Logo NEXO"
            style={{
              width: "255px",
              height: "auto",
              marginBottom: "10px",
            }}
          />
          <h2
            style={{
              fontSize: "28px",
              color: "#000",
              fontWeight: "700",
            }}
          >
            Bem-vindo de volta!
          </h2>
          <p
            style={{
              color: "#000",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Faça o login para continuar.
          </p>
        </div>

        {/* Campos de entrada */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "15px",
            width: "100%",
            maxWidth: "400px",
            gap: "12px",
          }}
        >

          {/* Campo de e-mail */}
          <div style={{ position: "relative", width: "100%" }}>
            <AtSign
              size={18}
              color="#666"
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="text"
              placeholder="Digite seu e-mail ou usuário"
              style={{
                width: "100%",
                padding: "18px 14px 18px 44px",
                border: "2px solid #a8a8a8ff",
                borderRadius: "6px",
                backgroundColor: "#f9f9f9",
                color: "#000",
                fontWeight: "600",
                outline: "none",
                fontFamily: "'Poppins', sans-serif",
              }}
            />
          </div>

          {/* Campo de senha */}
          <div style={{ position: "relative", width: "100%" }}>
            <Lock
              size={18}
              color="#666"
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              style={{
                width: "100%",
                padding: "18px 14px 18px 44px",
                border: "2px solid #a8a8a8ff",
                borderRadius: "6px",
                backgroundColor: "#f9f9f9",
                color: "#000",
                fontWeight: "600",
                outline: "none",
                fontFamily: "'Poppins', sans-serif",
              }}
            />
          </div>

          {/* Links abaixo dos campos */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              fontSize: "13px",
              marginTop: "5px",
              marginBottom: "25px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#000",
                fontWeight: "600",
                textDecoration: "underline",
              }}
            >
              Esqueci minha senha
            </a>
            <a
              href="#"
              style={{
                color: "#000",
                fontWeight: "600",
                textDecoration: "underline",
              }}
            >
              Lembre-me
            </a>
          </div>
        </div>

        {/* Botão principal */}
        <button
          style={{
            backgroundColor: "#facc15",
            border: "none",
            color: "#fff",
            fontWeight: "700",
            borderRadius: "15px",
            width: "150px",
            padding: "12px",
            cursor: "pointer",
            marginBottom: "20px",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Acessar
        </button>

        {/* Link de cadastro */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "5px",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#000",
            }}
          >
            Não tem uma conta?
          </span>
          <a
            href="#"
            style={{
              textDecoration: "underline",
              fontWeight: "600",
              color: "#000",
              marginTop: "2px",
            }}
          >
            Cadastre-se aqui.
          </a>
        </div>

        {/* Rodapé */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "#000",
              fontWeight: "700",
            }}
          >
            © 2025 Nexo. Todos os direitos reservados.
            <br />
            Produtividade e organização em um só lugar.
          </p>
        </div>
      </div>
    </div>
  );
}

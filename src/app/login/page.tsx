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

      {/* Retângulo branco principal */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "80px 100px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "1800px",
          minHeight: "900px",
          display: "flex",
          flexDirection: "row",    
          textAlign: "center",
          position: "relative",
          gap: "60px",
        }}
      >

        {/*  MENU lateral*/}
<div
  style={{
    position: "absolute",
    top: "40px",
    left: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "35px",
  }}
>
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <Home size={22} color="#000" />
    <span style={{ fontWeight: 700, color: "#000" }}>Home</span>
  </div>

  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <User size={22} color="#000" />
    <span style={{ fontWeight: 700, color: "#000" }}>Perfil</span>
  </div>

  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <FileText size={22} color="#000" />
    <span style={{ fontWeight: 700, color: "#000" }}>Sobre Nós</span>
  </div>
</div>

        {/*  Área do LOGIN*/}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginTop: "60px",
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

          {/* Inputs */}
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
                }}
              />
            </div>

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
                }}
              />
            </div>

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

          <button
            style={{
              backgroundColor: "#facc15",
              border: "none",
              color: "#000",
              fontWeight: "700",
              borderRadius: "15px",
              width: "150px",
              padding: "12px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            Acessar
          </button>

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
              ©️ 2025 Nexo. Todos os direitos reservados.
              <br />
              Produtividade e organização em um só lugar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

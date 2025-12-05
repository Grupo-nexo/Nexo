import { FaBars, FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Localizacao.css";
import logo from "../assets/Logonexo.png";

export default function Localizacao() {
  const navigate = useNavigate();

  return (
    <div className="localizacao-wrapper">
      {/* Cabeçalho fixo */}
      <div className="top-bar-global">
  <button className="btn-voltar" onClick={() => navigate("/")}>
    <FaArrowLeft /> Voltar
  </button>

  <img src={logo} alt="Logo Nexo" className="logo" />

  <FaBars className="icone-menu" />
</div>

      {/* Conteúdo dividido */}
      <div className="conteudo">
        {/* Emisfério esquerdo */}
        <div className="lado-esquerdo">
          <input
            type="text"
            placeholder="Buscar local"
            className="buscar-local"
          />

          <img
            src="https://i.imgur.com/2GDpDjJ.png"
            alt="Mapa"
            className="mapa"
          />

          <div className="info-local">
            <h3>Endereço atual</h3>
            <p>Rua da Figueira 26, São Paulo, Brasil</p>
            <h3>Horário local</h3>
            <p>14:58</p>
            <h3>Clima</h3>
            <p>21° / 35°</p>
          </div>
        </div>

        {/* Emisfério direito */}
        <div className="lado-direito">
          <h2 className="painel-titulo">Gerenciar localização</h2>
          <button
            className="btn-visualizar"
            onClick={() => navigate("/registrodoponto")}
          >
            <FaMapMarkerAlt className="icone-localizacao" />
            Visualizar localização
          </button>
          <p className="atualizacao">Última atualização há 5 min.</p>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="rodape">
        © 2025 Nexo. Todos os direitos reservados. <br />
        Produtividade e organização em um só lugar.
      </footer>
    </div>
  );
}
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logonexo.png";
import "./registrodoponto.css";

export default function RegistroDePonto() {
  const navigate = useNavigate();

  return (
    <div className="pagina">
      <header className="topo">
        <button className="btn-voltar" onClick={() => navigate("/")}>Voltar</button>
        <img src={logo} alt="Logo Nexo" className="logo-topo" />
        <FaBars size={28} className="icone-menu" aria-label="Menu" />
      </header>

      <section className="cabecalho">
        <h1 className="data">Segunda-feira, 2 de Novembro</h1>
        <p className="saudacao">Olá, Paulo!</p>
      </section>

      <main className="conteudo">
        <section className="col-esquerda">
          <div className="card">
            <img
              src="https://i.imgur.com/2GDpDjJ.png"
              alt="Mapa da localização"
              className="mapa"
            />
          </div>

          <div className="card">
            <h2 className="card-titulo">Últimos registros</h2>
            <div className="registro-item">
              <span>FICR – Faculdade Católica Imaculada Conceição do Recife</span>
              <span className="hora">8:00</span>
            </div>
            <div className="registro-item">
              <span>FICR – Faculdade Católica Imaculada Conceição do Recife</span>
              <span className="hora">7:57</span>
            </div>
          </div>
        </section>

        <aside className="col-direita">
          <div className="card">
            <h2 className="card-titulo">Seu dia</h2>
            <div className="progresso-circular">
              <div className="progresso-inner">
                <span>50%</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-titulo">Metas</h2>
            <p>2/3 metas concluídas</p>
            <div className="barra"><div className="barra-preenchida w-full"></div></div>
            <div className="barra"><div className="barra-preenchida w-full"></div></div>
            <div className="barra"><div className="barra-preenchida w-1-2"></div></div>
          </div>

          <div className="card">
            <h2 className="card-titulo">Faltas</h2>
            <p className="faltas">5 Faltas</p>
          </div>
        </aside>
      </main>

      <div className="acao">
        <button className="btn-registrar" onClick={() => navigate("/Ponto")}>
          Registrar ponto
        </button>
      </div>
    </div>
  );
}


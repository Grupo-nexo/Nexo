import Image from "next/image";

// Largura ajustada para 500px, conforme a proporção do protótipo final.
const FORM_MAX_WIDTH = "500px"; 

function MenuSVG() {
  return (
    <svg
      viewBox="0 0 100 80"
      width="30"
      height="30"
      fill="#4b5563"
      className="menu-icon"
    >
      <rect width="100" height="15" rx="8"></rect>
      <rect y="35" width="100" height="15" rx="8"></rect>
      <rect y="70" width="100" height="15" rx="8"></rect>
    </svg>
  );
}

function CalendarSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="calendar-icon"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
      <line x1="16" x2="16" y1="2" y2="6"></line>
      <line x1="8" x2="8" y1="2" y2="6"></line>
      <line x1="3" x2="21" y1="10" y2="10"></line>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page-container">
      <header className="main-header">
        <MenuSVG />
        <div></div>
      </header>

      <main className="main-content">
        <div className="central-wrapper">
          <div className="form-section">
            <div className="logo-area">
              <Image
                src="/nexo_logo.png" // Assumindo que o caminho da imagem está correto
                alt="Logo Nexo"
                width={180}
                height={60}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            <h1 className="main-title">
              Solicitação de abono de falta
            </h1>
            <p className="subtitle-text">
              Preencha os dados abaixo para solicitar o abono da sua falta.
            </p>

            <form className="abono-form" style={{ maxWidth: FORM_MAX_WIDTH }}>
              
              <div className="form-row">
                
                {/* Data de falta */}
                <div className="input-group">
                  <label htmlFor="data-falta" className="form-label">
                    Data de falta:<span className="required">*</span>
                  </label>
                  <div className="input-with-icon">
                    <input
                      id="data-falta"
                      type="text"
                      placeholder="Digite a data (DD/MM/AAAA)"
                      className="form-input"
                    />
                    <span className="icon-position">
                      <CalendarSVG />
                    </span>
                  </div>
                </div>

                {/* Anexar comprovante */}
                <div className="input-group file-group">
                  <label className="form-label">
                    Anexar comprovante:<span className="required">*</span>
                  </label>
                  <label
                    htmlFor="anexar-comprovante"
                    className="button-file-select"
                  >
                    Escolher arquivo
                  </label>
                  <input
                    id="anexar-comprovante"
                    type="file"
                    className="hidden-file-input"
                  />
                </div>
              </div>

              {/* Motivo do abono */}
              <div className="input-group">
                <label
                  htmlFor="motivo-abono"
                  className="form-label"
                >
                  Motivo do abono:
                </label>
                <textarea
                  id="motivo-abono"
                  rows={2}
                  placeholder="Descreva brevemente o motivo do abono..."
                  className="form-textarea"
                />
              </div>

              {/* CLASSE CORRIGIDA: Usa submit-container e submit-btn */}
              <div className="submit-container"> 
                <button
                  type="submit"
                  className="submit-btn" 
                >
                  Enviar solicitação
                </button>
              </div>
            </form>

            {/* Observação: Removido o <span className="font-semibold"> para ficar idêntico ao protótipo */}
            <div className="observation-text" style={{ maxWidth: FORM_MAX_WIDTH }}>
              <p>
                Observação: As
                solicitações serão avaliadas em até 3 dias úteis. Você receberá
                um e-mail com o status da solicitação.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé: Estilos inline para consistência visual com o protótipo */}
      <footer className="main-footer" style={{ borderTop: 'none', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: FORM_MAX_WIDTH, margin: '0 auto', textAlign: 'center' }}>
          <p className="footer-text">
            © 2025 Nexo. Todos os direitos reservados.
          </p>
          <p className="footer-subtext">
            Produtividade e organização em um só lugar.
          </p>
        </div>
      </footer>
    </div>
  );
}
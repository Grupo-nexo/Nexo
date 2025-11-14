import React from 'react';


const PRIMARY_COLOR = '#FFC72C';


const NexoLogo: React.FC = () => (
  
  <svg
    width="80"
    height="30"
    viewBox="0 0 80 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: '30px 0 10px 0' }}
  >
    {}
    <path d="M0 30L20 0H30L10 30H0Z" fill={PRIMARY_COLOR} />
    {}
    <path d="M50 30L70 0H80L60 30H50Z" fill={PRIMARY_COLOR} />
  </svg>
);

const QuickRecovery: React.FC = () => {
  return (
    <div style={styles.container}>
      {}
      <header style={styles.header}>
        <div style={styles.menuIcon}>☰</div>
        <button style={styles.backButton}>Voltar</button>
      </header>

      {}
      <main style={styles.mainContent}>
        
        <img src="/assets/logo.png" alt="Logo Nexo" style={styles.logo} />
      
        <h1 style={styles.title}>Recuperação rápida</h1>
        
        <p style={styles.subtitle}>
          Qual seu apelido de infância <br /> que ninguém sabe?
        </p>

        <div style={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Digite aqui seu apelido de infância"
            style={styles.inputField}
          />
        </div>
        
        <button style={styles.actionButton}>
            Enviar email de recuperação
        </button>

        <a href="#" style={styles.quickRecoveryLink}>
          Esqueceu sua chave de <br /> recuperação rápida?
        </a>
      </main>

      {}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © 2025 Nexo. Todos os direitos reservados.
          <br />
          Produtividade e organização em um só lugar.
        </p>
      </footer>
    </div>
  );
};


const styles: { [key: string]: React.CSSProperties } = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', minHeight: '400px', boxSizing: 'border-box', },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px 20px', boxSizing: 'border-box', borderBottom: '1px solid #eee', },
  headerTitle: { fontSize: '10px', color: '#666', fontWeight: 'bold', },
  menuIconGroup: { display: 'flex', alignItems: 'center', gap: '10px', },
  menuIcon: { fontSize: '24px', cursor: 'pointer', color: '#333', padding: '5px', marginRight: '10px', },
  backButton: { backgroundColor: PRIMARY_COLOR, color: '#333', border: 'none', padding: '8px 15px', borderRadius: '4px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', },
  mainContent: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0', width: '100%', flexGrow: 1, },
  title: { fontSize: '32px', fontWeight: 'bold', color: PRIMARY_COLOR, margin: '10px 0 5px 0', },
  subtitle: { fontSize: '16px', color: '#333', textAlign: 'center', lineHeight: '1.4', marginBottom: '25px', },
  inputWrapper: { display: 'flex', alignItems: 'center', width: '80%', maxWidth: '300px', borderRadius: '4px', padding: '8px 10px', backgroundColor: '#f9f9f9', border: '1px solid #ccc', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)', marginBottom: '25px', },
  inputField: { flexGrow: 1, border: 'none', outline: 'none', fontSize: '14px', backgroundColor: 'transparent', color: '#333', padding: '2px 0', textAlign: 'center', },
  actionButton: { backgroundColor: PRIMARY_COLOR, color: '#333', border: 'none', padding: '12px 25px', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', width: '80%', maxWidth: '320px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', },
  quickRecoveryLink: { fontSize: '14px', color: '#333', textDecoration: 'none', fontWeight: 'bold', textAlign: 'center', marginTop: '25px', lineHeight: '1.5', cursor: 'pointer', },
  footer: { width: '100%', textAlign: 'center', padding: '20px', boxSizing: 'border-box', marginTop: 'auto', },
  footerText: { fontSize: '12px', color: '#666', lineHeight: '1.5', margin: '0', },
  logo: {width: '150px'}
};

export default QuickRecovery;
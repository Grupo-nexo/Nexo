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


const PasswordRecovery: React.FC = () => {
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
        
        {}
        <h1 style={styles.title}>Recuperação da senha</h1>
        
        {}
        <p style={styles.subtitle}>
          Digite seu número de telefone <br /> ou e-mail de recuperação.
        </p>

        {}
        <div style={styles.inputWrapper}>
          <span style={styles.inputIcon}>@</span>
          <input
            type="text"
            placeholder="Número de telefone ou e-mail"
            style={styles.inputField}
          />
        </div>

        {}
        <div style={styles.linkGroup}>
          <p style={styles.linkText}>Não recebeu seu Código?</p>
          {}
          <a href="#" style={styles.resendLink}>
            envie novamente.
          </a>
        </div>
        
        {}
        <p style={styles.separator}>ou</p>
        
        {}
        <a href="#" style={styles.quickRecoveryLink}>
          Tentar recuperação rápida
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minHeight: '400px', 
    boxSizing: 'border-box',
    
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '10px 20px',
    boxSizing: 'border-box',
  },
  menuIcon: {
    fontSize: '24px',
    cursor: 'pointer',
    color: '#333',
    padding: '5px',
  },
  backButton: {
    backgroundColor: PRIMARY_COLOR,
    color: '#333',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px', 
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0',
    width: '100%',
    flexGrow: 1, 
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    margin: '10px 0 5px 0',
  },
  subtitle: {
    fontSize: '16px',
    color: '#333',
    textAlign: 'center',
    lineHeight: '1.4',
    marginBottom: '25px',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    maxWidth: '320px', 
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '8px 10px',
    backgroundColor: '#f9f9f9', 
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)', 
  },
  inputIcon: {
    fontSize: '18px',
    color: '#999',
    marginRight: '10px',
  },
  inputField: {
    flexGrow: 1,
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    backgroundColor: 'transparent',
    color: '#333',
    padding: '2px 0',
  },
  linkGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px',
    fontSize: '14px',
  },
  linkText: {
    color: '#333',
    margin: '5px 0 0 0',
  },
  resendLink: {
    color: PRIMARY_COLOR,
    textDecoration: 'none',
    fontWeight: 'bold', 
    margin: '0 0 10px 0',
    cursor: 'pointer',
  },
  separator: {
    fontSize: '14px',
    color: '#333',
    fontWeight: 'bold',
    margin: '10px 0',
    textTransform: 'uppercase',
  },
  quickRecoveryLink: {
    fontSize: '16px',
    color: PRIMARY_COLOR,
    textDecoration: 'none',
    fontWeight: 'bold',
    borderBottom: `1px solid ${PRIMARY_COLOR}`,
    paddingBottom: '2px',
    marginTop: '10px',
    marginBottom: '50px',
    cursor: 'pointer',
  },
  footer: {
    width: '100%',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    marginTop: 'auto', 
  },
  footerText: {
    fontSize: '12px',
    color: '#666',
    lineHeight: '1.5',
    margin: '0',
  },

  logo: {width: '150px'}
};

export default PasswordRecovery;
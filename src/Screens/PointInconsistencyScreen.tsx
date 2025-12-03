import React, { useState } from 'react';
import { FiHome, FiUser, FiClock, FiDollarSign, FiCalendar, FiInfo } from 'react-icons/fi';

import SidebarItem from '../components/SidebarItem'; 
import { styles } from '../Styles/PointInconsistencyStyles'; 


const PointInconsistencyScreen: React.FC = () => {
  const [colaborador, setColaborador] = useState('Todos');
  const [motivo, setMotivo] = useState('Todos');
  const [cargo, setCargo] = useState('Todos');
  const [localTrabalho, setLocalTrabalho] = useState('Todos');
  const [dataInicio, setDataInicio] = useState('01/11/2025');
  const [dataFinal, setDataFinal] = useState('30/11/2025');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulário Enviado! Verifique o console para os dados.');
    console.log('Dados da Inconsistência:', {
      colaborador, motivo, cargo, localTrabalho, dataInicio, dataFinal
    });
  };

  return (
    <div style={styles.container}>
      
      {/* 1. Cabeçalho da Aplicação (NEXO e Botão Voltar) */}
      <div style={styles.appHeader}>
          
          <div style={styles.nexoLogo}>
              <img 
                  src="/nexo_logo.png"
                  alt="Logo da Empresa" 
                  style={{ height: '35px', width: 'auto' }} 
              />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', color: '#333' }}>
              <span style={{ fontSize: '18px', marginRight: '15px', opacity: 0.8 }}>{'<'}</span> 
              <button 
                style={styles.buttonVoltar}
                onClick={() => console.log('Voltar clicado')}
              >
                Voltar
              </button>
          </div>
      </div>
      
      {/* 2. Conteúdo Principal */}
      <div style={styles.contentWrapper}>
        
        {/* Sidebar (Menu Lateral) */}
        <div style={styles.sidebar}>
          <SidebarItem icon={<FiHome size={20} />} label="Home" isSelected={false} />
          <SidebarItem icon={<FiUser size={20} />} label="Perfil" isSelected={false} />
          <SidebarItem icon={<FiClock size={20} />} label="Ponto" isSelected={true} /> 
          <SidebarItem icon={<FiDollarSign size={20} />} label="Financeiro" isSelected={false} />
          <SidebarItem icon={<FiCalendar size={20} />} label="Férias" isSelected={false} />
          <SidebarItem icon={<FiInfo size={20} />} label="Sobre Nós" isSelected={false} />
        </div>

        {/* Área do Formulário de Inconsistência */}
        <div style={styles.mainPanel}>
          
          <div style={styles.inconsistencyTitle}>Inconsistência</div>
          <p style={styles.inconsistencySubtitle}>
            Consulte aqui as inconsistências no seu fechamento de ponto.
            Para garantir a consistência das informações, solicite a análise abaixo.
          </p>

          <form onSubmit={handleSubmit}>
            
            <div style={styles.formGrid}>
              
              {/* Colaborador*/}
              <div style={styles.inputGroup}>
                <label htmlFor="colaborador" style={styles.inputLabel}>Colaborador</label>
                <select id="colaborador" value={colaborador} onChange={(e) => setColaborador(e.target.value)} style={styles.formField}>
                  <option value="Todos">Todos</option>
                </select>
              </div>
              {/* Motivo da Inconsistência*/}
              <div style={styles.inputGroup}>
                <label htmlFor="motivo" style={styles.inputLabel}>Motivo da Inconsistência</label>
                <select id="motivo" value={motivo} onChange={(e) => setMotivo(e.target.value)} style={styles.formField}>
                  <option value="Todos">Todos</option>
                </select>
              </div>

              {/* Cargo */}
              <div style={styles.inputGroup}>
                <label htmlFor="cargo" style={styles.inputLabel}>Cargo</label>
                <select id="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} style={styles.formField}>
                  <option value="Todos">Todos</option>
                </select>
              </div>
              {/* Local de trabalho/Setor*/}
              <div style={styles.inputGroup}>
                <label htmlFor="local" style={styles.inputLabel}>Local de trabalho/Setor</label>
                <select id="local" value={localTrabalho} onChange={(e) => setLocalTrabalho(e.target.value)} style={styles.formField}>
                  <option value="Todos">Todos</option>
                </select>
              </div>

              {/* Datas*/}
              <div style={{ ...styles.inputGroup, flexDirection: 'row', gap: '20px', gridColumn: 'span 1' }}>
                <div style={{ ...styles.inputGroup, flex: 1 }}>
                    <label htmlFor="dataInicio" style={styles.inputLabel}>Data de início</label>
                    <input type="text" id="dataInicio" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} style={styles.formField} />
                </div>
                
                <div style={{ ...styles.inputGroup, flex: 1 }}>
                    <label htmlFor="dataFinal" style={styles.inputLabel}>Data Final</label>
                    <input type="text" id="dataFinal" value={dataFinal} onChange={(e) => setDataFinal(e.target.value)} style={styles.formField} />
                </div>
              </div>
              
              {/* Aviso Importante*/}
              <div style={{ display: 'flex', alignItems: 'center', gridColumn: 'span 1', paddingTop: '15px' }}>
                <div style={styles.importantBox}>
                    **Importante:** A ação só poderá ser anexada até o fechamento da folha do ponto.
                </div>
              </div>

            </div> 
            
            {/* Botão Enviar */}
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button type="submit" style={styles.buttonYellow}>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* 3. Rodapé */}
      <div style={styles.footerAligner}> 
          
          <div style={{ width: styles.sidebar.width as number, marginRight: styles.sidebar.marginRight }} /> 

          <div style={styles.footer}>
              © 2025 Nexo. Todos os direitos reservados.
              <br/>
              Produtividade e organização em um só lugar.
          </div>
      </div>
      
    </div>
  );
};

export default PointInconsistencyScreen;
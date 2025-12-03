import React from 'react';

interface ComponentStyles {
    [key: string]: React.CSSProperties;
}

export const styles: ComponentStyles = {
    // Container principal
    container: {
        backgroundColor: '#F8F8F8', 
        minHeight: '100vh',
        padding: '20px 0',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
    } as React.CSSProperties,

    contentWrapper: {
        display: 'flex',
        width: '90%',
        maxWidth: '1200px',
        marginTop: '20px', 
    } as React.CSSProperties,

    // Sidebar (Menu Lateral)
    sidebar: {
        width: '180px', 
        padding: '20px 0',
        flexShrink: 0,
        backgroundColor: '#FFFFFF', 
        marginRight: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        height: 'fit-content', 
    } as React.CSSProperties,
    
    // Área Principal do Formulário
    mainPanel: {
        flexGrow: 1,
        padding: '30px',
        backgroundColor: '#FFFFFF', 
        borderRadius: '8px',
        color: '#333',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
    } as React.CSSProperties,

    // Cabeçalho da aplicação (NEXO e Botão Voltar)
    appHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        maxWidth: '1200px',
        padding: '10px 0',
    } as React.CSSProperties,
    
    // Espaço para Logo e NEXO
    nexoLogo: {
        minWidth: '150px', 
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10px',
    },
    
    // Título e Subtítulo
    inconsistencyTitle: {
        color: '#FFC72C',
        fontSize: '24px',
        marginBottom: '8px',
        fontWeight: 'bold',
    } as React.CSSProperties,
    inconsistencySubtitle: {
        fontSize: '14px',
        color: '#666',
        marginBottom: '30px', 
    } as React.CSSProperties,

    // Grid do Formulário (2 colunas)
    formGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px', 
        marginBottom: '30px',
    } as React.CSSProperties,

    // Grupo de Input (Label + Campo)
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
    } as React.CSSProperties,
    inputLabel: {
        fontSize: '14px',
        fontWeight: '600',
        marginBottom: '5px',
        color: '#555',
    } as React.CSSProperties,
    
    // Estilo de Select/Input 
    formField: {
        backgroundColor: '#FFFFFF', 
        border: '1px solid #E0E0E0', 
        color: '#333',
        padding: '10px',
        borderRadius: '4px',
        appearance: 'none', 
        fontSize: '14px',
        cursor: 'pointer',
    } as React.CSSProperties,
    
    // Caixa de Aviso Amarela
    importantBox: {
        backgroundColor: '#fff8e6', 
        color: '#a07c00', 
        border: '1px solid #ffeeba',
        padding: '10px',
        borderRadius: '4px',
        fontSize: '12px',
        height: 'fit-content',
        alignSelf: 'center', 
        minWidth: '250px',
        fontWeight: 'bold',
    } as React.CSSProperties,

    // Botões
    buttonYellow: {
        backgroundColor: '#FFC72C',
        color: 'black',
        padding: '12px 40px',
        border: 'none',
        borderRadius: '6px', 
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.2s',
    } as React.CSSProperties,
    
    // Botão Voltar
    buttonVoltar: {
        backgroundColor: '#FFC72C', 
        color: 'black',
        padding: '8px 25px',
        borderRadius: '20px', 
        fontWeight: 'bold',
        transition: 'opacity 0.2s',
        border: 'none', 
        outline: 'none', 
    } as React.CSSProperties,

   
    footerAligner: {
        display: 'flex',
        width: '90%',
        maxWidth: '1200px',
        marginTop: '60px', 
    } as React.CSSProperties,

    // Rodapé 
    footer: {
        marginTop: '0px',
        textAlign: 'center', 
        fontSize: '12px',
        color: '#999',
        paddingBottom: '20px',
        flexGrow: 1,
    } as React.CSSProperties,
};
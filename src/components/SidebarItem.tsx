import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

// 1. Definição da Interface
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isSelected: boolean;
}

// 2. Definição Local dos Estilos
const itemStyles = {
    base: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 15px', 
        cursor: 'pointer',
        opacity: 0.7,
        fontSize: '15px', 
        color: '#333', 
        transition: 'opacity 0.2s, background-color 0.2s',
    } as React.CSSProperties,
    selected: {
        opacity: 1,
        fontWeight: 'bold',
        color: '#FFC72C', 
        backgroundColor: '#FFFBE6', 
        borderLeft: '4px solid #FFC72C',
        paddingLeft: '11px', 
    } as React.CSSProperties,
};

// 3. Definição do Componente
const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isSelected }) => (
  <div style={{ ...itemStyles.base, ...(isSelected ? itemStyles.selected : {}) }}>

    <span style={{ color: isSelected ? itemStyles.selected.color : itemStyles.base.color }}>
        {icon}
    </span>
    
    <span style={{ marginLeft: '10px', flexGrow: 1 }}>{label}</span>
    
    <span style={{ opacity: 0.5, color: isSelected ? itemStyles.selected.color : itemStyles.base.color }}>
        <FiChevronRight size={16} />
    </span>
  </div>
);

export default SidebarItem;
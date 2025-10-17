import React, { useState, useCallback, useEffect } from 'react';
import { Home, User, FileText, LogOut, X, CheckCircle } from 'lucide-react';

const Notification = ({ message, type, onClose }) => {
    if (!message) return null;

    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-yellow-500';
    const icon = type === 'success' ? <CheckCircle size={20} className="mr-2" /> : <LogOut size={20} className="mr-2" />;

    return (
        <div className="fixed top-4 right-4 z-50">
            <div className={`flex items-center ${bgColor} text-white text-sm font-bold px-4 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-out animate-slideIn`}>
                {icon}
                <span>{message}</span>
                <button onClick={onClose} className="ml-4 opacity-75 hover:opacity-100">
                    <X size={16} />
                </button>
            </div>
            <style jsx="true">{`
                .animate-slideIn {
                    animation: slideIn 0.3s forwards;
                }
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

function App() {
    const [notification, setNotification] = useState(null);

    const showNotification = useCallback((msg, type = 'success') => {
        setNotification({ message: msg, type: type });
        setTimeout(() => setNotification(null), 3000);
    }, []);

    const handleEncerrar = () => {
        showNotification('Sessão encerrada com sucesso!', 'success');
    };

    const handleVoltar = () => {
        showNotification('Voltando para a aplicação principal.', 'info');
    };

    const handleTrocarConta = () => {
        showNotification('Redirecionando para a tela de troca de contas.', 'info');
    };

    useEffect(() => {
        document.body.style.fontFamily = 'Inter, sans-serif';
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
            
            {notification && (
                <Notification 
                    message={notification.message} 
                    type={notification.type} 
                    onClose={() => setNotification(null)} 
                />
            )}

            <header className="bg-white shadow-sm border-b border-gray-200">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center gap-8 text-sm font-medium">
                        <a href="#" className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 transition-colors">
                            <Home size={18} /> Home
                        </a>
                        <a href="#" className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 transition-colors">
                            <User size={18} /> Profile
                        </a>
                        <a href="#" className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 transition-colors">
                            <FileText size={18} /> About
                        </a>
                    </div>
                </nav>
            </header>

            <main className="flex-1 flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-sm p-8 md:p-12 text-center">
                    
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                                <span className="text-xl font-extrabold text-gray-900">N</span>
                            </div>
                            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">NEXO</h1>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mb-8">
                        <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                            <LogOut size={48} className="text-gray-900" />
                        </div>
                        <h2 className="text-2xl font-bold text-yellow-600 mb-4">Log out</h2>
                        <p className="text-base text-gray-700 font-medium">
                            Deseja realmente encerrar sua sessão?
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={handleEncerrar}
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg transition-colors shadow-md transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
                        >
                            Encerrar
                        </button>
                        <button
                            onClick={handleVoltar}
                            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
                        >
                            Voltar
                        </button>
                        <p className="text-gray-500 font-medium my-1 text-sm">ou</p>
                        <button
                            onClick={handleTrocarConta}
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg transition-colors shadow-md transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
                        >
                            Trocar de conta
                        </button>
                    </div>
                </div>
            </main>

            <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-xs text-gray-700">
                        © 2025 Nexo. Todos os direitos reservados.
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                        Produtividade e organização em um só lugar.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;

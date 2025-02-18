import React, { useEffect, useState } from 'react';
import secretaryService from '../services/SecretaryService';
import '../styles/SecretaryHome.css'; // Importação do CSS

const SecretaryHome = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        // Buscar os avisos e notícias
        const fetchNotices = async () => {
            try {
                const response = await secretaryService.getNotices();
                setNotices(response);
            } catch (error) {
                console.error('Erro ao buscar avisos:', error);
            }
        };

        fetchNotices();
    }, []);

    return (
        <div className="secretary-home">
            {/* Cabeçalho */}
            <header className="header">
                <h1>Secretary Manager</h1>
            </header>
            <div className="main-content">
                {/* Painel central */}
                <div className="content">
                    <h2 className="welcome-message">Bem-vindo!</h2>
                    <div className="notices-container">
                        {notices.map((notice, index) => (
                            <div key={index} className="notice-card">
                                <h3>{notice.title}</h3>
                                <p>{notice.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecretaryHome;
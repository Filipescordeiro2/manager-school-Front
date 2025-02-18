import React, { useEffect, useState } from 'react';
import studentService from '../services/teacherService';
import InstitutionDetails from '../components/InstitutionDetails';
import '../styles/teacherHome.css'; // Importação do CSS

const TeachertHome = () => {
    const [institutions, setInstitutions] = useState([]);
    const [selectedInstitution, setSelectedInstitution] = useState(null); // Estado para a instituição selecionada
    const cpf = '51033108804'; // Substituir pelo CPF real do estudante logado

    useEffect(() => {
        // Buscar as instituições do estudante
        const fetchInstitutions = async () => {
            try {
                const response = await studentService.getStudentInstitutions(cpf);
                setInstitutions(response);
            } catch (error) {
                console.error('Erro ao buscar instituições:', error);
            }
        };

        fetchInstitutions();
    }, []);

    const handleInstitutionClick = (institution) => {
        setSelectedInstitution(institution); // Define a instituição clicada
    };

    return (
        <div className="student-home">
            {/* Cabeçalho */}
            <header className="header">
                <h1>School Manager</h1>
            </header>
            <div className="main-content">
                {/* Painel central */}
                <div className="content" style={{ position: 'relative' }}>
                    {!selectedInstitution && <h2 className="welcome-message">Bem-vindo!</h2>}
                    {/* Container dos cards de instituições, será ocultado após seleção */}
                    {!selectedInstitution && institutions.length > 0 && (
                        <div className="institutions-container">
                            {institutions.map((institution, index) => (
                                <div 
                                    key={index} 
                                    className="institution-card" 
                                    onClick={() => handleInstitutionClick(institution)} // Ao clicar no card
                                >
                                    <h3>{institution.nameInstitution}</h3>
                                    <p>Telefone: {institution.cellPhone}</p>
                                    <p>Email: {institution.email}</p>
                                    <p>Tipo: {institution.typeOfInstitution}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {/* Menu lateral dentro do painel central, exibido somente quando uma instituição for selecionada */}
                    {selectedInstitution && (
                        <>
                            <div className="institution-menu">
                                <h3>{selectedInstitution.nameInstitution}</h3>
                                <ul>
                                    <li><a href="/notas">Lançar Notas</a></li>
                                    <li><a href="/grades">Grade de Aulas</a></li>
                                    <li><a href="/attendance">Alterar Dados</a></li>
                                    <li><a href="/attendance">Lançar Faltas</a></li>
                                    <li><a href="/attendance">Abertura de Chamado</a></li>
                                </ul>
                            </div>
                            <InstitutionDetails institution={selectedInstitution} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeachertHome;
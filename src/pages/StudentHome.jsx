// src/pages/StudentHome.jsx
import React from 'react';
import '../styles/studentHome.css'; // Para o estilo da página

const StudentHome = () => {
  return (

    <div className="student-home">
      {/* Menu superior */}
      <header className="header">
        <h1>School Maneger</h1>
      </header>
      <div className="main-content">
        {/* Menu lateral */}
        <aside className="sidebar">
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Meus Cursos</a></li>
            <li><a href="#">Minhas Notas</a></li>
            <li><a href="#">Perfil</a></li>
            <li><a href="#">Sair</a></li>
          </ul>
        </aside>

        {/* Conteúdo principal */}
        <div className="content">
          <h2>Bem-vindo, Estudante!</h2>
          <p>Aqui você pode acessar seus cursos, visualizar notas e muito mais.</p>
          {/* Adicione o conteúdo dinâmico aqui */}
        </div>
      </div>
    </div>
  );
};

export default StudentHome;

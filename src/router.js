import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Alterado para importar Routes
import Login from '../src/pages/Login'; // Certifique-se que o caminho está correto
import StudentHome from '../src/pages/StudentHome'; // Certifique-se que o caminho está correto

const AppRouter = () => (
  <Router>
    <Routes>  {/* Usando Routes em vez de Switch */}
      <Route path="/" element={<Login />} />
      <Route path="/student-dashboard" element={<StudentHome />} />
    </Routes>
  </Router>
);

export default AppRouter;

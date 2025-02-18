import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Alterado para importar Routes
import Login from '../src/pages/Login'; // Certifique-se que o caminho está correto
import StudentHome from '../src/pages/StudentHome'; // Certifique-se que o caminho está correto
import TeacherHome from '../src/pages/teacherHome'; // Certifique-se que o caminho está correto
import SecretaryHome from '../src/pages/SecretaryHome'; // Certifique-se que o caminho está correto

const AppRouter = () => (
  <Router>
    <Routes>  {/* Usando Routes em vez de Switch */}
      <Route path="/" element={<Login />} />
      <Route path="/student-home" element={<StudentHome />} />
      <Route path="/teacher-home" element={<TeacherHome />} />
      <Route path="/secretary-home" element={<SecretaryHome />} />
    </Routes>
  </Router>
);

export default AppRouter;

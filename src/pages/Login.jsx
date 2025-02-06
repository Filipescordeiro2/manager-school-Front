import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginService from '../services/LoginService';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const response = await LoginService.login(username, password, role);
      if (response) {
        // Redirecionamento baseado no papel do usuário
        navigate(role === 'student' ? '/student-home' : '/teacher-dashboard');
      }
    } catch (error) {
      if (error.message === 'Network Error') {
        setErrorMessage(<span style={{ color: 'red', fontWeight: 'bold' }}>Em Manutenção - Tente novamente mais tarde</span>);
      } else if (error.response?.data === 'User blocked') {
        setErrorMessage('Contate um admin - Usuário bloqueado');
      } else {
        setErrorMessage('Usuário ou Senha inválidos');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu nome de usuário"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div className="role-selection">
            <label>
              <input
                type="radio"
                value="student"
                checked={role === 'student'}
                onChange={() => setRole('student')}
              />{' '}
              Student
            </label>
            <label>
              <input
                type="radio"
                value="teacher"
                checked={role === 'teacher'}
                onChange={() => setRole('teacher')}
              />{' '}
              Teacher
            </label>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

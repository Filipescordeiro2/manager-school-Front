import axios from 'axios';

// Criar uma instância do axios para facilitar as requisições
const api = axios.create({
  baseURL: 'http://localhost:8080', // Aqui vai a URL do seu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adicionar um interceptor caso precise tratar os erros de forma global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

// Função para fazer login
const login = async (username, password, role) => {
  let url;
  let body;

  // Verificar o role e configurar a URL e o corpo da requisição
  if (role === 'teacher') {
    url = '/teacher/login';
    body = {
      userAccess: username,
      passwordAccess: password,
    };
  } else if (role === 'student') {
    url = '/studant/login';
    body = {
      userAccess: username,
      passwordAccess: password,
    };
  } else {
    throw new Error('Invalid role');
  }

  try {
    const response = await api.post(url, body);
    return response.data; // Retornar os dados da resposta
  } catch (error) {
    throw error;
  }
};

export default { login };

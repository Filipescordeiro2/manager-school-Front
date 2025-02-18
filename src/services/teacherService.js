import axios from 'axios';

// Criar uma instância do axios para facilitar as requisições
const api = axios.create({
  baseURL: 'http://localhost:8080', // URL do backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adicionar um interceptor para tratamento global de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

// Função para obter os dados do estudante logado
const getStudentData = async () => {
  try {
    const response = await api.get('/teacher');
    return response.data; 
  } catch (error) {
    throw error;
  }
};

// Função para obter as instituições vinculadas ao estudante pelo CPF
const getStudentInstitutions = async (cpf) => {
  try {
    const response = await api.get(`/teacher/institution/${cpf}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { getStudentData, getStudentInstitutions };

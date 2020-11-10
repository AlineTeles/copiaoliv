/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import api from './ApiService';

export const listarProduto = async () => {
  const { data } = await api.get('/apiProducts/listar_produtos');
  return data;
};

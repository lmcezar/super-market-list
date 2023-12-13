import { api } from "../api";

export const getList = async () => {
  try {
    const response = await api.get("/list-items");
    return response.data;
  } catch (error) {
    alert("Erro ao buscar dados da API.");
    return { error };
  }
};

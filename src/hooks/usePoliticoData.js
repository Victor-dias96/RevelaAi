// Aqui vai representar o GET para receber todos os políticos

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080";

const fetchData = async ({ queryKey }) => {
  const [_key, pagina, termoBusca] = queryKey;

  const params = {
    pagina: pagina,
    nome: termoBusca || undefined,
  };

  console.log("Parâmetros da requisição: ", params);
  console.log("URL da requisição: ", `${API_URL}/api/deputado`, { params });

  const { data } = await axios.get(`${API_URL}/api/deputado`, { params });
  return data.dados;
};

export function usePoliticoData(pagina, termoBusca) {
  const query = useQuery({
    queryKey: ["politicos-todos", pagina, termoBusca],
    queryFn: fetchData,
    keepPreviousData: true,
  });

  return query;
}

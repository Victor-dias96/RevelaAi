// Aqui vai representar o GET para receber todos os políticos

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080";

const fetchData = async ({ queryKey }) => {
  const [_key, pagina] = queryKey;
  const { data } = await axios.get(`${API_URL}/api/deputado?pagina=${pagina}`);
  return data.dados;
};

export function usePoliticoData(pagina) {
  const query = useQuery({
    queryKey: ["politicos-todos", pagina],
    queryFn: fetchData,
  });

  return query;
}

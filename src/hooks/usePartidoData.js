// Aqui vai representar o GET para receber todos os partidos

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080";

const fetchData = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await axios.get(`${API_URL}/api/partido`);
  return data.dados;
};

export function usePartidoData() {
  const query = useQuery({
    queryKey: ["partidos-todos"],
    queryFn: fetchData,
  });

  return query;
}

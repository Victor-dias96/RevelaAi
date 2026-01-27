// Aqui vai representar o GET para receber todos os partidos

import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const fetchData = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await api.get("/api/partido");
  return data.dados;
};

export function usePartidoData() {
  const query = useQuery({
    queryKey: ["partidos-todos"],
    queryFn: fetchData,
  });

  return query;
}

// Aqui vai representar o GET para receber todos os políticos

import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const fetchData = async ({ queryKey }) => {
  const [_key, pagina, termoBusca, estado] = queryKey;

  const params = {
    pagina: pagina,
    nome: termoBusca || undefined,
    siglaUF: estado || undefined,
  };

  const { data } = await api.get("/api/deputado", { params });
  return data.dados;
};

export function usePoliticoData(pagina, termoBusca, estado) {
  const query = useQuery({
    queryKey: ["politicos-todos", pagina, termoBusca, estado],
    queryFn: fetchData,
    keepPreviousData: true,
  });

  return query;
}

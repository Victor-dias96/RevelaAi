// Aqui vai representar o GET para receber um político por ID

import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const fetchData = async ({ queryKey }) => {
  const [_key, id] = queryKey;
  const { data } = await api.get(`/api/deputado/${id}`);
  return data.dados;
};

export function usePoliticoIDData(id) {
  const query = useQuery({
    queryKey: ["politicos-todos", id],
    queryFn: fetchData,
  });

  return query;
}

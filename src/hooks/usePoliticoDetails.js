// Aqui vai representar o GET para receber um político por ID

import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const fetchData = async ({ queryKey }) => {
  const [_key, id] = queryKey;
  const { data } = await api.get(`/api/deputado/${id}/detalhes-completos`);
  return data;
};

export function usePoliticoDetails(id, options = {}) {
  const query = useQuery({
    queryKey: ["politico-detalhes", id],
    queryFn: fetchData,
    enabled: !!id && (options.enabled !== undefined ? options.enabled : true),
  });

  return query;
}

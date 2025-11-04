// Aqui vai representar o GET para receber todos os políticos

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080";

const fetchData = async () => {
  const { data } = await axios.get(API_URL + "/api/deputado");
  return data.dados;
};

export function usePoliticoData() {
  const query = useQuery({
    queryKey: ["politicos-todos"],
    queryFn: fetchData,
  });

  return query;
}

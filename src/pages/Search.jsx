import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar/SearchBar";
import "./Search.css";
import { usePoliticoData } from "../hooks/usePoliticoData";
import { logoConverterMap } from "../utils/logoConverter";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [numberPage, setNumberPage] = useState(1);
  const [abaAtiva, setAbaAtiva] = useState("politicos");
  const [filtros, setFiltros] = useState({
    termo: "",
    estado: "",
    tema: "",
  });

  useEffect(() => {
    setNumberPage(1);
  }, [filtros, abaAtiva]);

  // Rola a tela para o topo quando a página muda
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [numberPage]);

  // Conexão com a API
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = usePoliticoData(numberPage, filtros.termo, filtros.estado);

  // console.log("Tamanho do array de políticos: ", data.length);

  // Filtro de busca
  const getResultados = () => {
    if (!data) return [];

    if (abaAtiva === "politicos") {
      return data.filter(
        (p) =>
          p.nome.toLowerCase().includes(filtros.termo.toLowerCase()) &&
          (filtros.estado ? p.siglaUf === filtros.estado : true),
      );
      // } else {
      //   return bancoVotacoes.filter(
      //     (v) =>
      //       (v.ementa.toLowerCase().includes(filtros.termo.toLowerCase()) ||
      //         v.num.includes(filtros.termo)) &&
      //       (filtros.tema ? v.tema === filtros.tema : true)
      //   );
      // }
    }
    return [];
  };
  const resultados = getResultados();

  //Funções dos botões da lista
  const handlePreviousButton = () => {
    if (numberPage > 1) {
      setNumberPage((prev) => prev - 1);
    }
  };

  const handleNextButton = () => {
    setNumberPage((prev) => prev + 1);
  };

  return (
    <div className="main-page">
      <section className="search-section">
        <SearchBar
          abaAtiva={abaAtiva}
          setAbaAtiva={setAbaAtiva}
          filtros={filtros}
          setFiltros={setFiltros}
        />
      </section>

      <main className="cards-grid">
        {isLoading ? (
          <span>Carregando políticos...</span>
        ) : isError ? (
          <span>Erro ao buscar dados: {error.message}</span>
        ) : resultados.length > 0 ? (
          resultados.map((item) => {
            const logoUrl =
              logoConverterMap[item.siglaPartido] ||
              logoConverterMap["DEFAULT"];

            return (
              <Link to={`/CandidateProfile/${item.id}`}>
                <Card
                  key={item.id}
                  foto={item.urlFoto}
                  nome={item.nome}
                  cargo={item.cargo}
                  estado={item.siglaUf}
                  partido={item.partido}
                  logoPartido={logoUrl}
                />
              </Link>
            );
          })
        ) : (
          <p className="no-results">Nenhum resultado encontrado.</p>
        )}
      </main>
      <div
        className={`buttons-container ${
          resultados?.length < 24 ? "disabled" : ""
        }`}
      >
        {numberPage > 1 ? (
          <button onClick={handlePreviousButton}>Anterior</button>
        ) : null}
        <p>{numberPage}</p>
        <button onClick={handleNextButton}>Próximo</button>
      </div>
    </div>
  );
};

export default SearchPage;

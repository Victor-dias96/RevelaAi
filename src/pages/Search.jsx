import React, { useState } from "react";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar/SearchBar";
import Header from "../Components/Header";
import "./Search.css";

const bancoPoliticos = [
  {
    id: 1,
    nome: "Áurea Ribeiro",
    cargo: "Deputado Estadual",
    estado: "Sergipe",
    partido: "Republicanos",
    foto: "/images/Aurea-Ribeiro.jpg",
  },
  {
    id: 2,
    nome: "Adailton Martins",
    cargo: "Deputado Federal",
    estado: "Sergipe",
    partido: "PSD",
    foto: "/images/Adailton-Martins.jpg",
  },
  {
    id: 3,
    nome: "Marcos Aurélio",
    cargo: "Senador",
    estado: "Bahia",
    partido: "Republicanos",
    foto: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

const bancoVotacoes = [
  {
    id: 1,
    tipo: "PL",
    num: "1234/24",
    tema: "Educação",
    ementa: "Dispõe sobre o incentivo à cultura digital nas escolas.",
    autor: "Dep. Silva",
    voto: "Sim",
  },
  {
    id: 2,
    tipo: "PEC",
    num: "45/23",
    tema: "Economia",
    ementa: "Altera o sistema tributário nacional.",
    autor: "Governo",
    voto: "Não",
  },
];
import { usePoliticoData } from "../hooks/usePoliticoData";
import { useEffect, useState } from "react";
import { logoConverterMap } from "../utils/logoConverter";

const Search = () => {
  const [numberPage, setNumberPage] = useState(1);

  // Rola a tela para o topo quando a página muda
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [numberPage]);

  const { data, isLoading, isError, error } = usePoliticoData(numberPage);

const SearchPage = () => {
  const [abaAtiva, setAbaAtiva] = useState("politicos");

  const [filtros, setFiltros] = useState({
    termo: "",
    estado: "",
    tema: "",
  });

  const getResultados = () => {
    if (abaAtiva === "politicos") {
      return bancoPoliticos.filter(
        (p) =>
          p.nome.toLowerCase().includes(filtros.termo.toLowerCase()) &&
          (filtros.estado ? p.estado === filtros.estado : true)
      );
    } else {
      return bancoVotacoes.filter(
        (v) =>
          (v.ementa.toLowerCase().includes(filtros.termo.toLowerCase()) ||
            v.num.includes(filtros.termo)) &&
          (filtros.tema ? v.tema === filtros.tema : true)
      );
    }
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
      <Header />

      <section className="search-section">
        <SearchBar
          abaAtiva={abaAtiva}
          setAbaAtiva={setAbaAtiva}
          filtros={filtros}
          setFiltros={setFiltros}
          onSearch={() => console.log("Buscando...")}
        />
      </section>

      <main className="cards-grid">
        {resultados.length > 0 ? (
          resultados.map((item) => (
            <Card key={item.id} politico={item} tipo={abaAtiva} />
          ))
        ) : (
          <p className="no-results">Nenhum resultado encontrado.</p>
        )}
      </main>
    </div>
        <button className="search-button">Buscar</button>
      </div>
      <div className="cards-container">
        {data.map((politico) => {
          const logoUrl = logoConverterMap[politico.siglaPartido] || logoConverterMap['DEFAULT'];

          return (
            <Card
              key={politico.id}
              foto={politico.urlFoto}
              nome={politico.nome}
              cargo={politico.cargo}
              estado={politico.siglaUf}
              partido={politico.partido}
              logoPartido={logoUrl}
            />
          );
        })}

        {/* <Card
          foto="../../public/images/aurea-ribeiro.jpg"
          nome="Áurea Ribeiro"
          cargo="Deputado Estadual"
          estado="Sergipe"
          partido="Republicanos"
          logoPartido="../../public/images/Republicanos.png"
        /> */}
      </div>
      <div className="buttons-container">
        {numberPage > 1 ? (
          <button onClick={handlePreviousButton}>Anterior</button>
        ) : null}
        <p>{numberPage}</p>
        <button onClick={handleNextButton}>Próximo</button>
      </div>
    </>
  );
};

export default SearchPage;

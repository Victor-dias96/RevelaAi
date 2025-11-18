import Header from "../Components/Header";
import Card from "../Components/Card";
import "./Search.css";
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

  if (isLoading) {
    return <span>Carregando políticos...</span>;
  }

  if (isError) {
    return <span>Erro ao buscar dados: {error.message}</span>;
  }

  console.log("Tamanho do array de políticos: ", data.length);

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
    <>
      <Header />
      <div className="search-bar">
        <button className="filterButton-one">O que busca </button>
        <button className="filterButton-two">Estado </button>
        <button className="filterButton-three">Filtro </button>
        <input
          type="text"
          placeholder="Selecione o estado"
          className="search-input"
        />
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

export default Search;

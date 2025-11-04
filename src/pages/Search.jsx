import Header from "../Components/Header";
import Card from "../Components/Card";
import "./Search.css";
import { usePoliticoData } from "../hooks/usePoliticoData";

const Search = () => {
  const { data, isLoading, isError, error } = usePoliticoData();

  if (isLoading) {
    return <span>Carregando políticos...</span>;
  }

  if (isError) {
    return <span>Erro ao buscar dados: {error.message}</span>;
  }

  console.log("Tamanho do array de políticos: ", data.length);

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
        {data.map((politico) => (
          <Card
            key={politico.id}
            foto={politico.urlFoto}
            nome={politico.nome}
            cargo={politico.cargo}
            estado={politico.siglaUf}
            partido={politico.partido}
            logoPartido="../../public/images/PSD.jpg"
          />
        ))}

        {/* <Card
          foto="../../public/images/aurea-ribeiro.jpg"
          nome="Áurea Ribeiro"
          cargo="Deputado Estadual"
          estado="Sergipe"
          partido="Republicanos"
          logoPartido="../../public/images/Republicanos.png"
        /> */}
      </div>
    </>
  );
};

export default Search;

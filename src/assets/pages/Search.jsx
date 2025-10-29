import Header from "../Components/Header";
import Card from "../Components/Card";
import "./Search.css";

const Search = () => {
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
        <Card
          foto="../../public/images/adailton-martins.jpg"
          nome="Adailton Martins"
          cargo="Deputado Estadual"
          estado="Sergipe"
          partido="PSD"
          logoPartido="../../public/images/PSD.jpg"
        />

        <Card
          foto="../../public/images/aurea-ribeiro.jpg"
          nome="Áurea Ribeiro"
          cargo="Deputado Estadual"
          estado="Sergipe"
          partido="Republicanos"
          logoPartido="../../public/images/Republicanos.png"
        />
      </div>
    </>
  );
};

export default Search;

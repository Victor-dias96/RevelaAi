import React, { useState } from "react";
import Header from "../Components/Header";
import Card from "../Components/Card";
import "./Search.css";

const bancoFixoDePoliticos = [
  {
    id: 1,
    foto: "/images/Adailton-Martins.jpg",
    nome: "Áurea Ribeiro",
    cargo: "Deputado Estadual",
    estado: "Sergipe",
    partido: "Republicanos",
    logoPartido: "/images/Republicanos.png",
  },
  {
    id: 2,
    foto: "/images/Adailton-Martins.jpg",
    nome: "Adailton Martins",
    cargo: "Deputado Federal",
    estado: "Sergipe",
    partido: "PSD",
    logoPartido: "/images/PSD.jpg",
  },
  {
    id: 3,
    foto: "/images/Adailton-Martins.jpg",
    nome: "Marcos Aurélio",
    cargo: "Senador",
    estado: "Bahia",
    partido: "Republicanos",
    logoPartido: "/images/Republicanos.png",
  },
  {
    id: 4,
    foto: "/images/Adailton-Martins.jpg",
    nome: "Ana Carolina",
    cargo: "Deputada Estadual",
    estado: "São Paulo",
    partido: "PCdoB",
    logoPartido: "/images/Republicanos.png",
  },
];

const Search = () => {
  const [termoDeBusca, setTermoDeBusca] = useState("");

  const termoBuscaLimpo = termoDeBusca.trim().toLowerCase();

  const politicosFiltrados = bancoFixoDePoliticos.filter((politico) =>
    politico.nome.toLowerCase().includes(termoBuscaLimpo)
  );

  return (
    <>
      <Header />
      <div className="search-bar">
        <button className="filterButton-one">O que busca </button>
        <button className="filterButton-two">Estado </button>
        <button className="filterButton-three">Filtro </button>

        <input
          type="text"
          placeholder="Digite o nome do candidato..."
          className="search-input"
          value={termoDeBusca}
          onChange={(e) => setTermoDeBusca(e.target.value)}
        />
        <button className="search-button">Buscar</button>
      </div>

      <div className="cards-container">
        {politicosFiltrados.length > 0 ? (
          politicosFiltrados.map((politico) => (
            <Card
              key={politico.id}
              foto={politico.foto}
              nome={politico.nome}
              cargo={politico.cargo}
              estado={politico.estado}
              partido={politico.partido}
              logoPartido={politico.logoPartido}
            />
          ))
        ) : (
          <p style={{ color: "white", fontSize: "1.2rem" }}>
            Nenhum político encontrado com esse nome.
          </p>
        )}
      </div>
    </>
  );
};

export default Search;

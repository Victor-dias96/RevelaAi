import React from "react";
import "./SearchBar.css";

const SearchBar = ({
  abaAtiva,
  setAbaAtiva,
  filtros,
  setFiltros,
  onSearch,
}) => {
  // Função genérica para atualizar filtros
  const handleInputChange = (campo, valor) => {
    setFiltros((prev) => ({ ...prev, [campo]: valor }));
  };

  return (
    <div className="search-bar-container">
      {/* Botão Tipo Select: O que busca */}
      <div className="select-wrapper filterButton-one">
        <select
          value={abaAtiva}
          onChange={(e) => setAbaAtiva(e.target.value)}
          className="custom-select"
        >
          <option value="politicos">Políticos</option>
          <option value="votacoes">Votações</option>
        </select>
      </div>

      {/* Botão Tipo Select: Estado (Só aparece em Políticos) */}
      {abaAtiva === "politicos" && (
        <div className="select-wrapper filterButton-two">
          <select
            value={filtros.estado || ""}
            onChange={(e) => handleInputChange("estado", e.target.value)}
            className="custom-select"
          >
            <option value="">Estado (Todos)</option>
            <option value="Sergipe">Sergipe</option>
            <option value="Bahia">Bahia</option>
          </select>
        </div>
      )}

      {/* Botão Tipo Select: Filtro Extra (Ex: Tema para votações) */}
      {abaAtiva === "votacoes" && (
        <div className="select-wrapper filterButton-three">
          <select
            value={filtros.tema || ""}
            onChange={(e) => handleInputChange("tema", e.target.value)}
            className="custom-select"
            style={{ color: "white", background: "transparent" }}
          >
            <option value="" style={{ color: "black" }}>
              Tema (Todos)
            </option>
            <option value="Educação" style={{ color: "black" }}>
              Educação
            </option>
            <option value="Economia" style={{ color: "black" }}>
              Economia
            </option>
            <option value="Saúde" style={{ color: "black" }}>
              Saúde
            </option>
          </select>
        </div>
      )}

      {/* Input de Texto */}
      <input
        type="text"
        className="search-input"
        placeholder={
          abaAtiva === "politicos"
            ? "Digite o nome do candidato..."
            : "Digite o n° ou ementa..."
        }
        value={filtros.termo}
        onChange={(e) => handleInputChange("termo", e.target.value)}
      />

      {/* Botão Buscar */}
      <button className="search-button" onClick={onSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;

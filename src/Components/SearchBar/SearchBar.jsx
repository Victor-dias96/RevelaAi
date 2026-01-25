import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ abaAtiva, setAbaAtiva, filtros, setFiltros }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (campo, valor) => {
    setFiltros((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setFiltros((prev) => ({ ...prev, termo: inputValue }));
    }
  };

  const handleSearchClick = () => {
    setFiltros((prev) => ({ ...prev, termo: inputValue }));
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
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AM">Amazonas</option>
            <option value="AP">Amapá</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="PR">Paraná</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="SC">Santa Catarina</option>
            <option value="SE">Sergipe</option>
            <option value="SP">São Paulo</option>
            <option value="TO">Tocantins</option>
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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Botão Buscar */}
      <button className="search-button" onClick={handleSearchClick}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;

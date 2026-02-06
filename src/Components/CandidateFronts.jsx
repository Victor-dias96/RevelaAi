import CandidateSection from "./CandidateSection";
import "./CandidateDetails.css";
import { usePoliticoDetails } from "../hooks/usePoliticoDetails";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CandidateFronts({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const ITENS_POR_PAGINA = 10;

  const { data, isLoading, isError, error } = usePoliticoDetails(id, {
    enabled: isOpen,
    staleTime: 1000 * 60 * 5,
  });

  let listaCompleta = data?.frentes || [];

  // if (data) {
  //   if (Array.isArray(data)) listaCompleta = data;
  //   else if (Array.isArray(data.frentes)) listaCompleta = data.frentes;
  //   else if (data.dados && Array.isArray(data.dados.frentes))
  //     listaCompleta = data.dados.frentes;
  // }

  // 2. Lógica de Paginação
  const totalPaginas = Math.ceil(listaCompleta.length / ITENS_POR_PAGINA);
  const inicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
  const fim = inicio + ITENS_POR_PAGINA;
  const itensAtuais = listaCompleta.slice(inicio, fim);

  return (
    <CandidateSection
      titulo="Frentes"
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      {isLoading && <div>Carregando frentes...</div>}

      {isError && <div>Erro: {error?.message}</div>}

      {!isLoading && !isError && listaCompleta.length === 0 && (
        <div>Nenhuma frente encontrada para este parlamentar.</div>
      )}

      {!isLoading && !isError && itensAtuais.length > 0 && (
        <>
          {itensAtuais.map((frente) => (
            <div key={frente.id} className="conteudo-detalhes-politico">
              <h3>{frente.titulo}</h3>
            </div>
          ))}

          {totalPaginas > 1 && (
            <div className="paginacao-botoes">
              <button
                disabled={paginaAtual === 1}
                onClick={() => setPaginaAtual((p) => p - 1)}
              >
                <ChevronLeft size={20} />
              </button>
              <span className="pagina-atual">
                {paginaAtual} de {totalPaginas}
              </span>
              <button
                disabled={paginaAtual === totalPaginas}
                onClick={() => setPaginaAtual((p) => p + 1)}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </>
      )}
    </CandidateSection>
  );
}

export default CandidateFronts;

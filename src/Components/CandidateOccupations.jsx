import { useState } from "react";
import { usePoliticoDetails } from "../hooks/usePoliticoDetails";
import CandidateSection from "./CandidateSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CandidateOccupations({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const ITENS_POR_PAGINA = 10;

  const { data, isLoading, isError, error } = usePoliticoDetails(id, {
    enabled: isOpen,
    staleTime: 1000 * 60 * 5,
  });

  let listaCompleta = data?.ocupacoes || [];

  const totalPaginas = Math.ceil(listaCompleta.length / ITENS_POR_PAGINA);
  const inicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
  const fim = inicio + ITENS_POR_PAGINA;
  const itensAtuais = listaCompleta.slice(inicio, fim);

  return (
    <CandidateSection
      titulo="Ocupações"
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      {isLoading && <div>Carregando frentes...</div>}

      {isError && <div>Erro: {error?.message}</div>}

      {!isLoading && !isError && listaCompleta.length === 0 && (
        <div>Nenhuma frente encontrada para este parlamentar.</div>
      )}

      {!isLoading &&
        !isError &&
        itensAtuais.length > 0 &&
        itensAtuais[0].anoInicio && (
          <>
            {itensAtuais.map((ocupacao, index) => (
              <div key={index} className="conteudo-detalhes-politico">
                <h3>{ocupacao.titulo}</h3>
                <div className="detalhes-cinza">
                  <p>
                    {`${ocupacao.anoInicio} - `}
                    {ocupacao.anoFim ? ocupacao.anoFim : "Atual"}
                  </p>
                </div>
                <div className="detalhe-linha">
                  <p className="tipo-info">Entidade:</p>
                  <p>
                    {ocupacao.entidade}{" "}
                    <span>
                      ({ocupacao.entidadeUF}/{ocupacao.entidadePais})
                    </span>
                  </p>
                </div>
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

export default CandidateOccupations;

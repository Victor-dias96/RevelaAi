import { useState } from "react";
import CandidateSection from "./CandidateSection";
import { usePoliticoDetails } from "../hooks/usePoliticoDetails";
import { dateConverterStringToNumber } from "../utils/dateConverter";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CandidateHistory({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const ITENS_POR_PAGINA = 10;

  const { data, isLoading, isError, error } = usePoliticoDetails(id, {
    enabled: isOpen,
    stateTime: (1000 * 60) & 5,
  });

  let listaCompleta = data?.historico || [];

  const totalPaginas = Math.ceil(listaCompleta.length / ITENS_POR_PAGINA);
  const inicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
  const fim = inicio + ITENS_POR_PAGINA;
  const itensAtuais = listaCompleta.slice(inicio, fim);

  return (
    <CandidateSection
      titulo="Histórico"
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
          {itensAtuais.map((historico) => (
            <div className="conteudo-detalhes-politico">
              <h3>{historico.descricaoStatus}</h3>
              <div className="detalhes-cinza">
                <p>{dateConverterStringToNumber(historico.dataHora)}</p>
                {historico.condicaoEleitoral ? (
                  <span className="card-titular">
                    {historico.condicaoEleitoral}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="detalhe-linha">
                <p className="tipo-info">Nome:</p>
                <p>{historico.nome}</p>
              </div>
              <div className="detalhe-linha">
                <p className="tipo-info">Nome eleitoral:</p>
                <p>{historico.nomeEleitoral}</p>
              </div>
              <div className="detalhe-linha">
                <p className="tipo-info">Sigla do Partido:</p>
                <p>{historico.siglaPartido}</p>
              </div>
              <div className="detalhe-linha">
                <p className="tipo-info">Sigla UF:</p>
                <p>{historico.siglaUf}</p>
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

export default CandidateHistory;

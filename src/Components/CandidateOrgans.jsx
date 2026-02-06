import { useState } from "react";
import CandidateSection from "./CandidateSection";
import { usePoliticoDetails } from "../hooks/usePoliticoDetails";
import { dateConverterStringToNumber } from "../utils/dateConverter";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CandidateOrgans({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const ITENS_POR_PAGINA = 10;

  const { data, isLoading, isError, error } = usePoliticoDetails(id, {
    enabled: isOpen,
    stateTime: (1000 * 60) & 5,
  });

  let listaCompleta = data?.orgaos || [];

  const totalPaginas = Math.ceil(listaCompleta.length / ITENS_POR_PAGINA);
  const inicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
  const fim = inicio + ITENS_POR_PAGINA;
  const itensAtuais = listaCompleta.slice(inicio, fim);

  return (
    <CandidateSection
      titulo="Órgãos"
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
          {itensAtuais.map((orgao) => (
            <div key={orgao.idOrgao} className="conteudo-detalhes-politico">
              <h3>{orgao.nomePublicacao}</h3>
              <div className="detalhes-cinza">
                <p>
                  {dateConverterStringToNumber(orgao.dataInicio)} -{" "}
                  {orgao.dataFim
                    ? dateConverterStringToNumber(orgao.dataFim)
                    : "Atual"}
                </p>
              </div>
              <div className="detalhe-linha">
                <p className="tipo-info">Nome do Órgão:</p>
                <p>{orgao.nomeOrgao}</p>
              </div>
              <div className="detalhe-linha">
                <p className="tipo-info">Sigla do Órgão:</p>
                <p>{orgao.siglaOrgao}</p>
              </div>
              <div className="detalhe-linha">
                <p className="tipo-info">Título:</p>
                <p>{orgao.titulo}</p>
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

export default CandidateOrgans;

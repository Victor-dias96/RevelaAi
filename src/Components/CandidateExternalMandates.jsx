import { useState } from "react";
import CandidateSection from "./CandidateSection";
import { usePoliticoDetails } from "../hooks/usePoliticoDetails";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CandidateExternalMandates({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const ITENS_POR_PAGINA = 10;

  const { data, isLoading, isError, error } = usePoliticoDetails(id, {
    enabled: isOpen,
    stateTime: (1000 * 60) & 5,
  });

  let listaCompleta = data?.mandatosExternos || [];

  const totalPaginas = Math.ceil(listaCompleta.length / ITENS_POR_PAGINA);
  const inicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
  const fim = inicio + ITENS_POR_PAGINA;
  const itensAtuais = listaCompleta.slice(inicio, fim);

  return (
    <CandidateSection
      titulo="Mandatos Externos"
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
          {itensAtuais.map((mandatoExterno) => (
            <div className="conteudo-detalhes-politico">
              <h3>{mandatoExterno.cargo}</h3>
              <div className="detalhes-cinza">
                <p>
                  {`${mandatoExterno.anoInicio} - `}
                  {mandatoExterno.anoFim ? mandatoExterno.anoFim : "Atual"}
                </p>
              </div>
              <div className="detalhe-linha">
                <p className="tipo-info">Município:</p>
                <p>
                  {`${mandatoExterno.municipio} `}
                  <span>({mandatoExterno.siglaUf})</span>
                </p>
              </div>
              <div className="detalhe-linha">
                <p className="tipo-info">Partido na eleição:</p>
                <p>{mandatoExterno.siglaPartidoEleicao}</p>
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

export default CandidateExternalMandates;

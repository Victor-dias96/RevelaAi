import CandidateSection from "./CandidateSection";
import "./CandidateDetails.css";
import { useState } from "react";
import { usePoliticoDetails } from "../hooks/usePoliticoDetails";
import { dateConverterStringToNumber } from "../utils/dateConverter";
import { formatterCpfOrCnpj } from "../utils/formatterCpfOrCnpj";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CandidateExpenses({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const ITENS_POR_PAGINA = 10;

  const { data, isLoading, isError, error } = usePoliticoDetails(id, {
    enabled: isOpen,
    stateTime: (1000 * 60) & 5,
  });

  let listaCompleta = data?.despesas || [];

  const totalPaginas = Math.ceil(listaCompleta.length / ITENS_POR_PAGINA);
  const inicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
  const fim = inicio + ITENS_POR_PAGINA;
  const itensAtuais = listaCompleta.slice(inicio, fim);

  return (
    <CandidateSection
      titulo="Despesas"
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
          {itensAtuais.map((despesa) => (
            <div
              key={despesa.codDocumento}
              className="conteudo-detalhes-politico"
            >
              <h3>{despesa.tipoDespesa}</h3>
              <div className="detalhes-cinza">
                <p>{despesa.tipoDocumento}</p>
                <span>|</span>
                <p>cod. documento: {despesa.codDocumento}</p>
                <span>|</span>
                <p>{dateConverterStringToNumber(despesa.dataDocumento)}</p>
              </div>
              <div className="detalhe-linha">
                <p className="tipo-info">Fornecedor:</p>
                <p>{despesa.nomeFornecedor}</p>
              </div>
              <div className="detalhe-linha">
                <p className="tipo-info">CNPJ/CPF do fornecedor:</p>
                <p>{formatterCpfOrCnpj(despesa.cnpjCpfFornecedor)}</p>
              </div>
              <div className="detalhe-linha">
                <p className="tipo-info">Valor:</p>
                <p className="valor-despesa">{`R$ ${despesa.valorLiquido.toFixed(2)}`}</p>
              </div>
              <div className="detalhe-linha">
                <p className="tipo-info">Link do Documento:</p>
                <p>
                  <a href={despesa.urlDocumento} target="_blank">
                    {despesa.urlDocumento}
                  </a>
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

export default CandidateExpenses;

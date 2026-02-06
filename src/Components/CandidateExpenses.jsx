import CandidateSection from "./CandidateSection";
import "./CandidateDetails.css";

function CandidateExpenses({ id }) {
  return (
    <CandidateSection
      titulo="Despesas"
      requestData={() => console.log("Funcionou")}
    >
      <div className="conteudo-detalhes-politico">
        <h3>MANUTENÇÃO DE ESCRITÓRIO DE APOIO À ATIVIDADE PARLAMENTAR</h3>
        <div className="detalhes-cinza">
          <p>Nota Fiscal</p>
          <span>|</span>
          <p>cod. documento: 7977589</p>
          <span>|</span>
          <p>05/08/2025</p>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">Fornecedor:</p>
          <p>AMORETTO CAFES EXPRESSO LTDA</p>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">CNPJ/CPF do fornecedor:</p>
          <p>08.532.429/0001-31</p>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">Valor:</p>
          <p className="valor-despesa">R$ 800,00</p>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">Link do Documento:</p>
          <p>
            <a href="https://www.camara.leg.br/cota-parlamentar/documentos/publ/3308/2025/7977589.pdf">
              https://www.camara.leg.br/cota-parlamentar/documentos/publ/3308/2025/7977589.pdf
            </a>
          </p>
        </div>
      </div>
    </CandidateSection>
  );
}

export default CandidateExpenses;

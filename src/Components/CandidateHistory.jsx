import CandidateSection from "./CandidateSection";

function CandidateHistory({ id }) {
  return (
    <CandidateSection
      titulo="Histórico"
      requestData={() => console.log("Funcionou")}
    >
      <div className="conteudo-detalhes-politico">
        <h3>
          Nome no início da legislatura / Partido no início da legislatura
        </h3>
        <div className="detalhes-cinza">
          <p>01/02/2019</p>
          <span className="card-titular">Titular</span>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">Nome:</p>
          <p>Acácio Favacho</p>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">Nome eleitoral:</p>
          <p>ACÁCIO FAVACHO</p>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">Sigla do Partido:</p>
          <p>PROS</p>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">Sigla UF:</p>
          <p>AP</p>
        </div>
      </div>
    </CandidateSection>
  );
}

export default CandidateHistory;

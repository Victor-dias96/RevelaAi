import CandidateSection from "./CandidateSection";

function CandidateExternalMandates({ id }) {
  return (
    <CandidateSection
      titulo="Mandatos Externos"
      requestData={() => console.log("Funcionou")}
    >
      <div className="conteudo-detalhes-politico">
        <h3>Vereador (a)</h3>
        <div className="detalhes-cinza">
          <p>2009 - 2016</p>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">Município:</p>
          <p>
            Macapá <span>(Amapá)</span>
          </p>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">Partido na eleição:</p>
          <p>PMDB</p>
        </div>
      </div>
    </CandidateSection>
  );
}

export default CandidateExternalMandates;

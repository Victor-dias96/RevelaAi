import CandidateSection from "./CandidateSection";

function CandidateOccupations({ id }) {
  return (
    <CandidateSection
      titulo="Ocupações"
      requestData={() => console.log("Funcionou")}
    >
      <div className="conteudo-detalhes-politico">
        <h3>Conselheira - Membro do Conselho Curador</h3>
        <div className="detalhes-cinza">
          <p>2016 - Atual</p>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">Entidade:</p>
          <p>
            Fundação Julita <span>(SP/Brasil)</span>
          </p>
        </div>
      </div>
    </CandidateSection>
  );
}

export default CandidateOccupations;

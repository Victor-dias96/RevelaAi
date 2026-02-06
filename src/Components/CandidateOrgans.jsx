import CandidateSection from "./CandidateSection";

function CandidateOrgans({ id }) {
  return (
    <CandidateSection
      titulo="Órgãos"
      requestData={() => console.log("Funcionou")}
    >
      <div className="conteudo-detalhes-politico">
        <h3>SECRETARIA DA MULHER</h3>
        <div className="detalhes-cinza">
          <p>04/05/2023 - Atual</p>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">Nome do Órgão:</p>
          <p>Secretaria da Mulher</p>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">Sigla do Órgão:</p>
          <p>SEMULHER</p>
        </div>
        <div className="detalhe-linha">
          <p className="tipo-info">Título:</p>
          <p>Titular</p>
        </div>
      </div>
    </CandidateSection>
  );
}

export default CandidateOrgans;

import { useParams } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import "./CandidateProfile.css";
import { usePoliticoIDData } from "../hooks/usePoliticoIDData";
import { logoConverterMap } from "../utils/logoConverter";
import CandidateExpenses from "../Components/CandidateExpenses";
import CandidateFronts from "../Components/CandidateFronts";
import CandidateHistory from "../Components/CandidateHistory";
import CandidateExternalMandates from "../Components/CandidateExternalMandates";
import CandidateOccupations from "../Components/CandidateOccupations";
import CandidateOrgans from "../Components/CandidateOrgans";

const CandidateProfile = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = usePoliticoIDData(id);

  if (isLoading) {
    return <div>Carregando perfil do candidato...</div>;
  }

  if (isError) {
    return <div>Erro: {error.message}</div>;
  }

  const dadosEspecificos = data.ultimoStatus;
  const logoUrl =
    logoConverterMap[dadosEspecificos.siglaPartido] ||
    logoConverterMap["DEFAULT"];

  return (
    <div className="cp-page">
      <div className="cp-container">
        <main className="cp-main">
          <section className="cp-profile-card">
            <div className="cp-profile-img-container">
              <img
                /* foto da candidato (a) */
                src={dadosEspecificos.urlFoto}
                alt={dadosEspecificos.nome}
              />
            </div>

            <div className="cp-profile-info">
              <div className="cp-profile-header">
                <h1>{dadosEspecificos.nome}</h1>
                <img
                  /* logo do partido */
                  src={logoUrl}
                  alt={dadosEspecificos.siglaPartido}
                  className="cp-psd-logo"
                />
              </div>

              <div className="cp-details-grid">
                <div className="cp-detail-column">
                  <div className="cp-detail-item">
                    <span className="cp-label">Nome Civil</span>
                    <span className="cp-value">{data.nomeCivil}</span>
                  </div>
                  <div className="cp-detail-item">
                    <span className="cp-label">UF</span>
                    <span className="cp-value">{dadosEspecificos.siglaUf}</span>
                  </div>
                </div>

                <div className="cp-detail-column">
                  <div className="cp-detail-item">
                    <span className="cp-label">Situação</span>
                    <span className="cp-value">
                      {dadosEspecificos.situacao}
                    </span>
                  </div>
                  <div className="cp-detail-item">
                    <span className="cp-label">Condição Eleitoral</span>
                    <span className="cp-value">
                      {dadosEspecificos.condicaoEleitoral}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="cp-sections">
            <CandidateExpenses id={id} />
            <CandidateFronts id={id} />
            <CandidateHistory id={id} />
            <CandidateExternalMandates id={id} />
            <CandidateOccupations id={id} />
            <CandidateOrgans id={id} />
          </div>
        </main>

        <aside className="cp-sidebar">
          <div className="cp-party-card">
            <h3>
              Partido Social
              <br />
              Democrata
            </h3>
            <a href="#" className="cp-btn-ver-partido">
              Ver Partido
            </a>
          </div>

          <div className="cp-others-card">
            <div className="cp-others-title">OUTROS DEPUTADOS</div>
            <div className="cp-deputy-list">
              {[
                "Fabio Reis",
                "Maisa Mitidieri",
                "Luciano Bispo",
                "Jeferson Andrade",
                "Adailton Martins",
                "Manuel Marcos",
              ].map((name) => (
                <div key={name} className="cp-deputy-list-item">
                  <span>{name}</span>
                  <ChevronRight size={16} />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CandidateProfile;

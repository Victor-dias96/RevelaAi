import { useState } from "react";
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

const CandidateSection = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`cp-section-wrapper ${isOpen ? "cp-section-open" : ""}`}>
      <div className="cp-section-item" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <ChevronDown
          size={20}
          className={`cp-chevron ${isOpen ? "cp-chevron-rotated" : ""}`}
        />
      </div>
      <div
        className={`cp-section-content ${isOpen ? "cp-section-content-open" : ""}`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

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

              <div className="cp-social-icons">
                <a href="#" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </section>

          <div className="cp-sections">
            <CandidateSection
              title="Despesas"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <CandidateSection
              title="Frentes"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            />
            <CandidateSection
              title="Histórico"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            />
            <CandidateSection
              title="Mandatos Externos"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            />
            <CandidateSection
              title="Ocupações"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore."
            />
            <CandidateSection
              title="Mesa"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
            />
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

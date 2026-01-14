import './CandidateProfile.css';
import { ChevronRight, Facebook, Instagram, Youtube } from 'lucide-react';

const CandidatePhoto = './Profile_image.png';
const CandidatePartidoLogo = './PSD.jpg';
const CandidateSection = ({ title }) => {
  return (
    <div className="cp-section-item">
      <span>{title}</span>
      <ChevronRight size={20} />
    </div>
  );
};

const CandidateProfile = () => {
  return (
    <div className="cp-page">
      <div className="cp-container">
        <main className="cp-main">
          <section className="cp-profile-card">
            <div className="cp-profile-img-container">
              <img src={CandidatePhoto} alt="Delegada Katarina" />
            </div>

            <div className="cp-profile-info">
              <div className="cp-profile-header">
                <h1>Delegada Katarina</h1>
                <img
                  src={CandidatePartidoLogo}
                  className="cp-psd-logo"
                  alt="PSD 55"
                />
              </div>

              <div className="cp-details-grid">
                <div className="cp-detail-column">
                  <div className="cp-detail-item">
                    <span className="cp-label">Nome Civil</span>
                    <span className="cp-value">
                      Katarina Feitoza Lima Santana
                    </span>
                  </div>
                  <div className="cp-detail-item">
                    <span className="cp-label">UF</span>
                    <span className="cp-value">SE</span>
                  </div>
                </div>

                <div className="cp-detail-column">
                  <div className="cp-detail-item">
                    <span className="cp-label">Situação</span>
                    <span className="cp-value">Exercício</span>
                  </div>
                  <div className="cp-detail-item">
                    <span className="cp-label">Condição Eleitoral</span>
                    <span className="cp-value">Titular</span>
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
            <CandidateSection title="Despesas" />
            <CandidateSection title="Frentes" />
            <CandidateSection title="Histórico" />
            <CandidateSection title="Mandatos Externos" />
            <CandidateSection title="Ocupações" />
            <CandidateSection title="Mesa" />
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
                'Fabio Reis',
                'Maisa Mitidieri',
                'Luciano Bispo',
                'Jeferson Andrade',
                'Adailton Martins',
                'Manuel Marcos',
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

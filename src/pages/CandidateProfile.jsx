import Header from "../Components/Header.jsx";
import "./CandidateProfile.css";

const CandidateProfile = () => {
  return (
    <>
    <Header />
    <div className="container">
      <main>
        <section className="profile-card">
          <div className="profile-img-container">
            <img
              src="/images/Delegada Katarina.jpg"
              alt="Delegada Katarina"
            />
          </div>

          <div className="profile-info">
            <h1>Delegada Katarina</h1>

            <div className="details-grid">
              <div className="detail-item">
                <span className="label">Nome Civil</span>
                <span className="value">
                  Katarina Feitoza Lima Santana
                </span>

                <span className="label">UF</span>
                <span className="value">SE</span>
              </div>

              <div className="detail-item">
                <span className="label">Situação</span>
                <span className="value">Exercício</span>

                <span className="label">Condição Eleitoral</span>
                <span className="value">Titular</span>
              </div>
            </div>

            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <img
            src="/images/PSD Logo.png"
            className="psd-logo"
            alt="PSD 55"
          />
        </section>

        <nav className="categories-list">
          {[
            "Despesas",
            "Frentes",
            "Histórico",
            "Mandatos Externos",
            "Ocupações",
            "Mesa",
          ].map((item) => (
            <a href="#" className="cat-item" key={item}>
              {item}
              <i className="fas fa-chevron-right"></i>
            </a>
          ))}
        </nav>
      </main>

      <aside className="sidebar">
        <div className="party-card">
          <h3>
            Partido Social <br /> Democrata
          </h3>
          <a href="#" className="btn-ver-partido">
            Ver Partido
          </a>
        </div>

        <div className="others-card">
          <div className="others-title">Outros Deputados</div>

          <div className="deputy-list">
            {[
              "Fabio Reis",
              "Maisa Mitidieri",
              "Luciano Bispo",
              "Jeferson Andrade",
              "Adailton Martins",
              "Manuel Marcos",
            ].map((name) => (
              <div className="deputy-list-item" key={name}>
                {name}
                <i className="fas fa-chevron-right"></i>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
    </>
  );
}



export default CandidateProfile;
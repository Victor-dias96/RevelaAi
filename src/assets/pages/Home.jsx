import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <section className="flagSection">
          <img src="/images/Brasil.webp" alt="Bandeira do Brasil" />
          <p>
            Podemos mudar o nosso cenário quando começamos a conhecer melhor
            aqueles a quem damos poder!
          </p>
        </section>
        <button className="btnPrincipal">Fazer a Diferença</button>
      </main>
      <Footer />
    </>
  );
};

export default Home;

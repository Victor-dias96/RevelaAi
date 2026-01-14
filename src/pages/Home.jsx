import { useNavigate } from 'react-router-dom';

import Footer from '../Components/Footer.jsx';
import './Home.css';

const Home = ({ flagImage, message, buttonText }) => {
  const navigate = useNavigate(); // Hook para navegação

  const onNavigateToSearch = () => {
    navigate('/search'); //Caminho da rota
  };

  const partidosData = [
    { id: 1, nome: 'Avante', logo: '/images/AVANTE.png' },
    { id: 2, nome: 'PCdoB', logo: '/images/PCdoB.png' },
    { id: 3, nome: 'PDT', logo: '/images/PDT.png' },
    { id: 4, nome: 'Podemos', logo: '/images/podemos-scaled.jpg' },
    {
      id: 5,
      nome: 'Progressistas',
      logo: '/images/LOGO-PROGRESSISTAS-BRANCO.png',
    },
    { id: 6, nome: 'PT', logo: '/images/PT.jpg' },
    { id: 7, nome: 'PSD', logo: '/images/PSD.jpg' },
    { id: 8, nome: 'PSDB', logo: '/images/PSDB.webp' },
  ];

  return (
    <>
      <main className="main">
        <section className="flagSection">
          <img src={flagImage} alt="Bandeira do Brasil" />
          <p>{message}</p>
        </section>
        <button onClick={onNavigateToSearch} className="btnPrincipal">
          {buttonText}
        </button>
      </main>
      <Footer message="Informe-se vendo os partidos" partidos={partidosData} />
    </>
  );
};

export default Home;

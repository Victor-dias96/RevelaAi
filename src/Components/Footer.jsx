import { useRef } from "react";
import { logoConverterMap } from "../utils/logoConverter";
import chevron from "../assets/right-thin-chevron.svg";
import "./Footer.css";

const Footer = ({ message, partidos }) => {
  const carrossel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();

    carrossel.current.scrollLeft -= carrossel.current.offsetWidth * 0.8;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carrossel.current.scrollLeft += carrossel.current.offsetWidth * 0.8;
  };

  return (
    <footer className="footer">
      <p>{message}</p>
      <div className="partidos" ref={carrossel}>
        {partidos.map((partido) => {
          const logoUrl =
            logoConverterMap[partido.sigla] || logoConverterMap["DEFAULT"];

          return <img key={partido.id} src={logoUrl} alt={partido.nome} />;
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src={chevron} alt="Ir para esquerda" />
        </button>
        <button onClick={handleRightClick}>
          <img src={chevron} alt="Ir para direita" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

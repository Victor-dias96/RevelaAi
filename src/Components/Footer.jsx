import { logoConverterMap } from "../utils/logoConverter";
import "./Footer.css";

const Footer = ({ message, partidos }) => {
  return (
    <footer className="footer">
      <p>{message}</p>
      <div className="partidos">
        {partidos.map((partido) => {
          const logoUrl =
            logoConverterMap[partido.sigla] || logoConverterMap["DEFAULT"];

          return <img key={partido.id} src={logoUrl} alt={partido.nome} />;
        })}
      </div>
    </footer>
  );
};

export default Footer;

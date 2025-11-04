import "./Footer.css";

const Footer = ({ message, partidos }) => {
  return (
    <footer className="footer">
      <p>{message}</p>
      <div className="partidos">
        {partidos.map((partido) => (
          <img key={partido.id} src={partido.logo} alt={partido.nome} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;

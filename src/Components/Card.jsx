import './Card.css';

const Card = ({ foto, nome, cargo, estado, partido, logoPartido }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={foto} alt={nome} className="profile-image" />
      </div>
      <div className="card-content">
        <h3 className="name">{nome}</h3>
        <p className="position">{cargo}</p>
        <p className="state">{estado}</p>
        <div className="party">
          <img src={logoPartido} alt={partido} className="party-logo" />
        </div>
      </div>
    </div>
  );
};

export default Card;
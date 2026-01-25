import "./Card.css";

const Card = ({
  foto,
  nome,
  cargo,
  estado,
  partido,
  logoPartido,
  /*politico, 
  tipo*/
}) => {
  // // Se for card de Votação (PL/PEC), renderiza um layout simples por enquanto
  // if (tipo === "votacoes") {
  //   return (
  //     <div className="card-votacao">
  //       <h3>
  //         {politico.tipo} {politico.num}
  //       </h3>
  //       <span className={`badge ${politico.tema.toLowerCase()}`}>
  //         {politico.tema}
  //       </span>
  //       <p>"{politico.ementa}"</p>
  //       <div
  //         className={`voto-badge ${
  //           politico.voto === "Sim" ? "voto-sim" : "voto-nao"
  //         }`}
  //       >
  //         VOTO: {politico.voto.toUpperCase()}
  //       </div>
  //     </div>
  //   );
  // }

  // --- LÓGICA DO CARD DE POLÍTICO ---

  //  ----------------[APAGAR]----------------
  // // Mapeamento exato baseado no seu print da pasta images
  // const logosPartidos = {
  //   REPUBLICANOS: "/images/Republicanos.png",
  //   PSD: "/images/PSD.jpg",
  //   PT: "/images/PT.jpg",
  //   PL: "/images/PL.png", // Exemplo
  //   PP: "/images/LOGO-PROGRESSISTAS-BRANCO.png",
  //   PDT: "/images/PDT.png",
  //   PCDOB: "/images/PCdoB.png",
  //   AVANTE: "/images/AVANTE.png",
  //   PSDB: "/images/PSDB.webp",
  // };

  // const partidoKey = politico.partido ? politico.partido.toUpperCase() : "";
  // const logoPartido = logosPartidos[partidoKey];
  // ----------------------------------------

  return (
    // <div className="card-politico">
    //   {/* Arco Cinza no Topo */}
    //   <div className="card-header-arc"></div>

    //   <div className="card-content">
    //     {/* Foto com Borda Branca */}
    //     <div className="avatar-wrapper">
    //       <img
    //         src={politico.foto}
    //         alt={politico.nome}
    //         className="avatar-img"
    //         onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
    //       />
    //     </div>

    //     <h3 className="nome">{politico.nome}</h3>
    //     <p className="cargo">{politico.cargo}</p>
    //     <p className="estado">{politico.estado}</p>

    //     {/* Logo do Partido ou Nome em Texto */}
    //     <div className="partido-container">
    //       {logoPartido ? (
    //         <img
    //           src={logoPartido}
    //           alt={politico.partido}
    //           className="logo-img"
    //         />
    //       ) : (
    //         <span className="partido-text">{politico.partido}</span>
    //       )}
    //     </div>
    //   </div>
    // </div>

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

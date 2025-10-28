import React from "react"; // Boa prática adicionar
import "./Footer.css"; // CORRIGIDO: Importa o arquivo .css normal

const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="rodape-container">
        <p>&copy; {anoAtual} RevelaAi. Todos os direitos reservados.</p>

        <div className="rodape-links">
          <a href="#">Sobre Nós</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

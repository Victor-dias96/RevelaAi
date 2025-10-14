import "./Header.module.css";

const Header = () => {
  return (
    <header className="cabecalho">
      <div className="navegacao-container">
        <button className="botao-menu">
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <h1 className="logo">RevalaAi</h1>

        <a href="#" className="botao-apoie">
          Apoie
        </a>
      </div>
    </header>
  );
};

export default Header;

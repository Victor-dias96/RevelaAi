import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="menuIcon" onClick={() => setIsOpen(true)}>
          ☰
        </div>

        <h1 className="logo">RevelaAi</h1>

        <button className="supportBtn">Apoie</button>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebarHeader">
          <span>Menu</span>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <nav className="sidebarNav">
          <a href="/">Home</a>
          <a href="/search">Buscar</a>
          <a href="/candidateProfile">Página do Candidato</a>
          
        </nav>
      </aside>
    </>
  );
}

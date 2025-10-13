import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="aplicacao-container">
      <Header />

      {}
      <main className="conteudo-principal">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;

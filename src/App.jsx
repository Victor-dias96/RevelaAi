import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              flagImage="/images/Brasil.webp"
              message="Podemos mudar o nosso cenário quando começamos a conhecer melhor aqueles a quem damos poder!"
              buttonText="Fazer a Diferença"
            />
          }
        />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;

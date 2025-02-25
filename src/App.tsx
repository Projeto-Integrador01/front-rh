import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"; // Fechar a importação corretamente
import Home from "./pages/Home"; // Certifique-se que o caminho está correto
import Footer from "./components/footer/Footer"; // Importando o Footer
import Colaborador from "./pages/Colaborador";
import Grupo from "./pages/Grupo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-200">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/colaborador" element={<Colaborador />} />
          <Route path="/sobre" element={<Grupo />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

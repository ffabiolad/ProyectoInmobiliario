import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Registro from "./pages/Registro"; 
import Comprar from "./pages/Comprar"; 
import Login from "./pages/Login"; 
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/comprar" element={<Comprar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/servicios" element={<Servicios />} />
            {/* otras rutas  */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
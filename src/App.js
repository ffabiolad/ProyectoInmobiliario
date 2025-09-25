import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Registro from "./pages/Registro"; 
import Comprar from "./pages/Comprar"; 
import Vender from "./pages/Vender";
import Login from "./pages/Login"; 
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header onLoginClick={() => setShowLogin(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/comprar" element={<Comprar />} />
            <Route path="/vender" element={<Vender />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/servicios" element={<Servicios />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Popup de Login */}
        {showLogin && <Login onClose={() => setShowLogin(false)} />}
      </div>
    </Router>
  );
}

export default App;
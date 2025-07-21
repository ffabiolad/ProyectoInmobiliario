import "../index.css";
import Logo from '../assets/logoHG.png';
import { Link } from "react-router-dom"; 

const Header = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-8 py-4 border-b">
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="HauzGo Logo" className="h-10 mr-2" />
          </Link>
        </div>
        <div className="hidden md:flex gap-6 text-base font-medium">
          <Link to="/comprar" className="hover:text-hauzgo-500 transition">
            Comprar
          </Link>
          <Link to="/vender" className="hover:text-hauzgo-500 transition">
            Vender
          </Link>
          <Link to="/rentar" className="hover:text-hauzgo-500 transition">
            Rentar
          </Link>
          <Link to="/servicios" className="hover:text-hauzgo-500 transition">
            Servicios
          </Link>
          <Link to="/contacto" className="hover:text-hauzgo-500 transition">
            Contacto
          </Link>
        </div>

        <div className="flex items-center gap-3 text-base">
          <Link to="/login" className="text-hauzgo-500 hover:text-hauzgo-600 transition">
            Entrar
          </Link>
          <Link to="/registro" className="text-hauzgo-500 hover:text-hauzgo-600 transition">
            Registrarse
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
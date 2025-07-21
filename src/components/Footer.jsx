import "../index.css";
import Logo from '../assets/logoHG.png';
import { FaFacebookF, FaXTwitter, FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="font-sans">
      
        {/* Pie de página */}
              <footer className="bg-white text-neutral-700 px-6 py-12 text-sm border-t">
              <div className="max-w-6xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  {/* Logo */}
                  <img
                    src={Logo}
                    alt="HauzGo Logo"
                    className="h-10 mr-2"
                  />
                  {/* Social Media Icons */}
                  <div className="flex gap-4 text-green-700 text-lg">
                    <a href="#" className="p-2 rounded-full border border-green-700 hover:bg-green-700 hover:text-white transition">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="p-2 rounded-full border border-green-700 hover:bg-green-700 hover:text-white transition">
                      <FaXTwitter />
                    </a>
                    <a href="#" className="p-2 rounded-full border border-green-700 hover:bg-green-700 hover:text-white transition">
                      <FaInstagram />
                    </a>
                    <a href="#" className="p-2 rounded-full border border-green-700 hover:bg-green-700 hover:text-white transition">
                      <FaPinterestP />
                    </a>
                    <a href="#" className="p-2 rounded-full border border-green-700 hover:bg-green-700 hover:text-white transition">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                {/* Disclaimer */}
                <p className="text-justify text-xs leading-relaxed">
                  La información mostrada es exclusivamente para uso personal y no comercial de los consumidores. HauzGo es una inmobiliaria en desarrollo en Aguascalientes, Ags. y trabaja para proporcionar datos confiables, aunque no se garantiza su exactitud. Recomendamos verificar cualquier información antes de tomar decisiones de compra. Derechos reservados © 2025 HauzGo. 
                  Estamos comprometidos con la accesibilidad y la mejora continua de nuestra plataforma para todos. 
                  Agradecemos tus comentarios y sugerencias.
                </p>
              </div>
            </footer>

    </div>
  );
};


export default Footer;
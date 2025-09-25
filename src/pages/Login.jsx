import { useState } from "react";
import Logo from '../assets/logoHG.png';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de autenticación va ir aquí
    console.log("Logging in with:", { email, password });
  };

  return (
    <>
      {/* Fondo difuminado */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" onClick={onClose}></div>
      
      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md relative">
          {/* Botón de cerrar */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <span className="material-icons">close</span>
          </button>
          
            <div className="flex items-center">
            {/* Logo */}
            <img src={Logo} alt="HauzGo Logo" className="h-10 mr-2" />
            </div>
            
          <div className="text-center mb-6">
            <div className="bg-hauzgo-500 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
              <span className="material-icons text-white text-3xl">login</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Iniciar sesión</h2>
            <p className="text-gray-500 text-sm mt-1">Accede a tu cuenta</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hauzgo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hauzgo-500"
              />
            </div>

            <button
              type="submit"
              className="bg-hauzgo-500 hover:bg-hauzgo-600 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Entrar
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            ¿No tienes una cuenta?{" "}
            <a href="#" className="text-hauzgo-500 font-medium hover:underline">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
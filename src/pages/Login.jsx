import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de autenticación va ir aquí
    console.log("Logging in with:", { email, password });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
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
    </section>
  );
};

export default Login;
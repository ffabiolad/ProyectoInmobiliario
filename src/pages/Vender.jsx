import { useState } from "react";

const SellPage = () => {
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [squareFeet, setSquareFeet] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica para enviar datos de la propiedad
    console.log("Property details:", { 
      address, propertyType, bedrooms, 
      bathrooms, squareFeet, email, phone 
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="bg-hauzgo-500 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
            <span className="material-icons text-white text-3xl">real_estate_agent</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Vende tu propiedad con HauzGo</h1>
          <p className="text-gray-500 text-lg mt-2">
            Completa el formulario y un asesor se pondrá en contacto contigo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">¿Por qué vender con nosotros?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="material-icons text-hauzgo-500 mr-2">check_circle</span>
                <span className="text-gray-700">Alcance nacional a compradores calificados</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-hauzgo-500 mr-2">check_circle</span>
                <span className="text-gray-700">Agentes expertos en tu localidad</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-hauzgo-500 mr-2">check_circle</span>
                <span className="text-gray-700">Tecnología avanzada para maximizar tu precio de venta</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-hauzgo-500 mr-2">check_circle</span>
                <span className="text-gray-700">Proceso transparente y sin complicaciones</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons text-hauzgo-500 mr-2">check_circle</span>
                <span className="text-gray-700">Comisión competitiva</span>
              </li>
            </ul>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-3">¿Necesitas ayuda?</h3>
              <p className="text-gray-600 mb-4">
                Nuestros expertos están disponibles para responder tus preguntas.
              </p>
              <button className="flex items-center text-hauzgo-500 font-medium">
                <span className="material-icons mr-2">phone</span>
                Hablar con un asesor
              </button>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dirección de la propiedad
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hauzgo-500"
                  placeholder="Ej. Calle 123, Ciudad"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de propiedad
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hauzgo-500"
                  >
                    <option value="">Seleccionar</option>
                    <option value="casa">Casa</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="terreno">Terreno</option>
                    <option value="comercial">Local Comercial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Habitaciones
                  </label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hauzgo-500"
                  >
                    <option value="">Seleccionar</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Baños
                  </label>
                  <select
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hauzgo-500"
                  >
                    <option value="">Seleccionar</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Metros cuadrados
                  </label>
                  <input
                    type="number"
                    value={squareFeet}
                    onChange={(e) => setSquareFeet(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hauzgo-500"
                    placeholder="Ej. 120"
                  />
                </div>
              </div>

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
                  Teléfono
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hauzgo-500"
                />
              </div>

              <button
                type="submit"
                className="bg-hauzgo-500 hover:bg-hauzgo-600 text-white font-semibold py-3 rounded-lg transition duration-200 text-lg"
              >
                Recibir oferta ahora
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              Al enviar este formulario, aceptas nuestros <a href="#" className="text-hauzgo-500">Términos de Servicio</a> y 
              nuestra <a href="#" className="text-hauzgo-500">Política de Privacidad</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellPage;
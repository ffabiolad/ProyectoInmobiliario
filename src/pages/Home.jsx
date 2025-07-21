import React from "react";
import "../index.css";

function Home() {
  return (
    <div className="font-sans">
     
      {/* ******************************************** */}

      {/* Hero */}
      <header
        className="relative bg-cover bg-center text-white"
        style={{backgroundImage:"url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80')",}}>
        <div className="bg-black bg-opacity-40 px-6 py-20 text-center">

          <h1 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">
            Acompañamos tu viaje a casa, estés donde estés.
          </h1>

          {/* Botones */}
          <div className="mt-6 flex justify-center flex-wrap gap-4">
            <button className="bg-hauzgo-500 hover:bg-hauzgo-600 text-white px-4 py-2 rounded-md transition">
              Comprar una casa
            </button>
            <button className="bg-hauzgo-100 hover:bg-hauzgo-200 text-black px-4 py-2 rounded-md transition">
              Vender mi casa
            </button>
            <button className="bg-hauzgo-100 hover:bg-hauzgo-200 text-black px-4 py-2 rounded-md transition">
              Valoración de vivienda
            </button>
          </div>

          {/* Buscador con icono de lupa */}
          <div className="mt-6 max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Ciudad, Código Postal, Escuela, Dirección..."
              className="w-full px-4 py-3 pr-10 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-hauzgo-500"/>
            
            {/* Icono de lupa */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"/>
              </svg>
            </div>

          </div>
        </div>
      </header>

      {/* ******************************************** */}

      {/* 3 Secciones inferiores a Hero */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8 py-16 text-center">
        <div className="p-6 hover:shadow-lg transition rounded-lg">
          <h3 className="text-lg font-semibold border-b-4 border-hauzgo-500 inline-block mb-2">
            Comprar una casa
          </h3>
          <p className="text-sm mb-4">
            Búsqueda personalizada, información inteligente y agentes expertos a
            tu alcance.
          </p>
          <button className="bg-hauzgo-500 hover:bg-hauzgo-600 text-white px-4 py-2 rounded-full transition">
            Explorar casas
          </button>
        </div>
        <div className="p-6 hover:shadow-lg transition rounded-lg">
          <h3 className="text-lg font-semibold border-b-4 border-hauzgo-500 inline-block mb-2">
            Vende tu casa
          </h3>
          <p className="text-sm mb-4">
            Agentes expertos y herramientas inteligentes para ayudarte a vender
            más rápido y de forma más inteligente.
          </p>
          <button className="border border-gray-400 hover:bg-gray-100 px-4 py-2 rounded-full transition">
            Conéctate
          </button>
        </div>
        <div className="p-6 hover:shadow-lg transition rounded-lg">
          <h3 className="text-lg font-semibold border-b-4 border-hauzgo-500 inline-block mb-2">
            Obtener financiamiento
          </h3>
          <p className="text-sm mb-4">
            Herramientas financieras y prestamistas para obtener una aprobación
            previa rápidamente.
          </p>
          <button className="border border-gray-400 hover:bg-gray-100 px-4 py-2 rounded-full transition">
            Obtener aprobación previa
          </button>
        </div>
      </section>


      {/* ******************************************** */}


      {/* 2 Tarjetas */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* contenido de las tarjetas */}
          {[
            {
              title: "Expertos en tu búsqueda inmobiliaria",
              text: "Nuestros especialistas de HauzGo te guiarán para encontrar la propiedad ideal, negociando los mejores términos y acompañándote en cada paso de la transacción.",
              button: "Habla con un experto",
              img: "https://www.nocnok.com/hubfs/Agente.jpg",
            },
            {
              title: "Alertas exclusivas para ti",
              text: "Configura tus preferencias y recibe novedades de propiedades que se ajusten exactamente a lo que buscas, antes que salgan al mercado general.",
              button: "Activar alertas",
              img: "https://media.istockphoto.com/id/1365865879/es/foto/cara-feliz-en-la-playa.jpg?s=612x612&w=0&k=20&c=Xrsq6Z373Na_P4ocnvQVKhncRNhuJdA2zr-9JDyLvaQ=",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="relative text-white rounded-2xl overflow-hidden w-full h-[28rem] md:h-80 bg-hauzgo-500"
            >
              <div className="absolute inset-0 flex flex-col md:flex-row">
                {/* Imagen con degradado */}
                <div className="relative h-1/2 md:h-full md:w-1/2">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute h-full w-full object-cover object-center"/>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-hauzgo-500 md:bg-gradient-to-r md:from-transparent md:via-transparent md:via-80% md:to-hauzgo-500"></div>
                </div>

                {/* Contenido */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center z-10 bg-hauzgo-500">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base mb-4">{card.text}</p>
                  <button className="self-start border border-white hover:bg-white hover:text-hauzgo-500 text-white px-4 py-2 rounded-full transition">
                    {card.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ******************************************** */}

      {/* Sección de contacto con formulario */}
      <section className="bg-hauzgo-50 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Texto introductorio */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Descubre cómo podemos hacer realidad tu proyecto inmobiliario
            </h2>
            <p className="text-gray-700">
              Nuestros asesores certificados están listos para orientarte
              personalmente, ya sea que busques comprar, vender o invertir en
              propiedades.
            </p>
          </div>

          {/* Formulario de contacto */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre(s)"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hauzgo-500"
              />
              <input
                type="text"
                placeholder="Apellidos"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hauzgo-500"
              />
            </div>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hauzgo-500"
            />
            <input
              type="tel"
              placeholder="Teléfono de contacto"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hauzgo-500"
            />
            <select className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hauzgo-500 text-gray-500">
              <option value="">¿En qué podemos ayudarte?</option>
              <option value="compra">Quiero comprar una propiedad</option>
              <option value="venta">Deseo vender mi propiedad</option>
              <option value="asesoria">Necesito asesoría especializada</option>
            </select>
            <p className="text-xs text-gray-600">
              Al contactarnos, aceptas nuestra política de privacidad y recibir
              información relevante sobre servicios inmobiliarios.
            </p>
            <button
              type="submit"
              className="bg-hauzgo-500 hover:bg-hauzgo-600 text-white px-6 py-3 rounded-full transition w-full font-medium"
            >
              Recibir asesoría gratuita
            </button>
          </form>
        </div>
      </section>

      {/* ******************************************** */}

      {/* Listado de bienes raíces por estado */}
      <section className="px-6 md:px-16 py-16">
        <h2 className="text-xl font-bold mb-2">
          HauzGo listados de bienes raíces
        </h2>
        <h3 className="text-lg font-semibold text-gray-700 mb-6">
          Casas en venta por estado
        </h3>

        {/* Lista de estados */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-sm text-gray-700 mb-4">
          {[
            "Aguascalientes",
            "Jalisco",
            "Ciudad de México",
            "Morelos",
            "Zacatecas",
            "Tamaulipas",
            "Nuevo León",
            "Coahuila",
            "Chihuahua",
            "Quintana Roo",
            "Estado de México",
            "Colima",
            "Sinaloa",
            "Baja California",
            "Tabasco",
            "Oaxaca",
            "Chiapas",
            "Sonora",
            "Campeche",
            "Baja California Sur",
            "Veracruz",
          ].map((estado, index) => (
            <span key={index} className="hover:underline cursor-pointer">
              {estado}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="text-hauzgo-500 font-medium text-sm hover:underline"
        >
          Ver todo
        </a>
      </section>

      {/* ******************************************** */}

      {/* Tarjetas de recursos */}
      <section className="px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          {
            title: "Guía de vecindarios",
            desc: "Todo lo que necesitas saber sobre los vecindarios.",
            link: "Ver guías",
            icon: "map",
          },
          {
            title: "Tendencias del mercado",
            desc: "Explora cómo varían las tendencias de un mercado a otro.",
            link: "Ver tendencias",
            icon: "bar_chart",
          },
          {
            title: "Escuelas",
            desc: "Encuentra áreas con los mejores distritos y escuelas.",
            link: "Ver escuelas",
            icon: "school",
          },
          {
            title: "Consejos inmobiliarios",
            desc: "Descubre todos los consejos, trucos y guías sobre bienes raíces.",
            link: "Ver consejos",
            icon: "tips_and_updates",
          },
        ].map((card, idx) => (
          <div key={idx} className="border rounded-xl p-6 flex flex-col gap-2">
            <span className="material-icons text-hauzgo-500 text-3xl">
              {card.icon}
            </span>
            <h4 className="font-semibold">{card.title}</h4>
            <p className="text-sm text-gray-600">{card.desc}</p>
            <a
              href="#"
              className="text-hauzgo-500 text-sm font-medium hover:underline"
            >
              {card.link} →
            </a>
          </div>
        ))}
      </section>

      {/* ******************************************** */}

     {/* Card de acceso a propiedades exclusivas */}
      <section className="max-w-6xl mx-auto my-16 px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Imagen de fondo */}
          <div className="relative h-80 sm:h-96 md:h-[28rem]">
            <img
              src="https://edifica.com.pe/blog/wp-content/uploads/agente-inmobiliario-correcto.jpg"
              alt="Asesor inmobiliario mostrando propiedades"
              className="w-full h-full object-cover object-center"
            />

            {/* Barra verde diagonal */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-hauzgo-500 transform -skew-y-3 origin-left" />

            {/* Contenido superpuesto */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 w-full max-w-2xl rounded-xl shadow-lg border border-white/20">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center sm:text-left">
                  Descubre propiedades{" "}
                  <span className="text-hauzgo-500">exclusivas</span> antes que nadie
                </h2>

                <p className="text-gray-600 mb-6 text-base sm:text-lg text-center sm:text-left">
                  Accede a nuestro portafolio premium de viviendas no listadas públicamente.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                  <a
                    href="tel:+524491234567"
                    className="flex items-center justify-center gap-2 bg-hauzgo-500 hover:bg-hauzgo-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Llamar ahora
                  </a>

                  <button className="flex items-center justify-center gap-2 border border-hauzgo-500 text-hauzgo-500 hover:bg-hauzgo-50 font-medium px-6 py-3 rounded-full transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contactar por email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ******************************************** */}

      {/* Sitemap */}
      <section className="bg-hauzgo-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
          <div>
            <h4 className="font-semibold text-base mb-3">Encuentra tu Casa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  En venta
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  En renta
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Vende tu casa
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Renta tu casa
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base mb-3">
              Agentes Autorizados
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Guía de agentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Únete a nuestra red de agentes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base mb-3">
              Bienes Raíces HauzGo
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Registrarse
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Crea una cuenta
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Administración tu perfil
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tus búsquedas
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tus casas guardadas
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mapa
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base mb-3">
              Servicio al cliente
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Guía
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Prensa
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;

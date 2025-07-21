import { Fragment } from 'react';
import { Icon } from '@mui/material';
import bg from '../assets/services-bg.jpg';

const services = [
  {
    title: 'Asesoría Personalizada',
    description: 'Te acompañamos durante todo el proceso de compra, venta o renta de tu propiedad.',
    icon: 'support_agent',
  },
  {
    title: 'Análisis de Mercado',
    description: 'Realizamos estudios para determinar el valor real de propiedades en tu zona.',
    icon: 'insights',
  },
  {
    title: 'Publicidad Profesional',
    description: 'Fotografía, video y difusión estratégica en portales inmobiliarios y redes.',
    icon: 'campaign',
  },
  {
    title: 'Gestión Legal',
    description: 'Te ayudamos a reunir y validar la documentación necesaria para tu operación.',
    icon: 'gavel',
  },
];

const benefits = [
  'Equipo profesional con experiencia',
  'Trato humano y transparente',
  'Soluciones a la medida',
  'Respuesta rápida a tus dudas',
];

export default function Servicios() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero con fondo */}
      <section
        className="relative text-white py-20 px-6 md:px-12 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-lg max-w-2xl mx-auto">Soluciones integrales para todas tus necesidades inmobiliarias.</p>
        </div>
      </section>

      {/* Cards de servicios */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué ofrecemos?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition">
                <div className="text-hauzgo-500 text-4xl mb-4">
                  <Icon>{service.icon}</Icon>
                </div>
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Por qué elegirnos?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-600">
          Nos destacamos por nuestro compromiso, experiencia y atención al cliente.
        </p>
        <ul className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-hauzgo-500">
                <Icon>check_circle</Icon>
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-hauzgo-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
        <p className="mb-6 text-lg">Contáctanos hoy mismo y recibe atención personalizada sin compromiso.</p>
        <a href="/contacto" className="inline-block bg-white text-hauzgo-500 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
          Contáctanos
        </a>
      </section>
    </div>
  );
}
import { useState } from 'react';
import bg from '../assets/contacto-bg.jpg';

const faqs = [
  {
    question: "¿Cómo puedo agendar una visita a una propiedad?",
    answer: "Puedes llenar el formulario o contactarnos por WhatsApp para agendar una cita con uno de nuestros agentes.",
  },
  {
    question: "¿Ofrecen asesoría hipotecaria?",
    answer: "Sí, contamos con asesores especializados que te pueden orientar paso a paso.",
  },
  {
    question: "¿Puedo vender mi propiedad con ustedes?",
    answer: "Claro, envíanos los datos de tu propiedad y uno de nuestros agentes te contactará.",
  },
];

const agents = [
  {
    name: "Laura Martínez",
    role: "Asesora inmobiliaria",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    phone: "(55) 1234 5678",
    email: "laura@hauzgo.mx",
  },
  {
    name: "Carlos Reyes",
    role: "Especialista en crédito",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    phone: "(55) 8765 4321",
    email: "carlos@hauzgo.mx",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section
        className="relative text-white py-16 px-6 md:px-12 text-center bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }} >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
          <p className="max-w-2xl mx-auto text-lg">
            ¿Tienes preguntas? ¿Quieres visitar una propiedad? Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Envíanos un mensaje</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-lg px-4 py-2"/>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border rounded-lg px-4 py-2"/>
            <textarea
              placeholder="Mensaje"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border rounded-lg px-4 py-2 h-32"/>
            <button
              type="submit"
              className="bg-hauzgo-500 text-white px-6 py-2 rounded-xl hover:bg-hauzgo-600 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Info de contacto */}
      <section className="py-12 px-6 md:px-12 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <span className="material-icons text-hauzgo-500 text-4xl mb-2">call</span>
          <h3 className="font-semibold text-lg">Llámanos</h3>
          <p>(55) 1234 5678</p>
        </div>
        <div>
          <span className="material-icons text-hauzgo-500 text-4xl mb-2">mail</span>
          <h3 className="font-semibold text-lg">Escríbenos</h3>
          <p>contacto@hauzgo.mx</p>
        </div>
        <div>
          <span className="material-icons text-hauzgo-500 text-4xl mb-2">location_on</span>
          <h3 className="font-semibold text-lg">Visítanos</h3>
          <p>Aguascalientes, Ags</p>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-12 px-6 md:px-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-hauzgo-500 transition"
                onClick={() => toggleFAQ(i)}
              >
                <span>{faq.question}</span>
                <span className="material-icons">
                  {openFAQ === i ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {openFAQ === i && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Agentes */}
      <section className="py-12 px-6 md:px-12 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">Conoce a nuestros agentes</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {agents.map((agent, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
              <img src={agent.image} alt={agent.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="font-bold text-lg">{agent.name}</h3>
                <p className="text-sm text-gray-600">{agent.role}</p>
                <p className="text-sm flex items-center gap-1">
                  <span className="material-icons text-sm">phone</span>{agent.phone}
                </p>
                <p className="text-sm flex items-center gap-1">
                  <span className="material-icons text-sm">mail</span>{agent.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
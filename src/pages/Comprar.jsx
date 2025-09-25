import React, { useState } from "react";
import Logo from '../assets/logoHG.png';

const propiedadesEjemplo = [
  {
    id: 1,
    imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    direccion: "Paseo Granito 62, Muralia",
    precio: "$1,450,000",
    habitaciones: 3,
    banos: 2,
    metros: 95,
    nueva: true,
    horas: 12,
    guardado: false,
  },
  {
    id: 2,
    imagen: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    direccion: "Paseo Granito 62, Muralia",
    precio: "$1,450,000",
    habitaciones: 3,
    banos: 2,
    metros: 95,
    nueva: true,
    horas: 12,
    guardado: true,
  },
  {
    id: 3,
    imagen: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    direccion: "Paseo Granito 62, Muralia",
    precio: "$1,450,000",
    habitaciones: 3,
    banos: 2,
    metros: 95,
    nueva: true,
    horas: 12,
    guardado: false,
  },
  {
    id: 4,
    imagen: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    direccion: "Paseo Granito 62, Muralia",
    precio: "$1,450,000",
    habitaciones: 3,
    banos: 2,
    metros: 95,
    nueva: true,
    horas: 12,
    guardado: false,
  },
  { id: "cta", cta: true },
  {
    id: 5,
    imagen: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    direccion: "Paseo Granito 62, Muralia",
    precio: "$1,450,000",
    habitaciones: 3,
    banos: 2,
    metros: 95,
    nueva: true,
    horas: 12,
    guardado: true,
  },
];

export default function Comprar() {
  const [busqueda, setBusqueda] = useState("");
  const [filtros, setFiltros] = useState({
    guardados: true,
    nueva: true,
    remodelacion: true,
  });

  return (
    <section className="bg-white py-10 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-6 text-sm items-center">
          <button className="border border-gray-300 px-3 py-1 rounded-xl flex items-center gap-1">
            <span className="material-icons text-base">tune</span> Filtrar
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-xl flex items-center gap-1">
            <span className="material-icons text-base">map</span> Mapa
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-xl">Precio</button>
          <button className="border border-gray-300 px-3 py-1 rounded-xl">Tipo de casa</button>
          <button className="border border-gray-300 px-3 py-1 rounded-xl">Habitaciones / Baños</button>
          <button className="border border-gray-300 bg-gray-100 px-3 py-1 rounded-xl">Nueva</button>
          <button className="border border-gray-300 bg-gray-100 px-3 py-1 rounded-xl">En remodelación</button>
          <button className="border border-gray-300 px-3 py-1 rounded-xl text-hauzgo-500">Ordenar por</button>

          <button className="flex items-center gap-1 text-sm border border-gray-300 px-3 py-1 rounded-xl">
            <span className="material-icons text-base">visibility_off</span> Ocultar pendiente
          </button>
          <button className="flex items-center gap-1 text-sm bg-hauzgo-500 text-white px-3 py-1 rounded-xl">
            <span className="material-icons text-base">bookmark</span> Guardados
          </button>

          {/* Tags */}
          <span className="border px-3 py-1 rounded-full text-sm">Familia simple</span>
          <span className="border px-3 py-1 rounded-full text-sm">Cotos Residenciales</span>
          <span className="border px-3 py-1 rounded-full text-sm">+3 Habitaciones</span>
        </div>

        {/* Encabezado */}
        <h2 className="text-2xl font-semibold mb-1">Casas cerca de tu ubicación</h2>
        <p className="text-gray-500 mb-6 text-sm">218 casas</p>

        {/* Grid de propiedades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {propiedadesEjemplo.map((prop) =>
            prop.cta ? (
              <div key="cta" className="bg-hauzgo-1000 text-white p-6 rounded-2xl flex flex-col justify-center items-start shadow-md">
                <img src={Logo} alt="HauzGo Logo" className="h-14 mb-4" />
                <h3 className="text-lg font-semibold mb-2">¿No encuentras la casa de tus sueños?</h3>
                <p className="text-sm">Prueba consultando con nuestros agentes inmobiliarios para tener una respuesta más detallada.</p>
              </div>
            ) : (
              <div key={prop.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden relative">
                <img src={prop.imagen} alt="Propiedad" className="h-48 w-full object-cover" />

                {/* Etiquetas */}
                <div className="absolute top-2 left-2 flex gap-1">
                  {prop.nueva && (
                    <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded font-semibold">NUEVA</span>
                  )}
                  {prop.horas && (
                    <span className="bg-white text-green-700 border border-green-600 text-xs px-2 py-0.5 rounded font-semibold">
                      {prop.horas} HORAS
                    </span>
                  )}
                </div>

                {/* Guardado */}
                <div className="absolute top-2 right-2 cursor-pointer">
                  <span className={`material-icons text-2xl ${prop.guardado ? "text-red-500" : "text-gray-300 hover:text-hauzgo-500"}`}>
                    {prop.guardado ? "favorite" : "favorite_border"}
                  </span>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-lg font-semibold text-hauzgo-500">{prop.precio}</p>
                  <p className="text-sm text-gray-600">{prop.direccion}</p>
                  <div className="flex gap-4 text-sm text-gray-500 mt-1">
                    <span>{prop.habitaciones} hab</span>
                    <span>{prop.banos} b</span>
                    <span>{prop.metros} m²</span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
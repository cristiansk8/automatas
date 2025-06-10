// src/components/HeroBanner.tsx

import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            No seas un bot.  
            <span className="text-primary ml-2">Sé mejor que uno.</span>
          </h1>
          <p className="text-lg text-zinc-300 mb-8">
            Agentes de inteligencia artificial entrenados para conversar como humanos, responder como expertos y escalar tu negocio sin perder el toque humano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/demo">
              <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all">
                Probar Ahora
              </button>
            </Link>
            <Link href="/contacto">
              <button className="border border-white text-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition-all">
                Solicitar Demo Personalizada
              </button>
            </Link>
          </div>
        </div>

        {/* Imagen o animación */}
        <div className="flex justify-center">
          <img 
            src="/ai-agent-hero.svg" 
            alt="Agente IA" 
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

// components/LandingHero.tsx
export default function LandingHero() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Automatiza tu eCommerce en segundos
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
          Carga productos a tu tienda solo enviando una imagen. Detectamos el precio, nombre, código y lo subimos automáticamente a WooCommerce.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#demo"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-medium transition"
          >
            Ver demo en vivo
          </a>
          <a
            href="#contacto"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl text-lg font-medium transition"
          >
            Solicitar prueba gratuita
          </a>
        </div>

        <div id="demo" className="mt-12">
          <iframe
            src="https://tu-demo.com" // reemplaza con tu URL demo real
            className="w-full h-[400px] rounded-xl border"
            title="Demo automatización eCommerce"
          />
        </div>
      </div>
    </section>
  );
}

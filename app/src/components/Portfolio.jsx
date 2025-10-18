import React from 'react';
import { ExternalLink, MessageCircle, ShoppingCart, Send } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Chatbot E-commerce",
      description: "Chatbot web inteligente que responde consultas de e-commerce en tiempo real",
      client: "Tory Skate Shop",
      url: "https://toryskateshop.com/",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      technologies: ["Next.js", "AI/ML", "E-commerce"],
      icon: ShoppingCart
    },
    {
      id: 2,
      title: "Chatbot WooCommerce",
      description: "Bot de Telegram para subir y gestionar productos en WooCommerce automáticamente",
      client: "Gestión de Productos",
      url: "#telegram-bot",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      technologies: ["Telegram API", "WooCommerce", "Automation"],
      icon: Send
    },
    {
      id: 3,
      title: "Chatbot WhatsApp",
      description: "Integración de chatbot con WhatsApp para atención al cliente automatizada",
      client: "Atención al Cliente",
      url: "#whatsapp-bot",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
      technologies: ["WhatsApp API", "Node.js", "Automation"],
      icon: MessageCircle
    }
  ];

  return (
    <div className="min-h-screen bg-[#222222] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#ededed] mb-4">
            Portafolio de Proyectos
          </h1>
          <p className="text-xl text-[#ededed]/80">
            Soluciones de Chatbots Inteligentes
          </p>
          <div className="w-24 h-1 bg-[#39b3e1] mx-auto mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-[#ededed] rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#39b3e1]/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background Image */}
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-[#222222]/80 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-[#39b3e1] p-3 rounded-full shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-[#ededed]">
                  <h3 className="text-2xl font-bold text-[#222222] mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#39b3e1] text-sm mb-1 font-semibold">
                    Cliente: {project.client}
                  </p>
                  
                  <p className="text-[#222222]/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#222222] text-[#ededed] text-xs rounded-full border border-[#39b3e1]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link Button */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center bg-[#39b3e1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a9dc9] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#39b3e1]/50"
                  >
                    Ver Proyecto
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#39b3e1]/20 rounded-full blur-2xl group-hover:bg-[#39b3e1]/40 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <div className="bg-[#ededed] rounded-2xl p-8 border-2 border-[#39b3e1]">
            <h2 className="text-3xl font-bold text-[#222222] mb-4">
              ¿Interesado en trabajar juntos?
            </h2>
            <p className="text-[#222222]/70 mb-6">
              Desarrollo soluciones personalizadas de chatbots para tu negocio
            </p>
            <button className="bg-[#39b3e1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a9dc9] transition-all duration-300 shadow-lg hover:shadow-[#39b3e1]/50">
              Contactar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
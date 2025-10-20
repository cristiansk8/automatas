'use client';

import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle, ShoppingCart, Send } from 'lucide-react';

interface Props {
  t: {
    header: {
      title: string;
      subtitle: string;
    };
    projects: {
      id: number;
      title: string;
      description: string;
      client: string;
      url: string;
      image: string;
      technologies: string[];
      iconType: string;
    }[];
    cta: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
}

export default function Portfolio({ t }: Props) {
  const iconMap = {
    ShoppingCart,
    Send,
    MessageCircle,
  };

  return (
    <section className="relative min-h-screen py-24 px-6 md:px-12 overflow-hidden">
      {/* 🎥 Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full top-0 left-0 object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Capa de contenido */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.header.title}
            </span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t.header.subtitle}
          </p>
          <div className="w-20 h-1 bg-[#39b3e1] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.projects.map((project, index) => {
            const Icon = iconMap[project.iconType as keyof typeof iconMap];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-white/10 rounded-2xl overflow-hidden backdrop-blur-md border border-white/10 hover:border-[#39b3e1]/50 hover:shadow-[0_0_25px_-5px_#39b3e1] transition-all duration-500"
              >
                {/* Imagen */}
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-[#39b3e1] p-3 rounded-full shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-[#39b3e1] text-sm mb-1 font-semibold">
                    Client: {project.client}
                  </p>

                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/5 text-white/80 text-xs rounded-full border border-[#39b3e1]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botón */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center bg-[#39b3e1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a9dc9] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#39b3e1]/40"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-[#39b3e1]/30 shadow-inner">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.cta.title}
            </h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <button className="bg-[#39b3e1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a9dc9] transition-all duration-300 shadow-lg hover:shadow-[#39b3e1]/40">
              {t.cta.buttonText}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

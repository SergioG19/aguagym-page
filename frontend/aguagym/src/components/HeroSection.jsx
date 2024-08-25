// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-[98vh] flex items-center justify-center text-center text-white mt-[4rem]"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2021/06/17/78059-564490562_large.mp4" // Reemplaza con tu enlace de video
        type="video/mp4"
        autoPlay
        loop
        muted
        style={{ filter: 'brightness(40%)' }} // Apply dark filter
      />


      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 contenedorhero">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Sumérgete en un mundo de fitness acuático
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          Experimente lo mejor del entrenamiento acuático en Aguagym - Su viaje hacia el bienestar comienza aquí.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block bg-white text-primary font-bold py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full shadow-lg hover:bg-secondary hover:text-white transition-all duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
        >
          Empezar
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;

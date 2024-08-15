import React from 'react';
import { Particles } from '@framer';
import { motion } from 'framer-motion';

const ParticlesBackground = () => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#f5f5dc', // Beige background
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Particles
        id="particles-js"
        options={{
          particles: {
            number: {
              value: 50,
            },
            color: {
              value: ["#FFB6C1", "#BA55D3", "#87CEFA"], // Soft pastel colors
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 10,
              anim: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          retina_detect: true,
        }}
      />
    </motion.div>
  );
};

export default ParticlesBackground;

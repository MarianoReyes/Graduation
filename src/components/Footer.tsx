import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#14213D] text-white text-center">
      <div className="container mx-auto px-4">
        <p className="flex items-center justify-center text-sm md:text-base">
          Con cariño, José Mariano Reyes 
          <Heart size={16} className="text-[#D4AF37] ml-2 animate-pulse" fill="#D4AF37" />
        </p>
        <p className="mt-4 text-md text-white">
          <b>Por favor confirma tu asistencia antes del 1 de junio</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
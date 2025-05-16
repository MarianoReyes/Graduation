import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-6 md:py-8 w-full bg-gradient-to-r from-[#14213D] to-[#1A2A4A] text-white text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-4">
          <GraduationCap size={48} className="text-[#D4AF37]" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 animate-fadeIn">
          Mi Graduación
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide animate-fadeIn animation-delay-200">
          José Mariano Reyes
        </p>
      </div>
    </header>
  );
};

export default Header;
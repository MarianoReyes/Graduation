import React from 'react';
import { CalendarClock, MapPin } from 'lucide-react';

const Invitation: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-md p-8 border border-[#D4AF37]/20 animate-fadeInUp">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#14213D] text-center mb-8">
            Con gran alegría te invito a celebrar mi graduación
          </h2>
          
          <div className="my-8 text-center">
            
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto my-6"></div>
            
            <div className="flex items-center justify-center space-x-2 text-[#14213D] mb-3">
              <CalendarClock className="text-[#D4AF37]" size={24} />
              <p className="text-lg font-medium">Sábado 14 de Junio - 1:00 PM</p>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-[#14213D] mb-6">
              <MapPin className="text-[#D4AF37]" size={24} />
              <p className="text-lg font-medium">11 calle 29-93 Zona 11 Country Club (Mi casa)</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

// Set your graduation date here
const GRADUATION_DATE = new Date(2025, 5, 14, 13, 0, 0); // June 30, 2025 at 1:00 PM

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +GRADUATION_DATE - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#14213D] to-[#1A2A4A] text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-6">
          <Clock size={32} className="text-[#D4AF37] mr-3" />
          <h2 className="text-2xl md:text-3xl font-semibold">Cuenta Regresiva</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 animate-fadeIn animation-delay-300">
          <div className="w-20 md:w-24 h-20 md:h-24 bg-white/10 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-[#D4AF37]">{timeLeft.days}</span>
            <span className="text-xs md:text-sm text-gray-300">Días</span>
          </div>
          
          <div className="w-20 md:w-24 h-20 md:h-24 bg-white/10 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-[#D4AF37]">{timeLeft.hours}</span>
            <span className="text-xs md:text-sm text-gray-300">Horas</span>
          </div>
          
          <div className="w-20 md:w-24 h-20 md:h-24 bg-white/10 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-[#D4AF37]">{timeLeft.minutes}</span>
            <span className="text-xs md:text-sm text-gray-300">Minutos</span>
          </div>
          
          <div className="w-20 md:w-24 h-20 md:h-24 bg-white/10 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-[#D4AF37]">{timeLeft.seconds}</span>
            <span className="text-xs md:text-sm text-gray-300">Segundos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
import React, { useState } from 'react';
import { Send, Check, X } from 'lucide-react';

const RSVP: React.FC = () => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('yes');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      const params = new URLSearchParams();
      params.append('name', name.trim());
      params.append('attending', attending === 'yes' ? 'Sí' : 'No');
      params.append('timestamp', new Date().toLocaleString('es-GT', { timeZone: 'America/Guatemala' }));
  
      await fetch(
        'https://script.google.com/macros/s/AKfycbwNCboqdGD2Nux023KtHXvuSKr4_-y5ZfDtE-xwPAukcoXdbNgWxiW0KIxJQBtIP4d0/exec?' + params.toString(),
        {
          method: 'GET',
          mode: 'no-cors'
        }
      );
  
      // Aquí no puedes verificar la respuesta, así que asumimos éxito
      setSubmitted(true);
      setName('');
      setAttending('yes');
    } catch (err) {
      setError('Hubo un error al enviar tu respuesta.');
    } finally {
      setLoading(false);
    }
  };
   
  
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-md animate-fadeInUp animation-delay-400">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#14213D] text-center mb-8">
          Confirma tu asistencia
        </h2>
        
        {submitted ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Check size={32} className="text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">¡Gracias!</h3>
            <p className="text-gray-600">Tu respuesta ha sido registrada.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 border border-[#D4AF37]/20">
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center">
                <X size={20} className="text-red-500 mr-2" />
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
            
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ¿Asistirás?
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="yes"
                    checked={attending === 'yes'}
                    onChange={() => setAttending('yes')}
                    className="w-4 h-4 text-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                  <span className="ml-2 text-gray-700">Sí, asistiré</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="no"
                    checked={attending === 'no'}
                    onChange={() => setAttending('no')}
                    className="w-4 h-4 text-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                  <span className="ml-2 text-gray-700">No podré asistir</span>
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#14213D] hover:bg-[#1e325e] text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center justify-center ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Enviando...' : 'Enviar Respuesta'}
              <Send size={16} className="ml-2" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default RSVP;
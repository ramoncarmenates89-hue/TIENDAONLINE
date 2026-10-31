import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ShieldCheck, Zap } from 'lucide-react';

const images = [
  'https://i.imgur.com/hEUooPb.jpg',
  'https://i.imgur.com/QCduSDp.jpg'
];

export default function MobileditBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(timer);
  }, []);

  const handleBuy = () => {
    const text = `Hola YunicellServer, deseo comprar la herramienta MOBILedit FORENSIC ULTRA.\n\nPor favor confirmarme disponibilidad y precio. ¡Gracias!`;
    window.open(`https://wa.me/34634181266?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-slate-900/80 border border-blue-500/30 rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch shadow-[0_0_40px_rgba(59,130,246,0.15)] relative">
        
        {/* Decorative Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Text Section */}
        <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold w-max mb-6">
            <Zap size={18} className="text-blue-400" />
            Herramienta Destacada
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            MOBILedit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">FORENSIC ULTRA</span>
          </h2>
          
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            La herramienta definitiva para la extracción y análisis de datos de dispositivos móviles. Supera los bloqueos de seguridad y obtén la máxima información con la tecnología forense líder en el mercado.
          </p>
          
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-slate-200 font-medium">
              <ShieldCheck className="text-[#25D366] shrink-0" size={24} /> 
              <span>Extracción física y lógica avanzada de datos</span>
            </li>
            <li className="flex items-center gap-3 text-slate-200 font-medium">
              <ShieldCheck className="text-[#25D366] shrink-0" size={24} /> 
              <span>Bypass de PIN, patrón y contraseñas complejas</span>
            </li>
            <li className="flex items-center gap-3 text-slate-200 font-medium">
              <ShieldCheck className="text-[#25D366] shrink-0" size={24} /> 
              <span>Análisis profundo de aplicaciones y datos eliminados</span>
            </li>
          </ul>
          
          <button 
            onClick={handleBuy}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center gap-3 text-lg animate-pulse hover:animate-none"
          >
            <ShoppingCart size={24} />
            Compra de Herramienta
          </button>
        </div>

        {/* Carousel Section */}
        <div className="lg:w-1/2 w-full h-80 sm:h-96 lg:h-auto min-h-[400px] relative bg-slate-950/50 flex items-center justify-center p-6 lg:p-12 border-l border-white/5">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`MOBILedit Forensic Ultra Preview ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-contain p-8 drop-shadow-2xl"
            />
          </AnimatePresence>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-blue-400 w-8 shadow-[0_0_10px_rgba(96,165,250,0.8)]' : 'bg-white/30 hover:bg-white/50 w-2.5'
                }`}
                aria-label={`Ir a la imagen ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, X, User, Phone, CreditCard, ShoppingCart, CheckCircle2 } from 'lucide-react';

const prices = {
  'CUP 🇨🇺': '25,000',
  'MXN 🇲🇽': '900',
  'USDT 🪙': '45',
  'Bizum 🇪🇸': '50',
  'Zelle 🇺🇸': '50'
};

type PaymentMethod = keyof typeof prices;

export default function MobileEdit() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    metodoPago: 'CUP 🇨🇺' as PaymentMethod
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hola YunicellServer, deseo comprar la herramienta especial.

🛡️ *Herramienta:* MOBILedit FORENSIC ULTRA
👤 *Nombre:* ${formData.nombre}
📱 *Teléfono:* ${formData.telefono}
💳 *Método de Pago:* ${formData.metodoPago}
💵 *Total a Pagar:* ${prices[formData.metodoPago]}

Por favor confirmarme disponibilidad. ¡Gracias!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/34634181266?text=${encodedText}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-500/10 mb-6 border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
          <ShieldAlert size={40} className="text-purple-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent inline-block">
          Venta de Herramienta Especial
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Adquiere de forma definitiva la potente herramienta de extracción y análisis de datos móviles.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto bg-slate-900/60 border border-white/10 rounded-3xl p-8 lg:p-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
          {/* Using a highly relevant tech/cyber image as fallback in case the MediaFire viewer link blocks direct embedding */}
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
            alt="MOBILedit FORENSIC ULTRA" 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-2xl font-black text-white drop-shadow-md">MOBILedit FORENSIC</h3>
            <p className="text-purple-400 font-bold">ULTRA</p>
          </div>
        </motion.div>

        {/* Info & Purchase Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col h-full justify-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Precios de Compra</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {Object.entries(prices).map(([method, price]) => (
              <div key={method} className="flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                <span className="font-medium text-slate-300">{method}</span>
                <span className="text-lg font-bold text-purple-400">{price}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-purple-400 shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm">Extracción avanzada de datos móviles y análisis forense.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-purple-400 shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm">Licencia y acceso completo a todas sus funciones.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-purple-400 shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm">Soporte en la instalación incluido.</p>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-3 hover:-translate-y-1 text-lg animate-pulse"
          >
            <ShoppingCart size={24} />
            Comprar Herramienta
          </button>
        </motion.div>
      </div>

      {/* Purchase Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-slate-900 border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10 bg-slate-950/50">
                <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                  <ShoppingCart className="text-purple-400" size={24} />
                  Comprar MOBILedit
                </h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <User size={16} /> Nombre Completo
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <Phone size={16} /> Teléfono
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <CreditCard size={16} /> Método de Pago
                  </label>
                  <select 
                    value={formData.metodoPago}
                    onChange={(e) => setFormData({...formData, metodoPago: e.target.value as PaymentMethod})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none"
                  >
                    {Object.keys(prices).map(method => (
                      <option key={method} value={method}>{method} - {prices[method as PaymentMethod]}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-[#25D366]/25 flex items-center justify-center gap-2 text-lg"
                  >
                    Enviar Solicitud
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
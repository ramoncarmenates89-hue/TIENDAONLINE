import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, User, Phone, CreditCard, Send, ShieldCheck } from 'lucide-react';

export default function MobileEditBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    numero: '',
    metodoPago: 'CUP 🇨🇺'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hola YunicellServer, deseo comprar la herramienta especial.

🛠️ *Herramienta:* MOBILedit FORENSIC ULTRA
👤 *Nombre:* ${formData.nombre}
📱 *Número:* ${formData.numero}
💰 *Método de Pago:* ${formData.metodoPago}

Por favor confirmarme disponibilidad y precio. ¡Gracias!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/34634181266?text=${encodedText}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 bg-slate-900/80 border-y border-blue-500/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-950 border border-blue-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col md:flex-row items-center">
          
          {/* Image Section */}
          <div className="w-full md:w-2/5 md:border-r border-white/10 bg-slate-900 p-8 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50"></div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              <img 
                src="https://www.mediafire.com/convkey/6314/rvrn7lw51z78dpo6g.jpg" 
                alt="MOBILedit FORENSIC ULTRA" 
                className="w-full h-full object-contain bg-slate-950"
                onError={(e) => {
                  // Fallback if mediafire direct link fails
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-3/5 p-8 md:p-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck size={16} />
              Herramienta Especial
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              MOBILedit FORENSIC <span className="text-blue-400">ULTRA</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Adquiere esta potente herramienta forense para análisis y extracción avanzada de datos en dispositivos móviles (activación de adb en dispositivos samsung con procesador Exynos desde Download Mode). Una solución imprescindible para investigaciones y recuperaciones profundas.
            </p>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 text-lg w-full sm:w-auto animate-pulse"
            >
              <ShoppingCart size={20} />
              Comprar Herramienta
            </button>
          </div>
        </div>
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
              className="relative w-full max-w-md bg-slate-900 border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10 bg-slate-950/50">
                <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                  <ShieldCheck className="text-blue-400" size={24} />
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
                    <User size={16} /> Nombre
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <Phone size={16} /> Número
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.numero}
                    onChange={(e) => setFormData({...formData, numero: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <CreditCard size={16} /> Método de Pago
                  </label>
                  <select 
                    value={formData.metodoPago}
                    onChange={(e) => setFormData({...formData, metodoPago: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                  >
                    <option value="CUP 🇨🇺">CUP 🇨🇺</option>
                    <option value="MXN 🇲🇽">MXN 🇲🇽</option>
                    <option value="Bizum 🇪🇸">Bizum 🇪🇸</option>
                    <option value="USDT 🪙">USDT 🪙</option>
                    <option value="Zelle 🇺🇸">Zelle 🇺🇸</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-[#25D366]/25 flex items-center justify-center gap-2 text-lg"
                  >
                    <Send size={20} />
                    Enviar Solicitud
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
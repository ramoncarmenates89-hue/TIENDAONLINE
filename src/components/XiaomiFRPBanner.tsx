import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Unlock, X, User, Smartphone, Globe2, CreditCard, Send, Zap } from 'lucide-react';

export default function XiaomiFRPBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    modelo: '',
    pais: '',
    monedaPago: 'CUP 🇨🇺'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hola YunicellServer, solicito servicio de FRP para Xiaomi.

🔓 *Servicio:* FRP Xiaomi
👤 *Nombre:* ${formData.nombre}
📱 *Modelo:* ${formData.modelo}
🌎 *País:* ${formData.pais}
💰 *Moneda de Pago:* ${formData.monedaPago}

Por favor confirmarme disponibilidad y precio. ¡Gracias!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/34634181266?text=${encodedText}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 bg-slate-900/50 border-y border-orange-500/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-950 border border-orange-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.15)] flex flex-col lg:flex-row items-stretch">
          
          {/* Text Section */}
          <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center relative z-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold w-max mb-6">
              <Zap size={18} className="text-orange-400" />
              Servicio Especializado
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              FRP Xiaomi <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Todos los Modelos</span>
            </h2>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Eliminación de cuenta Google (FRP) para cualquier dispositivo Xiaomi, Redmi o POCO. Servicio rápido, seguro y garantizado para todos los modelos del mercado.
            </p>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-[0_0_20px_rgba(249,115,22,0.5)] flex items-center justify-center gap-3 text-lg animate-pulse hover:animate-none"
            >
              <Unlock size={24} />
              Solicitar Servicio
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full h-80 sm:h-96 lg:h-auto min-h-[400px] relative bg-slate-900 flex items-center justify-center p-6 lg:p-12 border-l border-white/5 order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/10 to-amber-500/10 opacity-50"></div>
            <motion.img 
              src="https://i.imgur.com/iukKI4v.jpg" 
              alt="FRP Xiaomi Todos los Modelos" 
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
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
              className="relative w-full max-w-md bg-slate-900 border border-orange-500/30 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10 bg-slate-950/50">
                <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                  <Unlock className="text-orange-400" size={24} />
                  Solicitar FRP Xiaomi
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
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <Smartphone size={16} /> Modelo
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.modelo}
                    onChange={(e) => setFormData({...formData, modelo: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="Ej: Redmi Note 12"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                      <Globe2 size={16} /> País
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.pais}
                      onChange={(e) => setFormData({...formData, pais: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      placeholder="Ej: México"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                      <CreditCard size={16} /> Moneda
                    </label>
                    <select 
                      value={formData.monedaPago}
                      onChange={(e) => setFormData({...formData, monedaPago: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all appearance-none"
                    >
                      <option value="CUP 🇨🇺">CUP 🇨🇺</option>
                      <option value="MXN 🇲🇽">MXN 🇲🇽</option>
                      <option value="Bizum 🇪🇸">Bizum 🇪🇸</option>
                      <option value="USDT 🪙">USDT 🪙</option>
                      <option value="Zelle 🇺🇸">Zelle 🇺🇸</option>
                    </select>
                  </div>
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
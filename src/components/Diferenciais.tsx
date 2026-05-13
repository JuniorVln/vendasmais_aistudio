import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Sparkles, Cpu } from "lucide-react";

const columns = [
  {
    id: 1,
    title: "IA no Núcleo",
    desc: "A inteligência artificial não é um add-on. Está em cada funcionalidade — do lead scoring ao follow-up, tudo aprende com seu histórico.",
    label: "inteligência",
    activeColor: "#2563eb", // blue-600
    theme: "blue",
    visual: "image",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Feito para Vendedores, não para TI.",
    desc: "Interface pensada para quem bate meta, não para quem configura sistema. Zero curva de aprendizado.",
    img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
    label: "experiência",
    activeColor: "#F5A520", // gold
    theme: "orange",
    visual: "image"
  },
  {
    id: 3,
    title: "WhatsApp como Canal Principal",
    desc: "Seus clientes estão no WhatsApp. O Vendas Mais também — com IA integrada direto na conversa, sem sair do app.",
    label: "integração",
    activeColor: "#059669", // emerald-600
    theme: "emerald",
    visual: "image",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800"
  },
];

export function Diferenciais() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] relative text-[#f5f5f5] z-10 border-t border-white/5">
      <div className="w-full px-8 md:px-16 lg:px-24 mx-auto max-w-[1600px]">
        {/* Big Ghost Title - clipPath mask reveal */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[140px] leading-none tracking-tighter text-[#555] font-medium mb-16 lg:mb-24 select-none lg:-ml-4"
        >
          A Diferença
        </motion.h1>

        {/* Header da Seção — staggered entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col lg:flex-row items-start mb-16 lg:mb-24 gap-12 lg:gap-16 w-full"
        >
          {/* Coluna 1 */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16,1,0.3,1] } } }}
            className="flex-shrink-0 w-full lg:w-48 lg:border-l border-white/10 lg:pl-6 pt-2"
          >
             <div className="text-3xl font-light tracking-tight text-white mb-2">002</div>
             <div className="text-white/50 text-[14px] tracking-wide">diferenciais</div>
          </motion.div>
          
          {/* Coluna 2 */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16,1,0.3,1] } } }}
            className="flex-grow max-w-[700px] lg:border-l border-white/10 lg:pl-8 pt-2"
          >
             <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-tighter font-medium text-[#eaeaea]">
                Por que o Vendas Mais<br className="hidden md:block" /> é diferente de qualquer<br className="hidden md:block" /> outro CRM do mercado.
             </h2>
          </motion.div>

          {/* Coluna 3 */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16,1,0.3,1] } } }}
            className="lg:w-72 shrink-0 lg:border-l border-white/10 lg:pl-8 pt-2 self-start mt-8 lg:mt-0"
          >
            <p className="text-[#8b98a5] text-[15px] leading-relaxed">
               Não é mais uma ferramenta. É uma vantagem competitiva.
            </p>
          </motion.div>
        </motion.div>

        {/* Accordion Container */}
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[600px] gap-4 lg:gap-2">
          {/* Columns */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 flex-grow h-[800px] lg:h-full">
            {columns.map((col, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={col.id}
                  onClick={() => setActiveIndex(index)}
                  animate={{ 
                    flex: isActive ? (typeof window !== 'undefined' && window.innerWidth < 1024 ? 1 : 3) : 1,
                    backgroundColor: isActive ? col.activeColor : "#141414" 
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative overflow-hidden cursor-pointer rounded-2xl flex flex-col group ${isActive ? 'h-full lg:h-full' : 'h-[100px] lg:h-full lg:min-w-[120px]'}`}
                >
                  {/* Top Header - Number */}
                  <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                    {isActive ? (
                       <ArrowUpRight className={isActive ? "text-white" : "text-white/40"} size={20} />
                    ) : (
                       <ArrowDownRight className="text-white/40" size={20} />
                    )}
                    <span className={`text-xl font-medium tracking-tight ${isActive ? "text-white" : "text-white/40"}`}>
                      0{col.id}
                    </span>
                  </div>

                  {/* Active Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="p-8 pt-24 h-full flex flex-col relative z-10"
                      >
                        <h3 className="text-3xl lg:text-5xl font-medium tracking-tighter leading-none mb-6">
                           {col.title.split(',').map((part, i, arr) => (
                              <span key={i}>
                                {part}{i < arr.length - 1 && ','}
                                {i < arr.length - 1 && <br/>}
                              </span>
                           ))}
                        </h3>
                        <p className="text-white/90 font-light leading-relaxed max-w-sm mb-8 text-sm lg:text-base">
                          {col.desc}
                        </p>
                        
                        <div className="mt-auto mb-12 lg:mb-14 relative rounded-xl overflow-hidden h-44 lg:h-56 xl:h-60 border border-white/10 bg-black/20">
                           {col.visual === 'image' && col.img && (
                             <>
                               <img 
                                 src={col.img} 
                                 alt={col.title}
                                 className="w-full h-full object-cover opacity-60"
                                 onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                               />
                               {/* Gradient overlay */}
                               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                             </>
                           )}
                           
                           {col.visual === 'ai' && (
                             <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#0a192f]">
                                {/* Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/30 blur-2xl rounded-full"></div>
                                {/* Grid lines */}
                                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                                <Cpu className="w-16 h-16 text-blue-400 relative z-10" strokeWidth={1.5} />
                                {/* Connection points */}
                                <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-[25%] left-[35%] shadow-[0_0_10px_2px_rgba(59,130,246,0.6)]"></div>
                                <div className="absolute w-2 h-2 bg-blue-400 rounded-full bottom-[35%] right-[25%] shadow-[0_0_10px_2px_rgba(59,130,246,0.6)]"></div>
                             </div>
                           )}

                           {col.visual === 'whatsapp' && (
                             <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-[#063022]">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-500/20 blur-2xl rounded-full"></div>
                                
                                {/* Abstract Chat bubbles */}
                                <div className="relative z-10 flex flex-col gap-3 w-full max-w-[200px]">
                                   <div className="bg-white/10 backdrop-blur-md self-start p-3 rounded-2xl rounded-bl-sm border border-white/5 shadow-xl">
                                     <div className="w-12 h-2 bg-white/20 rounded-full"></div>
                                   </div>
                                   <div className="bg-emerald-500/20 backdrop-blur-md self-end p-3 rounded-2xl rounded-br-sm border border-emerald-500/30 flex items-center gap-2 shadow-xl">
                                     <Sparkles className="w-4 h-4 text-emerald-400" />
                                     <div className="w-16 h-2 bg-emerald-400/50 rounded-full"></div>
                                   </div>
                                   <div className="bg-white/10 backdrop-blur-md self-start p-3 rounded-2xl rounded-bl-sm border border-white/5 shadow-xl">
                                     <div className="w-8 h-2 bg-white/20 rounded-full"></div>
                                   </div>
                                </div>
                             </div>
                           )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Label */}
                  <div className={`absolute bottom-6 left-6 z-20 ${!isActive && 'lg:origin-bottom-left lg:-rotate-90 lg:whitespace-nowrap lg:bottom-12'}`}>
                     <span className={`text-sm tracking-wide lowercase ${isActive ? "text-white" : "text-white/40"}`}>
                       {col.label}
                     </span>
                  </div>

                  {/* Hover effect for inactive */}
                  {!isActive && (
                     <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Summary Panel */}
          <div className="w-full lg:w-[320px] xl:w-[400px] shrink-0 bg-[#141414] rounded-2xl p-8 flex flex-col justify-between h-[400px] lg:h-full mt-4 lg:mt-0">
             <div>
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                   <span className="text-sm text-white/50 tracking-wide font-medium">Diferenciais</span>
                   <span className="text-sm text-white/50 tracking-wide font-medium">3/3</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-medium tracking-tighter leading-[1.05] mb-6">
                   IA nativa,<br/>
                   experiência simples,<br/>
                   onde o cliente está.
                </h3>
                
                <p className="text-white/50 text-sm font-light leading-relaxed">
                   Construímos o Vendas Mais para o vendedor brasileiro — que trabalha no celular, fecha negócio no WhatsApp e precisa de resultado, não de complexidade.
                </p>
             </div>
             
             {/* Decorative Grid or dots */}
             <div className="hidden lg:grid grid-cols-4 gap-6 opacity-30 my-8">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-blue-500' : 'bg-white'}`} />
                ))}
             </div>

             <div className="flex items-center gap-3 text-white/60 text-sm mt-auto pt-4 border-t border-white/5">
                <Sparkles size={16} className="text-blue-500" />
                <span>Tecnologia que trabalha por você.</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

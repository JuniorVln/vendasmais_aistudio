import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { Zap, ArrowRight, Rocket } from "lucide-react";
import { useRef } from "react";

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number], key?: string }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block mr-2 md:mr-3 lg:mr-4 mb-2">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export function Features() {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.8", "end 0.4"]
  });

  const textPart1 = "Chega de perder tempo com".split(" ");
  const textPart2 = "planilha, anotação e achismo.".split(" ");
  const textPart3 = "Agora você foca em vender.".split(" ");

  const allWords = [...textPart1, ...textPart2, ...textPart3];

  return (
    <>
      {/* Scroll-Triggered Typography section (transparent background, reveals hero behind) */}
      <section className="py-24 lg:py-32 bg-transparent relative text-[#f5f5f5] z-10">
        <div className="w-full px-8 md:px-16 lg:px-24 mx-auto">
          <div
             ref={textRef}
             className="min-h-[60vh] flex flex-col justify-center relative"
          >
             <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-medium tracking-tighter leading-[1.0] text-[#f5f5f5] max-w-[1200px]">
               <div className="flex flex-wrap">
                 {textPart1.map((word, i) => (
                   <Word key={`p1-${i}`} progress={scrollYProgress} range={[i / allWords.length, (i + 1) / allWords.length]}>{word}</Word>
                 ))}
               </div>
               <div className="flex flex-wrap text-white/40">
                 {textPart2.map((word, i) => {
                   const index = textPart1.length + i;
                   return <Word key={`p2-${i}`} progress={scrollYProgress} range={[index / allWords.length, (index + 1) / allWords.length]}>{word}</Word>;
                 })}
               </div>
               <div className="flex flex-wrap">
                 {textPart3.map((word, i) => {
                   const index = textPart1.length + textPart2.length + i;
                   return <Word key={`p3-${i}`} progress={scrollYProgress} range={[index / allWords.length, (index + 1) / allWords.length]}>{word}</Word>;
                 })}
               </div>
             </h2>

             {/* Rocket replacing the shapes */}
             <motion.div 
               style={{ 
                 y: useTransform(scrollYProgress, [0, 1], [100, -100]),
                 opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
               }}
               className="hidden lg:flex absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 rounded-full items-center justify-center border border-blue-500/20 bg-blue-600/5 backdrop-blur-sm overflow-hidden"
             >
               <img 
                 src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80" 
                 alt="Rocket" 
                 className="w-full h-full object-cover mix-blend-lighten opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-blue-900/40 mix-blend-overlay" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* Main Features Section with Solid Background */}
      <section className="bg-[#111111] relative text-[#f5f5f5] z-20 pt-24 lg:pt-32 pb-24 lg:pb-32 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="w-full px-8 md:px-16 lg:px-24 mx-auto">
          
          {/* Big Title (Top Left) */}
          <h1 className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[140px] leading-none tracking-tighter text-[#444] font-medium mb-16 lg:mb-24 select-none lg:-ml-4 opacity-70">
            O Aplicativo
          </h1>

          {/* Header like video with specific layout */}
          <div className="flex flex-col lg:flex-row items-start mb-24 gap-12 lg:gap-16 w-full">
            {/* Number + Label (Left) */}
            <div className="flex-shrink-0 w-full lg:w-48 lg:border-l border-[#333] lg:pl-6 pt-2">
               <div className="text-3xl font-light tracking-tight mb-2">001</div>
               <div className="text-[14px] text-white/50 tracking-wide">vendas—inteligentes</div>
            </div>
            
            {/* Statement Central (bold, grande) */}
            <div className="flex-grow max-w-3xl lg:border-l border-[#333] lg:pl-8 pt-2">
               <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-tighter font-medium text-[#eaeaea]">
                 Criado para vender mais.<br />
                 Automatizado para nunca<br />
                 perder oportunidades.
               </h2>
            </div>

            {/* Descriçãn direta (pequena, cinza) */}
            <div className="lg:w-72 shrink-0 lg:border-l border-[#333] lg:pl-8 pt-2 self-start mt-8 lg:mt-0">
               <p className="text-[#8b98a5] text-[15px] leading-relaxed">
                 Cada funcionalidade foi pensada para o dia a dia real do vendedor —
                 menos cliques, mais negócios fechados.
               </p>
            </div>
          </div>

          {/* Grid Layout taking up full width like video */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* CARD 1 — Featured (grande, top left, fundo escuro + imagem) */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="col-span-1 md:col-span-2 row-span-1 relative h-[500px] sm:h-[600px] bg-[#161616] rounded-2xl overflow-hidden group border border-white/5"
            >
               {/* Background Image/Gradient setup */}
               <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-color z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/60 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                    alt="AI Dashboard" 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-700"
                  />
               </div>

               <div className="relative z-20 w-full h-full p-8 md:p-12 pl-6 md:pl-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start w-full">
                     <div>
                        <div className="text-[12px] md:text-sm text-white/50 mb-1 lg:mb-2 tracking-wide font-medium">Funcionalidade Principal</div>
                        <h3 className="text-3xl sm:text-4xl md:text-[52px] leading-[1.05] font-medium tracking-tight text-white max-w-sm">
                           Assistente de<br/>Vendas com IA
                        </h3>
                     </div>
                     <div className="text-white/20 grid grid-cols-3 gap-[2px] mt-2">
                        {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-current rounded-full" />)}
                     </div>
                  </div>

                  <div className="flex flex-col items-start gap-6 max-w-md">
                     <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed mix-blend-plus-lighter">
                        Seu copiloto inteligente em cada negociação. A IA analisa o cliente, sugere a abordagem certa e indica o momento ideal para fechar.
                     </p>
                     <button className="w-12 h-10 md:w-14 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors shrink-0">
                        <ArrowRight className="w-5 h-5 text-white" />
                     </button>
                  </div>
               </div>
            </motion.div>

            {/* CARD 2 — Destaque (top right, fundo azul) */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="col-span-1 relative h-[500px] sm:h-[600px] bg-blue-600 rounded-2xl overflow-hidden p-8 md:p-10 flex flex-col justify-between border border-blue-500/50"
            >
               <div>
                  <div className="flex justify-between items-center mb-8 border-b border-white/20 pb-4">
                     <div className="text-xs text-white/80 font-medium">Plataforma Completa</div>
                     <div className="text-xs text-white/80 font-mono">2/8</div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl xl:text-[44px] leading-[1.05] font-medium tracking-tight text-white mb-6">
                     Tudo que um<br/>Vendedor de Alta<br/>Performance Precisa.
                  </h3>
                  
                  <p className="text-white/80 text-sm md:text-[15px] leading-relaxed">
                     CRM inteligente, IA generativa e automações em um único app — feito para quem vive de vender.
                  </p>
               </div>

               {/* Decorative Grid */}
               <div className="hidden md:grid grid-cols-4 gap-x-12 gap-y-12 absolute right-12 bottom-12 opacity-80 z-0">
                  {[...Array(16)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1.3, 0.7] }}
                      transition={{ 
                         duration: 3.5, 
                         repeat: Infinity, 
                         delay: (i % 4) * 0.3 + Math.floor(i / 4) * 0.2,
                         ease: "easeInOut"
                      }}
                      className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                    />
                  ))}
               </div>

               <div className="flex items-center gap-2 mt-12 bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-sm relative z-10">
                  <div className="text-white text-xs md:text-sm font-medium tracking-wide">✦ Inteligência Artificial Nativa</div>
               </div>
            </motion.div>

            {/* CARD 3 — Gestão de Pipeline */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="col-span-1 relative h-[380px] bg-[#161616] rounded-2xl overflow-hidden group border border-white/5"
            >
               <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-blue-900/5 mix-blend-color z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/70 to-[#161616]/20 z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?auto=format&fit=crop&q=80" 
                    alt="Pipeline" 
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 blur-[1px]"
                  />
               </div>
               
               <div className="relative z-20 w-full h-full p-6 md:p-8 flex flex-col justify-between">
                  <div>
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white">Gestão de Pipeline</h3>
                        <div className="text-white/20 grid grid-cols-3 gap-[2px]">
                           {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-current rounded-full" />)}
                        </div>
                     </div>
                     <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-[260px]">
                        Visualize cada etapa do funil em tempo real. Arraste, organize e nunca perca um lead de vista.
                     </p>
                  </div>
                  
                  <button className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                     <ArrowRight className="w-4 h-4 text-white" />
                  </button>
               </div>
            </motion.div>

            {/* CARD 4 — Follow-up Automático */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="col-span-1 relative h-[380px] bg-[#161616] rounded-2xl overflow-hidden group border border-white/5"
            >
               <div className="absolute inset-0 z-0 flex items-center justify-center">
                  {/* Whatsapp icon styling */}
                  <div className="w-32 h-32 rounded-full border border-green-500/20 flex items-center justify-center bg-green-500/5 rotate-12 scale-150 opacity-50 group-hover:scale-[1.6] group-hover:rotate-45 transition-all duration-[2s] ease-out">
                     <Zap className="w-12 h-12 text-blue-500 opacity-60" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/40 to-transparent z-10" />
               </div>
               
               <div className="relative z-20 w-full h-full p-6 md:p-8 flex flex-col justify-between">
                  <div>
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white leading-tight">Follow-up<br/>Automático</h3>
                        <div className="text-white/20 grid grid-cols-3 gap-[2px]">
                           {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-current rounded-full" />)}
                        </div>
                     </div>
                     <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-[260px] mt-2">
                        A IA agenda e envia follow-ups no momento certo — por WhatsApp, e-mail ou ligação.
                     </p>
                  </div>
                  
                  <button className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                     <ArrowRight className="w-4 h-4 text-white" />
                  </button>
               </div>
            </motion.div>

            {/* CARD 5 — Dashboard de Performance */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.5 }}
               className="col-span-1 relative h-[380px] bg-[#161616] rounded-2xl overflow-hidden group border border-white/5"
            >
               <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-color z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/50 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                    alt="Dashboard" 
                    className="w-full h-full object-cover object-left-bottom opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                  />
               </div>
               
               <div className="relative z-20 w-full h-full p-6 md:p-8 flex flex-col justify-between">
                  <div>
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white leading-tight">Dashboard de<br/>Performance</h3>
                        <div className="text-white/20 grid grid-cols-3 gap-[2px]">
                           {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-current rounded-full" />)}
                        </div>
                     </div>
                     <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-[260px] mt-2">
                        Métricas em tempo real para você e seu gestor. Saiba exatamente onde estão seus resultados.
                     </p>
                  </div>
                  
                  <button className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                     <ArrowRight className="w-4 h-4 text-white" />
                  </button>
               </div>
            </motion.div>

            {/* CARD 6 — Qualificação de leads */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="col-span-1 relative h-[380px] bg-[#161616] rounded-2xl overflow-hidden group border border-white/5"
            >
               <div className="absolute inset-0 z-0">
                  <div className="absolute w-64 h-64 border border-blue-500/20 rounded-full -bottom-10 -left-10 opacity-50 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute w-48 h-48 border border-blue-400/30 rounded-full -bottom-2 -left-2 opacity-50 group-hover:scale-110 transition-transform duration-700 delay-75" />
                  <div className="absolute w-32 h-32 border border-blue-300/40 rounded-full bottom-6 left-6 opacity-50 group-hover:scale-110 transition-transform duration-700 delay-150" />
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full bottom-20 left-20 blur-[2px] group-hover:blur-[8px] transition-all" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/60 to-transparent z-10" />
               </div>
               
               <div className="relative z-20 w-full h-full p-6 md:p-8 flex flex-col justify-between">
                  <div>
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white leading-tight">Qualificação<br/>de Leads</h3>
                        <div className="text-white/20 grid grid-cols-3 gap-[2px]">
                           {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-current rounded-full" />)}
                        </div>
                     </div>
                     <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-[260px] mt-2">
                        IA que pontua e prioriza seus leads automaticamente. Foque em quem vai comprar.
                     </p>
                  </div>
                  
                  <button className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors mt-auto self-start">
                     <ArrowRight className="w-4 h-4 text-white" />
                  </button>
               </div>
            </motion.div>

            {/* Placeholder / Empty Card (como o logo em opacity no meio) */}
            <div className="col-span-1 relative h-[380px] rounded-2xl flex items-center justify-center hidden md:flex">
               <img src="/assets/Logo_Vendas_%2B_Branco.png" alt="" className="w-32 opacity-5 grayscale" />
            </div>

            {/* CARD 7 — Vendas Mais 2.0 */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.8 }}
               className="col-span-1 relative h-[380px] bg-[#1a1a24] rounded-2xl overflow-hidden border border-white/5 p-6 md:p-8 flex flex-col justify-between"
            >
               <div>
                  <h3 className="text-2xl md:text-[28px] font-medium tracking-tight text-white/90 mb-1">Vendas Mais <span className="font-light text-white/60">2.0</span></h3>
                  <div className="text-sm text-[#ff4d4d] mb-8 font-medium">Nova versão disponível</div>
                  
                  <div className="bg-white/5 border border-white/10 rounded px-3 py-1 text-[10px] uppercase font-mono tracking-wider text-white/40 w-fit mb-2">Destaque</div>
                  
                  <div className="text-[44px] md:text-[56px] leading-[1] font-medium text-white tracking-tighter mb-1">
                     6 módulos
                  </div>
                  <div className="text-lg md:text-xl text-white/60 font-light tracking-tight">de IA integrados</div>
               </div>

               <div className="flex justify-between items-end mt-12 w-full">
                  <div className="text-white/60 text-sm">Acesse agora</div>
                  <button className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                     <ArrowRight className="w-4 h-4 text-white" />
                  </button>
               </div>
            </motion.div>

          </div>

        </div>
      </section>
    </>
  );
}

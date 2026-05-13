import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

export function Community() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#0a0a0a] relative text-[#f5f5f5] z-10 border-t border-white/5"
      id="comunidade"
    >
      <div className="w-full px-8 md:px-16 lg:px-24 mx-auto max-w-[1600px] relative z-10">
        {/* Big Title (Top Left) */}
        <h1 className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[140px] leading-none tracking-tighter text-[#222] font-medium mb-16 lg:mb-24 select-none lg:-ml-4 opacity-70">
          Comunidade
        </h1>

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start mb-16 lg:mb-24 gap-12 lg:gap-16 w-full mt-0 bg-[#0a0a0a]">
          {/* Coluna 1 */}
          <div className="flex-shrink-0 w-full lg:w-48 lg:border-l border-white/10 lg:pl-6 pt-2">
            <div className="text-3xl font-light tracking-tight text-white mb-2">
              005
            </div>
            <div className="text-white/50 text-[14px] tracking-wide uppercase">
              comunidade
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="flex-grow max-w-[700px] lg:border-l border-white/10 lg:pl-8 pt-2">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-tighter font-medium text-[#eaeaea]">
              Entre para o grupo de vendedores
              <br className="hidden lg:block" /> que estão um passo à frente.
            </h2>
          </div>

          {/* Coluna 3 */}
          <div className="lg:w-72 shrink-0 lg:border-l border-white/10 lg:pl-8 pt-2 self-start mt-8 lg:mt-0">
            <p className="text-[#8b98a5] text-[15px] leading-relaxed">
              Acesso gratuito.
              <br />
              Sai quando quiser.
            </p>
          </div>
        </div>

        {/* Bento Community Display */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-[#0a0a0a] rounded-[2rem] p-[2px] max-w-6xl mx-auto shadow-[0_20px_80px_rgba(0,0,0,0.4)] border border-white/5"
        >
          <div className="flex flex-col lg:flex-row gap-[2px] rounded-[2rem] overflow-hidden bg-[#000]">
            
            {/* LEFT COLUMN */}
            <div className="w-full lg:w-[50%] flex flex-col gap-[2px]">
              
              {/* Top Left */}
              <div className="bg-[#1A1A1A] p-8 lg:px-12 lg:py-10 flex items-center justify-between">
                <span className="text-white/50 text-base md:text-lg font-light tracking-wide">Comunidade Vendas Mais</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-1.5 rounded-full bg-[#ff5a36]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                </div>
              </div>

              {/* Bottom Left */}
              <div className="bg-[#1C1C1C] p-8 lg:p-12 flex-1 flex flex-col justify-end min-h-[400px]">
                <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-[#f5f5f5] mb-4">
                  Faça parte da comunidade<br />Vendas Mais.
                </h3>
                
                <p className="text-[#8b98a5] text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                  Receba dicas exclusivas, atualizações do app e estratégias de vendas direto no seu WhatsApp. São <strong className="text-white font-medium">+1.000 vendedores</strong> já no grupo.
                </p>

                <ul className="flex flex-col gap-4 mb-10">
                  <li className="flex items-start gap-4 text-white/70 text-sm">
                    <span className="mt-0.5 text-[#ff5a36]"><Check className="w-4 h-4" /></span>
                    Conteúdo exclusivo sobre vendas com IA
                  </li>
                  <li className="flex items-start gap-4 text-white/70 text-sm">
                    <span className="mt-0.5 text-[#ff5a36]"><Check className="w-4 h-4" /></span>
                    Atualizações e novidades do Vendas Mais em primeira mão
                  </li>
                  <li className="flex items-start gap-4 text-white/70 text-sm">
                    <span className="mt-0.5 text-[#ff5a36]"><Check className="w-4 h-4" /></span>
                    Networking com vendedores de alta performance
                  </li>
                </ul>

                <div className="mt-auto pt-8 border-t border-white/5">
                   <button className="bg-[#25D366] hover:bg-[#1fa14d] text-white px-8 py-3.5 rounded-full font-medium text-sm flex items-center justify-center gap-3 transition-colors shadow-[0_0_20px_rgba(37,211,102,0.2)]">
                     Entrar no Grupo Agora <ArrowRight className="w-4 h-4" />
                   </button>
                   <p className="text-[11px] text-white/40 uppercase tracking-widest font-bold mt-4 ml-4">
                     Gratuito · Acesso imediato
                   </p>
                </div>
              </div>

            </div>

            {/* MIDDLE COLUMN - Image */}
            <div className="w-full lg:w-[35%] bg-[#1A1A1A] relative min-h-[300px] lg:min-h-[auto] overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
                 alt="Vendedores Alta Performance" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-50" />
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full lg:w-[15%] flex flex-col gap-[2px]">
              
              {/* Top Right */}
              <div className="bg-[#1A1A1A] p-6 lg:p-10 flex items-center justify-center gap-4 h-[120px]">
                <button className="text-[#ff5a36] hover:text-[#ff7b5c] transition-colors">
                  <ArrowRight className="w-6 h-6 rotate-180" strokeWidth={1} />
                </button>
                <button className="text-[#ff5a36] hover:text-[#ff7b5c] transition-colors">
                  <ArrowRight className="w-6 h-6" strokeWidth={1} />
                </button>
              </div>

              {/* Bottom Right */}
              <div className="bg-[#1C1C1C] flex-1 flex flex-row lg:flex-col items-center justify-center gap-8 py-8 lg:py-0 min-h-[120px]">
                 <a href="#" className="text-white/30 hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                 </a>
                 <a href="#" className="text-white/30 hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                 </a>
                 <a href="#" className="text-white/30 hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                 </a>
                 <a href="#" className="text-white/30 hover:text-[#25D366] transition-colors duration-300 relative group">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.395 0 0 5.394 0 12.031c0 2.115.549 4.183 1.594 6.002L.15 23.518l5.632-1.477a11.96 11.96 0 006.249 1.745h.005C18.667 23.786 24 18.393 24 11.758 24 5.123 18.667 0 12.031 0zm0 21.782h-.005a9.92 9.92 0 01-5.074-1.385l-.364-.216-3.77.989.992-3.676-.237-.377a9.92 9.92 0 01-1.524-5.328c0-5.502 4.478-9.981 9.982-9.981 5.503 0 9.98 4.479 9.98 9.981 0 5.502-4.477 9.98-9.98 9.98zm5.48-7.498c-.301-.151-1.783-.881-2.062-.982-.279-.101-.482-.151-.684.151-.202.302-.782.982-.958 1.183-.176.201-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.498-.896-.8-1.503-1.789-1.68-2.09-.176-.302-.019-.465.132-.615.136-.136.301-.352.452-.528.151-.176.202-.302.302-.503.1-.201.05-.377-.025-.528-.076-.151-.684-1.65-.937-2.257-.247-.591-.497-.511-.684-.52-.176-.008-.377-.008-.578-.008-.202 0-.528.075-.805.377-.277.302-1.055 1.031-1.055 2.515 0 1.484 1.081 2.918 1.231 3.12.151.201 2.127 3.243 5.15 4.544 2.053.885 2.76.786 3.25.688.583-.117 1.783-.729 2.035-1.433.251-.704.251-1.308.176-1.433-.075-.126-.276-.201-.577-.352z"/></svg>
                    <span className="absolute -left-12 top-1/2 -translate-y-1/2 bg-[#25D366] text-white text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded opacity-0 translate-x-2 group-hover:opacity-100 group-hover:-translate-x-1 transition-all pointer-events-none">
                      Join
                    </span>
                 </a>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendonça',
    role: 'Gerente Comercial',
    company: 'Distribuidora · SP',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    quote: 'Desde que comecei a usar o Vendas Mais, minha equipe parou de perder follow-ups. A IA avisa o momento certo de entrar em contato — o resultado apareceu na primeira semana.',
    metric: '↑ 38%',
    metricLabel: 'de aumento em conversão',
  },
  {
    id: 2,
    name: 'Fernanda Rios',
    role: 'Representante Comercial',
    company: 'Varejo · MG',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    quote: 'Eu trabalhava com planilha e perdia tempo demais organizando contatos. Hoje o app faz isso sozinho e eu foco em vender. Em dois meses bati a meta que não batia há seis.',
    metric: '2x',
    metricLabel: 'a meta em 60 dias',
  },
  {
    id: 3,
    name: 'Rafael Souza',
    role: 'Diretor de Vendas',
    company: 'SaaS B2B · RJ',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    quote: 'A IA não só lembra de ligar — ela sugere o próximo passo certo para cada cliente. Minha equipe de 8 vendedores aumentou o ticket médio em 25% em 90 dias.',
    metric: '↑ 25%',
    metricLabel: 'no ticket médio',
  },
  {
    id: 4,
    name: 'Juliana Martins',
    role: 'Consultora Autônoma',
    company: 'Vendas · RS',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    quote: 'Trabalho sozinha e o Vendas Mais virou meu assistente pessoal. Ele organiza, lembra, sugere e me diz quais clientes têm mais chance de fechar. Indispensável.',
    metric: '3h',
    metricLabel: 'economizadas por dia',
  },
];

export function Depoimentos() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] relative text-[#f5f5f5] z-10 border-t border-white/5">
      <div className="w-full px-8 md:px-16 lg:px-24 mx-auto max-w-[1600px]">
        {/* Big Title (Top Left) */}
        <h1 className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[140px] leading-none tracking-tighter text-[#222] font-medium mb-16 lg:mb-24 select-none lg:-ml-4 opacity-70">
          Resultados
        </h1>

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start mb-16 lg:mb-24 gap-12 lg:gap-16 w-full mt-0 bg-[#0a0a0a] scroll-m-20" id="depoimentos">
          {/* Coluna 1 */}
          <div className="flex-shrink-0 w-full lg:w-48 lg:border-l border-white/10 lg:pl-6 pt-2">
             <div className="text-3xl font-light tracking-tight text-white mb-2">003</div>
             <div className="text-white/50 text-[14px] tracking-wide">depoimentos</div>
          </div>
          
          {/* Coluna 2 */}
          <div className="flex-grow max-w-[700px] lg:border-l border-white/10 lg:pl-8 pt-2">
             <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-tighter font-medium text-[#eaeaea]">
                O que dizem os vendedores<br className="hidden md:block" /> que já usam o Vendas Mais.
             </h2>
          </div>
          
          {/* Coluna 3 */}
          <div className="lg:w-72 shrink-0 lg:border-l border-white/10 lg:pl-8 pt-2 self-start mt-8 lg:mt-0">
            <p className="text-[#8b98a5] text-[15px] leading-relaxed">
               Resultados reais de vendedores como você.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 lg:h-[600px] rounded-2xl overflow-hidden bg-white/5 border border-white/5">
          {/* Box 1: Image (Left Column) */}
          <div className="lg:col-span-4 bg-[#141414] relative h-[400px] lg:h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTestimonial.id}
                src={activeTestimonial.photo}
                alt={activeTestimonial.name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
              />
            </AnimatePresence>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent"></div>
            
            {/* Minimal glowing line at the bottom similar to the original image */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-1/2 h-5 bg-blue-500/20 blur-xl"></div>
          </div>

          {/* Right Columns Wrapper */}
          <div className="lg:col-span-8 flex flex-col gap-1">
            
            {/* Top Row */}
            <div className="flex flex-col md:flex-row gap-1 h-auto md:h-24 shrink-0">
              {/* Process / Header Box */}
              <div className="bg-[#141414] flex-grow flex items-center justify-between px-8 py-6 md:py-0">
                <span className="text-white/50 text-[15px] tracking-wide">Depoimentos</span>
                
                {/* Dots indicator */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 transition-all duration-300 rounded-full ${
                        idx === activeIndex 
                          ? "w-8 bg-blue-500" 
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                  <span className="text-white/40 text-[13px] tracking-widest ml-2 tabular-nums">
                    {activeIndex + 1}/{testimonials.length}
                  </span>
                </div>
              </div>
              
              {/* Arrows Nav Box */}
              <div className="bg-[#141414] w-full md:w-48 lg:w-64 shrink-0 flex items-center justify-center gap-8 py-6 md:py-0">
                <button 
                  onClick={prevTestimonial}
                  className="text-white/40 hover:text-blue-400 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={24} strokeWidth={1} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="text-white/40 hover:text-blue-400 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={24} strokeWidth={1} />
                </button>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row gap-1 flex-grow">
              
              {/* Main Content Box */}
              <div className="bg-[#141414] flex-grow p-8 lg:p-12 flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full"
                  >
                    <h3 className="text-2xl md:text-[28px] leading-tight font-medium tracking-tight mb-2">
                      {activeTestimonial.name} — <span className="text-white/50">{activeTestimonial.role}</span>
                    </h3>
                    
                    <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mt-6 flex-grow max-w-2xl">
                      "{activeTestimonial.quote}"
                    </p>
                    
                    <div className="mt-8 flex items-baseline gap-4 pt-8 border-t border-white/5">
                      <span className="text-4xl md:text-5xl font-medium tracking-tighter">
                        {activeTestimonial.metric}
                      </span>
                      <span className="text-white/40 text-sm tracking-wide">
                        {activeTestimonial.metricLabel}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Box 4: CTA Box */}
              <div className="bg-[#141414] w-full md:w-48 lg:w-64 shrink-0 p-8 flex flex-col justify-center items-center text-center">
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-colors group mb-6 text-sm font-medium tracking-wide">
                  Quero Vender Mais 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-white/40 text-[13px] leading-relaxed">
                  Comece agora e veja os resultados.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

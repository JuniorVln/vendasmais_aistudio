import { motion } from "motion/react";
import { LayoutDashboard, Zap, CalendarClock, Workflow, BarChart3, Users, Sparkles, ArrowUpRight } from "lucide-react";

export function Evolution() {
  return (
    <section className="py-24 lg:py-32 bg-[#02050A] relative text-[#f5f5f5] z-10 border-t border-white/5 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full mx-auto max-w-[1600px] relative z-20 px-8 md:px-16 lg:px-24">
        
        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-12 mb-32 relative">
          
          {/* Left Column - Title */}
          <div className="w-full lg:w-1/3 mb-16 lg:mb-0 z-30 self-start mt-12">
            <p className="text-gray-500 tracking-[0.2em] font-semibold text-xs mb-6 uppercase">
              Plataforma Completa
            </p>
            <h2 className="text-[52px] sm:text-[64px] lg:text-[76px] font-medium tracking-tight leading-[1.05] text-white">
              Não é apenas<br />
              <span className="text-[#3b82f6]">mais um CRM.</span>
            </h2>
          </div>

          {/* Center Column - Phone & Mockup */}
          <div className="w-full lg:w-1/3 flex justify-center relative z-20">
            {/* Phone Mockup */}
            <div className="relative w-[300px] h-[640px] bg-[#0A0D14] rounded-[2.5rem] border-[6px] border-[#1C212D] shadow-[0_30px_100px_-10px_rgba(59,130,246,0.3)] overflow-hidden flex flex-col z-20">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30" />
              
              {/* Fake App Content inside Phone */}
              <div className="flex-1 w-full flex flex-col pt-14 px-4 pb-6 bg-[#04060A]">
                 <div className="flex justify-between items-center mb-6">
                    <span className="text-white/60 text-xs font-medium">Dashboard</span>
                    <div className="flex gap-2">
                       <div className="w-4 h-4 rounded-full bg-white/10" />
                       <div className="w-4 h-4 rounded-full bg-white/10" />
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="h-24 bg-[#111622] rounded-xl border border-white/5" />
                    <div className="h-24 bg-[#111622] rounded-xl border border-white/5" />
                    <div className="h-24 bg-[#111622] rounded-xl border border-white/5" />
                    <div className="h-24 bg-[#111622] rounded-xl border border-white/5" />
                 </div>

                 <div className="w-full h-32 bg-[#111622] border border-white/5 rounded-xl mb-4" />
                 
                 {/* Bottom Nav Bar */}
                 <div className="mt-auto flex justify-between px-4 py-3 bg-[#111622] rounded-2xl border border-white/5">
                    <div className="w-6 h-6 rounded-md bg-white/20" />
                    <div className="w-6 h-6 rounded-md bg-white/10" />
                    <div className="w-6 h-6 rounded-md bg-white/10" />
                 </div>
              </div>
            </div>

            {/* FLOATING CARDS */}

            {/* Left Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute left-[-240px] sm:left-[-320px] top-[140px] w-[280px] sm:w-[320px] bg-[#0D121D]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-30"
            >
              <div className="flex items-center gap-3 mb-2 text-white">
                 <LayoutDashboard className="w-5 h-5" />
                 <h4 className="font-semibold text-[15px]">Pipeline</h4>
              </div>
              <p className="text-[#8492a6] text-sm leading-relaxed">
                 Funis visuais completos. Uma visão por etapa para fechar mais.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute left-[-280px] sm:left-[-380px] top-[280px] w-[280px] sm:w-[320px] bg-[#0D121D]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-30"
            >
              <div className="flex items-center gap-3 mb-2 text-white">
                 <Zap className="w-5 h-5" />
                 <h4 className="font-semibold text-[15px]">Integrações</h4>
              </div>
              <p className="text-[#8492a6] text-sm leading-relaxed">
                 Zapi, Meta e ferramentas pra sair do chat e ir pra venda.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute left-[-180px] sm:left-[-260px] top-[440px] w-[280px] sm:w-[320px] bg-[#0D121D]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-30"
            >
              <div className="flex items-center gap-3 mb-2 text-white">
                 <CalendarClock className="w-5 h-5" />
                 <h4 className="font-semibold text-[15px]">Follow-up</h4>
              </div>
              <p className="text-[#8492a6] text-sm leading-relaxed">
                 Lembretes e alertas para interagir com contexto real.
              </p>
            </motion.div>

            {/* Right Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute right-[-240px] sm:right-[-320px] top-[80px] w-[280px] sm:w-[320px] bg-[#0D121D]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-30"
            >
              <div className="flex items-center gap-3 mb-2 text-white">
                 <Workflow className="w-5 h-5" />
                 <h4 className="font-semibold text-[15px]">Workflows</h4>
                 <span className="text-[9px] font-bold tracking-widest uppercase bg-[#212b3e] text-blue-400 px-2 py-0.5 rounded-full ml-auto">Novo</span>
              </div>
              <p className="text-[#8492a6] text-sm leading-relaxed">
                 Uma nova forma de operar. Passo a passo guiado e prático.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute right-[-220px] sm:right-[-280px] top-[240px] w-[280px] sm:w-[320px] bg-[#0D121D]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-30"
            >
              <div className="flex items-center gap-3 mb-2 text-white">
                 <BarChart3 className="w-5 h-5" />
                 <h4 className="font-semibold text-[15px]">Analytics</h4>
              </div>
              <p className="text-[#8492a6] text-sm leading-relaxed">
                 Relatórios em tempo real com métricas cruciais do mercado.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute right-[-260px] sm:right-[-340px] top-[380px] w-[280px] sm:w-[320px] bg-[#0D121D]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-30"
            >
              <div className="flex items-center gap-3 mb-2 text-white">
                 <Users className="w-5 h-5" />
                 <h4 className="font-semibold text-[15px]">Colaboração</h4>
              </div>
              <p className="text-[#8492a6] text-sm leading-relaxed">
                 +13.000 vendedores construindo a gestão no dia a dia.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute right-[-180px] sm:right-[-260px] top-[540px] w-[280px] sm:w-[320px] bg-[#0D121D]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-30"
            >
              <div className="flex items-center gap-3 mb-2 text-white">
                 <Sparkles className="w-5 h-5" />
                 <h4 className="font-semibold text-[15px]">Vendas Mais IA</h4>
              </div>
              <p className="text-[#8492a6] text-sm leading-relaxed">
                 A IA do Vendas Mais que monta sua trilha no ritmo certo.
              </p>
            </motion.div>

          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-end">
            <button className="hidden lg:flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Academy Pass
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

import { motion, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      audience: "Para vendedores autônomos",
      price: "497",
      period: "Mês",
      seats: "1",
      features: [
        "1 Usuário",
        "CRM Completo",
        "Scoring de Leads Padrão",
        "Automação (até 5k envios)",
        "Suporte por Email"
      ],
      cta: "Selecionar Plano",
      isPopular: false
    },
    {
      name: "Pro",
      audience: "A máquina para equipes",
      price: "1.997",
      period: "Mês",
      seats: "10",
      features: [
        "Até 10 Usuários",
        "Scoring Neural Profundo",
        "Scanner de Chamadas Ao Vivo",
        "Follow-ups Ilimitados",
        "Propostas Automatizadas",
        "Dashboard Predictivo"
      ],
      cta: "Selecionar Plano",
      isPopular: true
    },
    {
      name: "Enterprise",
      audience: "Centros de operação",
      price: "Custom",
      period: "Ano",
      seats: "Ilimitado",
      features: [
        "Usuários Infinitos",
        "IA Treinada na sua Base",
        "Integrações SAP/Salesforce",
        "Roteamento Tático de Leads",
        "SLA 99.9%",
        "Atendimento Prioritário VIP"
      ],
      cta: "Falar com Vendas",
      isPopular: false
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] relative text-[#f5f5f5] z-10 border-t border-white/5" id="pricing">
      <div className="w-full px-8 md:px-16 lg:px-24 mx-auto max-w-[1600px] relative z-10">
        {/* Big Ghost Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[140px] leading-none tracking-tighter text-[#555] font-medium mb-16 lg:mb-24 select-none lg:-ml-4"
        >
          Planos
        </motion.h1>

        {/* Header with stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col lg:flex-row items-start mb-16 lg:mb-24 gap-12 lg:gap-16 w-full mt-0 bg-[#0a0a0a]"
        >
          {/* Coluna 1 */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16,1,0.3,1] } } }}
            className="flex-shrink-0 w-full lg:w-48 lg:border-l border-white/10 lg:pl-6 pt-2"
          >
             <div className="text-3xl font-light tracking-tight text-white mb-2">004</div>
             <div className="text-white/50 text-[14px] tracking-wide uppercase">planos</div>
          </motion.div>
          
          {/* Coluna 2 */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16,1,0.3,1] } } }}
            className="flex-grow max-w-[700px] lg:border-l border-white/10 lg:pl-8 pt-2"
          >
             <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-tighter font-medium text-[#eaeaea]">
                Escolha o plano certo<br className="hidden md:block" /> para o seu ritmo de vendas.
             </h2>
          </motion.div>
          
          {/* Coluna 3 */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16,1,0.3,1] } } }}
            className="lg:w-72 shrink-0 lg:border-l border-white/10 lg:pl-8 pt-2 self-start mt-8 lg:mt-0"
          >
            <p className="text-[#8b98a5] text-[15px] leading-relaxed">
               Sem contrato. Sem surpresa.<br />
               Cancele quando quiser.
            </p>
          </motion.div>
        </motion.div>

        {/* Pricing Rows */}
        <div className="flex flex-col gap-4">
          {plans.map((plan, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 30, clipPath: "inset(40% 0% 60% 0% round 12px)" }}
               whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 12px)" }}
               viewport={{ once: true, margin: "-60px" }}
               transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
               whileHover={{
                 borderColor: plan.isPopular ? "rgba(59,130,246,0.7)" : "rgba(255,255,255,0.15)",
               }}
               className={`grid grid-cols-1 md:grid-cols-12 gap-0 border ${plan.isPopular ? 'border-blue-500/50 bg-[#111827]' : 'border-[#222] bg-[#111]'} rounded-xl overflow-hidden transition-colors`}
             >
                {/* Column 1: Title & Audience */}
                <div className="md:col-span-3 p-8 border-b md:border-b-0 md:border-r border-[#222] flex flex-col justify-between items-start relative">
                   <div>
                      <h3 className="text-3xl font-medium tracking-tight mb-2 text-white">{plan.name}</h3>
                      <p className="text-[#8b98a5] text-sm">{plan.audience}</p>
                   </div>
                   
                   {/* Decorative Box matching video */}
                   <div className="w-16 h-16 mt-8 rounded-lg bg-gradient-to-br from-[#222] to-[#111] border border-[#333] shadow-inner shadow-black/50 hidden md:block"></div>
                </div>

                {/* Column 2: Price & Seats Breakdown */}
                <div className="md:col-span-2 p-8 border-b md:border-b-0 md:border-r border-[#222] flex flex-col justify-start">
                   <div className="mb-8">
                      <p className="text-[10px] text-white/40 tracking-widest uppercase mb-2">Investimento</p>
                      <div className="flex items-baseline mb-1">
                         {plan.price !== 'Custom' && <span className="text-white/60 text-lg mr-1 font-light">R$</span>}
                         <span className="text-4xl lg:text-5xl font-medium text-white tracking-tighter">{plan.price}</span>
                      </div>
                      <p className="text-xs text-[#8b98a5] capitalize">{plan.price === 'Custom' ? '' : plan.period}</p>
                   </div>
                   <div>
                      <p className="text-[10px] text-white/40 tracking-widest uppercase mb-1">Assentos</p>
                      <p className="text-white font-medium text-lg">{plan.seats}</p>
                   </div>
                </div>

                {/* Column 3: Features */}
                <div className="md:col-span-5 p-8 border-b md:border-b-0 md:border-r border-[#222]">
                   <p className="text-[10px] text-white/40 tracking-widest uppercase mb-4">O que está incluso</p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                     {plan.features.map((feat, i) => (
                       <li key={i} className="flex items-center gap-2 text-white/80">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
                         {feat}
                       </li>
                     ))}
                   </ul>
                </div>

                {/* Column 4: CTA */}
                <div className="md:col-span-2 p-8 flex items-center justify-center bg-[#0a0a0a]/50">
                   <motion.button
                     whileHover={{ scale: 1.04, y: -2 }}
                     whileTap={{ scale: 0.97 }}
                     className={`w-full py-4 px-6 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 ${plan.isPopular ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20' : 'bg-transparent border border-[#3f3f46] hover:border-white text-white'}`}
                   >
                     {plan.cta}
                     <ArrowRight className="w-4 h-4" />
                   </motion.button>
                </div>

             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

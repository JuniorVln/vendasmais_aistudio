import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Twitter, Linkedin, Instagram, Youtube, CheckCircle2 } from "lucide-react";
import logo from "../assets/Logo_Vendas_+_Branco.png";

// Infinite scrolling marquee
function Marquee({ items }: { items: string[] }) {
  return (
    <div className="w-full overflow-hidden border-t border-b border-white/5 py-5 my-0 relative">
      <div
        className="flex gap-16 whitespace-nowrap"
        style={{
          animation: "marquee 25s linear infinite",
          width: "max-content",
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-white/20 text-sm font-medium tracking-[0.2em] uppercase flex items-center gap-16">
            {item}
            <span className="text-blue-500/40 text-lg">✦</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}

export function Footer() {
  const marqueeItems = ["CRM Inteligente", "Follow-up Automático", "IA Nativa", "Propostas Automatizadas", "Dashboard Preditivo", "Qualificação de Leads", "Neural Core v2", "Aumentar Vendas"];
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus("submitting");
    setTimeout(() => setNewsletterStatus("success"), 1000);
  };

  return (
    <footer className="w-full text-white bg-[#0A0A0A] font-sans">
      
      <Marquee items={marqueeItems} />
      
      {/* Form & Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#111] px-8 md:px-16 lg:px-24 py-20 border-b border-[#222]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-between">
             <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-white/50 mb-8">Follow us</h3>
                <div className="flex items-center gap-4 text-white/80">
                  <Linkedin className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
                  <Twitter className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
                  <Instagram className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
                  <Youtube className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
                </div>
             </div>

             <div className="mt-16 lg:mt-32">
               <h3 className="text-sm font-medium tracking-widest uppercase text-white/50 mb-6">O que nós oferecemos</h3>
               <ul className="space-y-3">
                 <li className="flex items-center gap-2 text-white/80 font-light text-sm">
                   <div className="w-1 h-1 rounded-full bg-blue-500" /> Ferramentas de IA para escala
                 </li>
                 <li className="flex items-center gap-2 text-white/80 font-light text-sm">
                   <div className="w-1 h-1 rounded-full bg-blue-500" /> Otimização preditiva em tempo real
                 </li>
                 <li className="flex items-center gap-2 text-white/80 font-light text-sm">
                   <div className="w-1 h-1 rounded-full bg-blue-500" /> Setup corporativo e escalável
                 </li>
                 <li className="flex items-center gap-2 text-white/80 font-light text-sm">
                   <div className="w-1 h-1 rounded-full bg-blue-500" /> Automação de follow-up
                 </li>
               </ul>
             </div>
          </div>

          <div className="bg-[#1A1A1A] rounded-2xl p-8 lg:p-12 border border-[#2A2A2A]">
             <h3 className="text-2xl lg:text-3xl font-medium tracking-tight mb-2">Tem uma dúvida ou desafio?</h3>
             <p className="text-white/50 text-sm font-light mb-8">Preencha o formulário — entraremos em contato com você o mais breve possível.</p>
             
             {formStatus === "success" ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="flex flex-col items-center justify-center py-8 text-center"
               >
                 <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                   <CheckCircle2 className="w-6 h-6 text-blue-400" />
                 </div>
                 <h4 className="text-xl font-medium mb-2">Mensagem Enviada!</h4>
                 <p className="text-white/50 text-sm">Entraremos em contato em breve.</p>
               </motion.div>
             ) : (
               <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <input required type="text" placeholder="Seu Nome" className="w-full bg-transparent border-b border-[#333] py-4 text-white placeholder-white/30 outline-none focus:border-blue-500 transition-colors" />
                  <input required type="email" placeholder="Seu Email" className="w-full bg-transparent border-b border-[#333] py-4 text-white placeholder-white/30 outline-none focus:border-blue-500 transition-colors" />
                  <input required type="text" placeholder="Sua Empresa" className="w-full bg-transparent border-b border-[#333] py-4 text-white placeholder-white/30 outline-none focus:border-blue-500 transition-colors" />
                  <button 
                    type="submit" 
                    disabled={formStatus === "submitting"}
                    className="mt-4 bg-white text-black font-medium py-4 rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? "Enviando..." : "Enviar Mensagem"}
                  </button>
               </form>
             )}
          </div>
          
        </div>
      </motion.div>

      {/* Actual Footer Links */}
      <div className="bg-[#0A0A0A] px-8 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
           <div>
              <div className="mb-6 group cursor-pointer inline-flex flex-col">
                <img src={logo} alt="Vendas Mais" className="h-8 md:h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
                The smarter way to build, run, and scale your business.
              </p>
           </div>
           
           <div className="flex flex-col gap-3 text-sm text-white/60 font-light">
              <a href="#home" className="hover:text-white transition-colors w-fit">Home</a>
              <a href="#features" className="hover:text-white transition-colors w-fit">Produto</a>
              <a href="#diferenciais" className="hover:text-white transition-colors w-fit">Diferenciais</a>
              <a href="#depoimentos" className="hover:text-white transition-colors w-fit">Depoimentos</a>
           </div>

           <div className="flex flex-col gap-3 text-sm text-white/60 font-light">
              <a href="#precos" className="hover:text-white transition-colors w-fit">Preços</a>
              <a href="#comunidade" className="hover:text-white transition-colors w-fit">Comunidade</a>
              <a href="#evolution" className="hover:text-white transition-colors w-fit">Plataforma Completa</a>
              <a href="#" className="hover:text-white transition-colors w-fit">Contato</a>
           </div>

           <div>
              <h3 className="text-white text-lg font-medium tracking-tight mb-2">Inscreva-se na Newsletter</h3>
              <p className="text-white/40 text-sm font-light mb-4">Receba as últimas notícias sobre vendas e IA.</p>
              
              {newsletterStatus === "success" ? (
                <div className="flex items-center gap-2 text-blue-400 text-sm mt-4">
                  <CheckCircle2 className="w-4 h-4" /> Inscrito com sucesso!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 border-b border-[#333] pb-2 focus-within:border-blue-500 transition-colors">
                  <input required type="email" placeholder="Seu Email" className="bg-transparent outline-none text-white w-full text-sm font-light placeholder-white/30" />
                  <button type="submit" disabled={newsletterStatus === "submitting"} className="text-white/50 hover:text-white transition-colors disabled:opacity-50">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#222] text-xs text-white/30 font-light">
          <p>2026 © Vendas Mais Labs. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Desenvolvido com o máximo padrão de arquitetura de Vendas.</p>
        </div>
      </div>

    </footer>
  );
}

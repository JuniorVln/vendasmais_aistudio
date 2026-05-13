import { motion } from "motion/react";
import { ArrowRight, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react";

export function Footer() {
  const ferramentas = ["vendas-mais", "vendas-mais", "vendas-mais", "vendas-mais", "vendas-mais", "vendas-mais"];

  return (
    <footer className="w-full text-white bg-[#0A0A0A] font-sans">
      
      {/* Form & Info Section - Dark */}
      <div className="bg-[#111] px-8 md:px-16 lg:px-24 py-20 border-b border-[#222]">
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
             
             <form className="flex flex-col gap-4">
                <input type="text" placeholder="Seu Nome" className="w-full bg-transparent border-b border-[#333] py-4 text-white placeholder-white/30 outline-none focus:border-blue-500 transition-colors" />
                <input type="email" placeholder="Seu Email" className="w-full bg-transparent border-b border-[#333] py-4 text-white placeholder-white/30 outline-none focus:border-blue-500 transition-colors" />
                <input type="text" placeholder="Sua Empresa" className="w-full bg-transparent border-b border-[#333] py-4 text-white placeholder-white/30 outline-none focus:border-blue-500 transition-colors" />
             </form>
          </div>
          
        </div>
      </div>

      {/* Actual Footer Links */}
      <div className="bg-[#0A0A0A] px-8 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
           <div>
              <div className="mb-6 group cursor-pointer inline-flex flex-col">
                <img src="/assets/Logo_Vendas_%2B_Branco.png" alt="Vendas Mais" className="h-8 md:h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
                The smarter way to build, run, and scale your business.
              </p>
           </div>
           
           <div className="flex flex-col gap-3 text-sm text-white/60 font-light">
              <a href="#" className="hover:text-white transition-colors w-fit">Home</a>
              <a href="#" className="hover:text-white transition-colors w-fit">O que fazemos</a>
              <a href="#" className="hover:text-white transition-colors w-fit">O que tem dentro</a>
              <a href="#" className="hover:text-white transition-colors w-fit">Recursos</a>
              <a href="#" className="hover:text-white transition-colors w-fit">Preços</a>
              <a href="#" className="hover:text-white transition-colors w-fit">FAQ</a>
           </div>

           <div className="flex flex-col gap-3 text-sm text-white/60 font-light">
              <a href="#" className="hover:text-white transition-colors w-fit">Nossa Equipe</a>
              <a href="#" className="hover:text-white transition-colors w-fit">Blog</a>
              <a href="#" className="hover:text-white transition-colors w-fit">Contato</a>
              <a href="#" className="hover:text-white transition-colors w-fit">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors w-fit">Privacidade</a>
           </div>

           <div>
              <h3 className="text-white text-lg font-medium tracking-tight mb-2">Inscreva-se na Newsletter</h3>
              <p className="text-white/40 text-sm font-light mb-4">Receba as últimas notícias sobre vendas e IA.</p>
              <div className="flex items-center gap-2 border-b border-[#333] pb-2 focus-within:border-blue-500 transition-colors">
                <input type="email" placeholder="Seu Email" className="bg-transparent outline-none text-white w-full text-sm font-light placeholder-white/30" />
                <button className="text-white/50 hover:text-white transition-colors"><ArrowRight className="w-4 h-4" /></button>
              </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#222] text-xs text-white/30 font-light">
          <p>2026 © Vendas Mais Labs. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Desenvolvido com o máximo padrão de arquitetura de Vendas.</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </footer>
  );
}

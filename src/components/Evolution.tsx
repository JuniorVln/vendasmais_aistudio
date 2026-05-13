import { motion } from "motion/react";

export function Evolution() {
  return (
    <section className="pt-24 lg:pt-32 bg-[#02050A] relative text-[#f5f5f5] z-10 border-t border-white/5 overflow-hidden min-h-screen flex flex-col justify-end">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full mx-auto max-w-[1600px] relative z-20 px-8 md:px-16 lg:px-24">
        {/* Ghost title reveal */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 tracking-[0.2em] font-semibold text-xs mb-6 uppercase pt-8"
          >
            Plataforma Completa
          </motion.p>
        </div>
        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-4 mt-12 relative min-h-[680px]">
          
          {/* Left Column - Title */}
          <div className="w-full lg:w-[34%] mb-16 lg:mb-24 z-30 self-start mt-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[52px] sm:text-[64px] lg:text-[76px] font-medium tracking-tight leading-[1.05] text-white"
            >
              Não é apenas<br />
              <span className="text-[#3b82f6]">mais um CRM.</span>
            </motion.h2>
          </div>

          {/* Center Column - App image */}
          <div className="w-full lg:flex-1 flex justify-center lg:justify-end relative z-20 self-end">
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative z-20 w-[min(100%,560px)] sm:w-[min(100%,680px)] lg:w-[820px] xl:w-[940px] 2xl:w-[1040px]"
            >
              <img
                src="/evolution-platform.png"
                alt="Dashboard do app Vendas Mais"
                className="block w-full h-auto object-contain object-bottom drop-shadow-[0_30px_100px_rgba(59,130,246,0.28)]"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

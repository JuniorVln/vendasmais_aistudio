import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { useEffect, useRef } from "react";

// Char-by-char reveal component
function CharReveal({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const chars = text.split("");
  return (
    <span className={className} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.025,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth spring for parallax
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  const opacityBottom = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const yBottom = useTransform(smoothProgress, [0, 0.2], [0, -50]);

  const opacityCenter = useTransform(smoothProgress, [0.1, 0.55], [1, 0]);
  const yCenter = useTransform(smoothProgress, [0.1, 0.55], [0, -70]);

  const opacityTop = useTransform(smoothProgress, [0.35, 0.85], [1, 0]);
  const yTop = useTransform(smoothProgress, [0.35, 0.85], [0, -90]);

  // Parallax glow
  const glowY = useTransform(smoothProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let galaxyParticles: { x: number; y: number; z: number; angle: number; radius: number; r: number; alpha: number; speed: number }[] = [];
    let bgParticles: { x: number; y: number; r: number; vx: number; vy: number; alpha: number }[] = [];
    let w = 0, h = 0;
    let animId: number;

    const perspective = 400;
    const centerX = () => w / 2;
    const centerY = () => h / 2;

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      galaxyParticles = [];
      bgParticles = [];

      const numGalaxyParticles = 900;
      const galaxyRadius = Math.max(w, h) * 0.9;

      for (let i = 0; i < numGalaxyParticles; i++) {
        const distRandom = Math.random();
        const radius = Math.pow(distRandom, 1.5) * galaxyRadius;
        const y = (Math.random() - 0.5) * (galaxyRadius * 0.1) * (1 - distRandom * 0.8);
        galaxyParticles.push({
          x: 0, y, z: 0,
          angle: Math.random() * Math.PI * 2,
          radius,
          r: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.8 + 0.2,
          speed: 0.0003 + (1 - distRandom) * 0.0015,
        });
      }

      for (let i = 0; i < 180; i++) {
        bgParticles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.2,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          alpha: Math.random() * 0.45,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      bgParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle = `rgba(150, 220, 255, ${p.alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      const cx = centerX();
      const cy = centerY();
      const tiltX = -0.3;

      galaxyParticles.forEach((p) => {
        p.angle -= p.speed;
        const x3d = Math.cos(p.angle) * p.radius;
        const z3d = Math.sin(p.angle) * p.radius;
        const y3d = p.y;

        const tY = y3d * Math.cos(tiltX) - z3d * Math.sin(tiltX);
        const tZ = y3d * Math.sin(tiltX) + z3d * Math.cos(tiltX);
        const zOff = tZ + 800;

        if (zOff > 0) {
          const scale = perspective / zOff;
          const x2d = cx + x3d * scale;
          const y2d = cy + tY * scale;
          const radius2d = p.r * scale;

          if (x2d >= 0 && x2d <= w && y2d >= 0 && y2d <= h) {
            const zAlpha = Math.min(1, Math.max(0, 1 - (zOff - 300) / 1200));
            const finalAlpha = p.alpha * zAlpha;
            if (finalAlpha > 0.04) {
              ctx.beginPath();
              ctx.fillStyle = `rgba(150, 220, 255, ${finalAlpha})`;
              ctx.arc(x2d, y2d, radius2d, 0, Math.PI * 2);
              ctx.fill();
              if (radius2d > 1.5) {
                ctx.shadowBlur = 10 * scale;
                ctx.shadowColor = "rgba(56, 189, 248, 0.8)";
                ctx.fill();
                ctx.shadowBlur = 0;
              }
            }
          }
        }
      });

      animId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[270vh] bg-transparent">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-60 pointer-events-none" />

      {/* Animated Blue Glow */}
      <motion.div
        style={{ 
          y: glowY,
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none z-0"
        animate={{
          opacity: [0.06, 0.12, 0.06],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="sticky top-0 w-full h-screen px-8 md:px-12 lg:px-20 mx-auto relative z-10 flex flex-col justify-center overflow-hidden">

        {/* 3 Column Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8 w-full mt-24">

          {/* Left: Slogan */}
          <motion.div
            style={{ opacity: opacityTop, y: yTop }}
            className="lg:w-48 shrink-0 flex gap-3 lg:pt-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-3 h-full"
            >
              <motion.div
                className="w-[2px] bg-white/20 self-stretch rounded-full"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "top" }}
              />
              <div className="text-white/70 text-[16px] md:text-[18px] font-light tracking-tight leading-snug py-1">
                Você inova,<br />
                <strong className="text-white font-medium">nós escalamos.</strong>
              </div>
            </motion.div>
          </motion.div>

          {/* Center: Headline */}
          <motion.div
            style={{ opacity: opacityCenter, y: yCenter }}
            className="flex-grow max-w-[1000px] flex flex-col"
          >
            <div className="flex flex-col">
              <h1 className="text-[48px] sm:text-[72px] md:text-[92px] lg:text-[110px] font-medium tracking-tighter leading-[0.9] text-[#f5f5f5]">
                <span className="flex items-center gap-4 md:gap-8 mb-4">
                  <motion.div
                    className="w-8 md:w-16 lg:w-24 h-[2px] md:h-[4px] bg-white translate-y-1 lg:translate-y-2 shrink-0"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left" }}
                  />
                  <span className="inline-block">
                    <CharReveal text="O futuro das" delay={0.3} />
                  </span>
                </span>
                <span className="text-blue-500 block pb-4">
                  <CharReveal text="vendas chegou." delay={0.6} />
                </span>
              </h1>

              {/* Sub headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 w-full"
              >
                <div className="max-w-[340px]">
                  <h2 className="text-2xl lg:text-[28px] font-medium tracking-tight mb-2 text-white">Veja na prática</h2>
                  <p className="text-[#8b98a5] text-sm md:text-base leading-relaxed font-light mt-4">
                    Faça um tour guiado e explore todas as funcionalidades da plataforma ao vivo ao nosso lado.
                  </p>
                </div>

                <div className="flex items-center gap-8">
                  <div className="h-[1px] w-16 bg-white/20 hidden sm:block" />
                  <motion.button
                    className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium text-sm group shadow-lg shadow-blue-500/20"
                    whileHover={{ scale: 1.04, backgroundColor: "rgb(37,99,235)", boxShadow: "0 20px 40px rgba(59,130,246,0.35)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    <LayoutGrid className="w-5 h-5 opacity-80" />
                    Assista à Demo
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{ width: "auto", opacity: 1 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Card */}
          <motion.div
            style={{ opacity: opacityTop, y: yTop }}
            className="w-full sm:w-80 lg:w-72 shrink-0 cursor-pointer group mt-8 lg:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, x: 30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: "0 30px 60px rgba(59,130,246,0.2)" }}
              className="bg-[#111111] border border-[#222] rounded-2xl p-5 shadow-2xl hover:border-white/20 transition-colors duration-500 relative overflow-hidden h-[380px] flex flex-col justify-end"
            >
              {/* Background image */}
              <div className="absolute inset-x-0 top-2 bottom-0 z-0 flex justify-center overflow-hidden">
                <img
                  src="/iphone.png"
                  alt="Dashboard Vendas +"
                  className="w-[130%] max-w-none h-auto object-contain object-top opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-[#111]/30" />
              </div>

              <div className="flex items-center justify-between pointer-events-auto relative z-10 border-t border-white/10 pt-4 mt-auto bg-[#111] bg-opacity-80 backdrop-blur-sm -mx-5 px-5 -mb-5 pb-5">
                <div>
                  <h3 className="text-white text-sm font-medium">Dashboard Vendas +</h3>
                  <p className="text-blue-500 text-[10px] mt-1.5 tracking-widest uppercase font-bold">// Último Lançamento</p>
                </div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="w-5 h-5 text-blue-500" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          style={{ opacity: opacityBottom, y: yBottom }}
          className="mt-12 lg:mt-16 relative w-full lg:pl-[240px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-12 lg:gap-24 w-full justify-center lg:justify-start"
          >
            {[
              { value: "98.5%", label: "Aumento de Conversão", sub: "Monitoramento ininterrupto" },
              { value: "+31.2%", label: "Performance em Vendas", sub: "Suite Otimizada com IA" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex gap-4 sm:gap-6 items-center sm:items-start flex-row sm:flex-col lg:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-3xl sm:text-4xl text-blue-500 font-medium tracking-tighter">{stat.value}</div>
                <div className="flex flex-col">
                  <div className="text-[13px] text-white tracking-wide font-medium">{stat.label}</div>
                  <div className="text-[12px] text-white/50 mt-0.5 font-light">{stat.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Play, LayoutGrid } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Fade out stats first (bottom)
  const opacityBottom = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const yBottom = useTransform(scrollYProgress, [0, 0.25], [0, -40]);

  // Fade out center next (middle)
  const opacityCenter = useTransform(scrollYProgress, [0.15, 0.6], [1, 0]);
  const yCenter = useTransform(scrollYProgress, [0.15, 0.6], [0, -60]);

  // Fade out slogan and card last (top)
  const opacityTop = useTransform(scrollYProgress, [0.4, 0.9], [1, 0]);
  const yTop = useTransform(scrollYProgress, [0.4, 0.9], [0, -80]);

  // Add 3D rotating galaxy particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Both galaxy and background particles
    let galaxyParticles: { x: number, y: number, z: number, angle: number, radius: number, r: number, alpha: number, speed: number }[] = [];
    let bgParticles: { x: number, y: number, r: number, vx: number, vy: number, alpha: number }[] = [];
    
    let w = 0, h = 0;
    
    // Config for galaxy
    const perspective = 400;
    const centerX = () => w / 2;
    const centerY = () => h / 2;
    
    const init = () => {
       w = canvas.width = window.innerWidth;
       h = canvas.height = window.innerHeight;
       galaxyParticles = [];
       bgParticles = [];
       
       // 1. Initialize Galaxy particles
       const numGalaxyParticles = 800;
       const galaxyRadius = Math.max(w, h) * 0.8;
       
       for (let i = 0; i < numGalaxyParticles; i++) {
         const distRandom = Math.random();
         const radius = Math.pow(distRandom, 1.5) * galaxyRadius;
         const y = (Math.random() - 0.5) * (galaxyRadius * 0.1) * (1 - distRandom * 0.8);
         const angle = Math.random() * Math.PI * 2;
         
         galaxyParticles.push({
           x: 0, 
           y: y,
           z: 0,
           angle: angle,
           radius: radius,
           r: Math.random() * 2 + 0.5,
           alpha: Math.random() * 0.8 + 0.2,
           speed: 0.0005 + (1 - distRandom) * 0.002
         });
       }

       // 2. Initialize Original Background particles
       for (let i = 0; i < 200; i++) {
         bgParticles.push({
           x: Math.random() * w,
           y: Math.random() * h,
           r: Math.random() * 1.5,
           vx: (Math.random() - 0.5) * 0.1,
           vy: (Math.random() - 0.5) * 0.1,
           alpha: Math.random() * 0.5
         });
       }
    };

    let time = 0;
    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, w, h);
      
      // Draw background particles first
      bgParticles.forEach(p => {
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
        
        if (p.r > 2) {
           ctx.shadowBlur = 15;
           ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
           ctx.fill();
           ctx.shadowBlur = 0;
        }
      });
      
      // Draw galaxy particles
      const cx = centerX();
      const cy = centerY();
      const tiltX = -0.3; // Tilt forward
      
      galaxyParticles.forEach(p => {
        p.angle -= p.speed; // Rotate
        
        // Calculate 3D position
        let x3d = Math.cos(p.angle) * p.radius;
        let z3d = Math.sin(p.angle) * p.radius;
        let y3d = p.y;
        
        // Apply tilt rotation around X axis
        const tY = y3d * Math.cos(tiltX) - z3d * Math.sin(tiltX);
        const tZ = y3d * Math.sin(tiltX) + z3d * Math.cos(tiltX);
        
        // Offset Z to put the galaxy in front of camera
        const zOff = tZ + 800;
        
        if (zOff > 0) {
           const scale = perspective / zOff;
           const x2d = cx + x3d * scale;
           const y2d = cy + tY * scale;
           
           // Make particles closer appear larger
           const radius2d = p.r * scale;
           
           if (x2d >= 0 && x2d <= w && y2d >= 0 && y2d <= h) {
              // Dim points that are far away
              const zAlpha = Math.min(1, Math.max(0, 1 - (zOff - 300) / 1200));
              const finalAlpha = p.alpha * zAlpha;
              
              if (finalAlpha > 0.05) {
                ctx.beginPath();
                ctx.fillStyle = `rgba(150, 220, 255, ${finalAlpha})`;
                ctx.arc(x2d, y2d, radius2d, 0, Math.PI * 2);
                ctx.fill();
                
                if (radius2d > 1.5) {
                   ctx.shadowBlur = 10 * scale;
                   ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
                   ctx.fill();
                   ctx.shadowBlur = 0;
                }
              }
           }
        }
      });
      
      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-transparent">
      {/* Immersive Particle Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-60 pointer-events-none" />
      
      {/* Subtle Blue Glow from Center */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] z-0 pointer-events-none" />
      
      <div className="sticky top-0 w-full h-screen px-8 md:px-12 lg:px-20 mx-auto relative z-10 flex flex-col justify-center overflow-hidden">
        
        {/* 3 Column Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8 w-full mt-24">
            
            {/* Left Column: Slogan */}
            <motion.div
              style={{ opacity: opacityTop, y: yTop }}
              className="lg:w-48 shrink-0 flex gap-3 lg:pt-8"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex gap-3 h-full"
              >
                <div className="w-[2px] bg-white/20 self-stretch rounded-full" />
                <div className="text-white/70 text-[16px] md:text-[18px] font-light tracking-tight leading-snug py-1">
                  Você inova,<br/>
                  <strong className="text-white font-medium">nós escalamos.</strong>
                </div>
              </motion.div>
            </motion.div>

            {/* Center Column: Massive Headline & CTA */}
            <motion.div
              style={{ opacity: opacityCenter, y: yCenter }}
              className="flex-grow max-w-[1000px] flex flex-col"
            >
              <motion.div
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 className="flex flex-col"
              >
                <h1 className="text-[48px] sm:text-[72px] md:text-[92px] lg:text-[110px] font-medium tracking-tighter leading-[0.9] text-[#f5f5f5]">
                  <span className="flex items-center gap-4 md:gap-8 mb-4">
                    <div className="w-8 md:w-16 lg:w-24 h-[2px] md:h-[4px] bg-white translate-y-1 lg:translate-y-2"></div>
                    O futuro das
                  </span>
                  <span className="text-blue-500 block">vendas chegou.</span>
                </h1>

                {/* Sub headline and CTA under text */}
                <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 w-full">
                    <div className="max-w-[340px]">
                      <h2 className="text-2xl lg:text-[28px] font-medium tracking-tight mb-2 text-white">Veja na prática</h2>
                      <p className="text-[#8b98a5] text-sm md:text-base leading-relaxed font-light mt-4">
                        Faça um tour guiado e explore todas as funcionalidades da plataforma ao vivo ao nosso lado.
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-8">
                      <div className="h-[1px] w-16 bg-white/20 hidden sm:block"></div>
                      <button className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all duration-300 font-medium text-sm group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
                        <LayoutGrid className="w-5 h-5 opacity-80" />
                        Assista à Demo
                      </button>
                    </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Floating Card */}
            <motion.div
              style={{ opacity: opacityTop, y: yTop }}
              className="w-full sm:w-80 lg:w-72 shrink-0 cursor-pointer group mt-8 lg:mt-0"
            >
              <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="bg-[#111111] border border-[#222] rounded-2xl p-5 shadow-2xl hover:border-white/20 transition-all duration-300 relative overflow-hidden h-[240px] flex flex-col justify-end"
              >
                {/* Background graphic effect */}
                <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-blue-600/30 via-blue-900/10 to-transparent z-0"></div>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1 h-32 bg-blue-400/50 shadow-[0_0_30px_10px_rgba(59,130,246,0.4)] z-0 rounded-full blur-[2px]"></div>

                <div className="flex items-center justify-between pointer-events-auto relative z-10 border-t border-white/10 pt-4 mt-auto bg-[#111] bg-opacity-80 backdrop-blur-sm -mx-5 px-5 -mb-5 pb-5">
                  <div>
                      <h3 className="text-white text-sm font-medium">Neural Core v2</h3>
                      <p className="text-blue-500 text-[10px] mt-1.5 tracking-widest uppercase font-bold">// Último Lançamento</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
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
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-12 lg:gap-24 w-full justify-center lg:justify-start"
           >
              <div className="flex gap-4 sm:gap-6 items-center sm:items-start flex-row sm:flex-col lg:flex-row">
                 <div className="text-3xl sm:text-4xl text-blue-500 font-medium tracking-tighter">98.5<span className="text-blue-400/70">%</span></div>
                 <div className="flex flex-col">
                    <div className="text-[13px] text-white tracking-wide font-medium">Aumento de Conversão</div>
                    <div className="text-[12px] text-white/50 mt-0.5 font-light">Monitoramento ininterrupto</div>
                 </div>
              </div>
              
              <div className="flex gap-4 sm:gap-6 items-center sm:items-start flex-row sm:flex-col lg:flex-row">
                 <div className="text-3xl sm:text-4xl text-blue-500 font-medium tracking-tighter"><span className="text-blue-400/70">+</span>31.2<span className="text-blue-400/70">%</span></div>
                 <div className="flex flex-col">
                    <div className="text-[13px] text-white tracking-wide font-medium">Performance em Vendas</div>
                    <div className="text-[12px] text-white/50 mt-0.5 font-light">Suite Otimizada com IA</div>
                 </div>
              </div>
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

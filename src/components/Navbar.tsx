import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import logo from "../assets/Logo_Vendas_+_Branco.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      setScrolled(v > 40);
    });
    return unsubscribe;
  }, [scrollY]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Produto", href: "#features" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Preços", href: "#precos" },
    { name: "Comunidade", href: "#comunidade" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled && !isOpen ? "rgba(3,7,18,0.85)" : "rgba(3,7,18,0)",
            backdropFilter: scrolled && !isOpen ? "blur(20px)" : "blur(0px)",
            borderBottomColor: scrolled && !isOpen ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0)",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full border-b py-4 px-8 md:px-12 lg:px-20 pointer-events-auto"
        >
          <div className="w-full mx-auto flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-1 group cursor-pointer"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img src={logo} alt="Vendas Mais" className="h-6 md:h-8 w-auto relative z-10" />
            </motion.div>

            {/* Hamburger */}
            <button 
              onClick={() => setIsOpen(true)}
              className="text-white hover:text-blue-400 transition-colors w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none"
            >
              <div className="w-8 h-[1.5px] bg-current rounded-full" />
              <div className="w-5 h-[1.5px] bg-current rounded-full" />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-[60] flex justify-end"
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full md:w-[400px] h-full bg-[#0a0f1c] border-l border-white/5 flex flex-col shadow-2xl overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6 md:p-8">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 flex flex-col items-end px-8 md:px-12 pb-12 gap-6 mt-12">
                {navLinks.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white/70 hover:text-white text-3xl md:text-4xl font-medium tracking-tight transition-colors duration-200"
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + navLinks.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-12 w-full"
                >
                  <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-lg font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                    Começar agora
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

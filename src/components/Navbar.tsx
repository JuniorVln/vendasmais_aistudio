import { motion } from "motion/react";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 py-5 px-8 md:px-12 lg:px-20 pointer-events-none"
    >
      <div className="w-full mx-auto flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <div className="flex items-center gap-1 group cursor-pointer">
          <img src="/assets/Logo_Vendas_%2B_Branco.png" alt="Vendas Mais" className="h-6 md:h-8 w-auto relative z-10" />
        </div>

        {/* Hamburger */}
        <button className="text-white hover:text-blue-400 transition-colors w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none">
           <div className="w-8 h-[2px] bg-current"></div>
           <div className="w-6 h-[2px] bg-current"></div>
        </button>
      </div>
    </motion.nav>
  );
}

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-80" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 text-balance">
            Padre Vitor Representações
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-4 font-light">
            Soluções completas em materiais de construção para sua obra.
            Representamos as melhores marcas do mercado com excelência e
            compromisso.
          </p>
         /* <p className="text-sm text-primary-foreground/60 max-w-lg mx-auto mb-10">
            (Texto de apresentação genérico — personalize com suas informações)
          </p>*/
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#empresas"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg gold-gradient text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Conheça Nossas Marcas
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            Fale Conosco
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#sobre" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            <ArrowDown size={28} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

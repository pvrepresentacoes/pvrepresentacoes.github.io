import { motion } from "framer-motion";
import { Handshake, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "Parceria Sólida",
    description:
      "Trabalhamos lado a lado com nossos clientes, oferecendo suporte técnico e comercial de excelência.",
  },
  {
    icon: Award,
    title: "Marcas de Qualidade",
    description:
      "Representamos fabricantes renomados no mercado de materiais de construção, móveis e acabamentos.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Conjunto",
    description:
      "Nosso compromisso é impulsionar o sucesso dos nossos parceiros com atendimento personalizado.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Quem Somos
          </h2>
          <div className="w-16 h-1 gold-gradient mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A Padre Vitor Representações atua no mercado de materiais de
            construção, conectando as melhores indústrias aos lojistas e
            construtoras da região.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow text-center"
            >
              <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-5">
                <feature.icon size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

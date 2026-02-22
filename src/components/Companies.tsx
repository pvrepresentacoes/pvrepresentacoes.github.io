import { motion } from "framer-motion";
import { ExternalLink, Instagram } from "lucide-react";

const companies = [
  {
    name: "Fibromar",
    description:
      "Fabricante de caixas d'água, tanques, cisternas, biodigestores, telhas e reservatórios em polietileno e fibra de vidro. A fornecedora ideal para empresas, órgãos públicos e lojistas em todo o Brasil.",
    url: "https://fibromar.com/",
    color: "215 60% 22%",
  },
  {
    name: "Formigres",
    description:
      "Grupo cerâmico com as marcas Formigres, Marcela, Stargolden, JG e Prime. Buscam continuamente a união entre design e tecnologia na produção de pisos e revestimentos cerâmicos de alta qualidade.",
    url: "https://www.formigres.com.br/",
    color: "215 50% 28%",
  },
  {
    name: "Permatti",
    description:
      "Indústria e comércio de plásticos especializada em telhas, forros, portas sanfonadas, rodapés e canaletas em PVC. Produtos que oferecem economia, resistência e isolamento térmico-acústico.",
    url: "https://permatti.com.br/",
    color: "38 70% 45%",
  },
  {
    name: "MGM Móveis",
    description:
      "Com mais de 300 colaboradores, a MGM nasceu no polo moveleiro capixaba e produz móveis para cozinhas e banheiros 100% em MDF de madeira reflorestada. Qualidade, inovação e sustentabilidade.",
    url: "https://www.mgmmoveis.com.br/",
    color: "30 40% 50%",
  },
  {
    name: "LA Pias e Granitos",
    description:
      "Fornecedora de granitos de alta qualidade para bancadas, pisos e revestimentos. Materiais nobres selecionados para projetos residenciais e comerciais.",
    url: "https://www.instagram.com/lapiasegranitos/",
    isInstagram: true,
    color: "350 60% 50%",
  },
];

const Companies = () => {
  return (
    <section id="empresas" className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Empresas que Representamos
          </h2>
          <div className="w-16 h-1 gold-gradient mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Parceiros de excelência no mercado de materiais de construção e
            acabamentos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, i) => (
            <motion.a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div
                className="h-2 w-full"
                style={{ backgroundColor: `hsl(${company.color})` }}
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {company.name}
                  </h3>
                  {company.isInstagram ? (
                    <Instagram
                      size={20}
                      className="text-muted-foreground group-hover:text-accent transition-colors"
                    />
                  ) : (
                    <ExternalLink
                      size={20}
                      className="text-muted-foreground group-hover:text-accent transition-colors"
                    />
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {company.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent">
                  <span>
                    {company.isInstagram ? "Ver no Instagram" : "Visitar site"}
                  </span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;

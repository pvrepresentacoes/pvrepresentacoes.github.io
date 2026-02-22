const Footer = () => {
  return (
    <footer className="hero-gradient py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
          Padre Vitor Representações
        </h3>
        <p className="text-primary-foreground/60 text-sm mb-6">
          Conectando as melhores marcas ao seu negócio.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a href="#inicio" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
            Início
          </a>
          <a href="#sobre" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
            Sobre
          </a>
          <a href="#empresas" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
            Empresas
          </a>
          <a href="#contato" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
            Contato
          </a>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Padre Vitor Representações. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

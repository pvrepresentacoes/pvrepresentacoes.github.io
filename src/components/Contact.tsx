import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5535998117351";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "bd1a1a87-b96f-4c7f-bb4a-cec319d11515");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        form.reset();
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <div className="w-16 h-1 gold-gradient mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos prontos para atendê-lo. Envie uma mensagem ou fale conosco
            pelo WhatsApp.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
                  placeholder="Como podemos ajudá-lo?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gold-gradient text-accent-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? (
                  "Enviando..."
                ) : success ? (
                  "✓ Mensagem enviada!"
                ) : (
                  <>
                    Enviar Mensagem <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* WhatsApp & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <MessageCircle size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-lg">
                    WhatsApp
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Atendimento rápido e direto
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-green-600 text-primary-foreground font-semibold hover:bg-green-700 transition-colors"
              >
                <Phone size={18} />
                Chamar no WhatsApp
              </a>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <h3 className="font-display font-semibold text-foreground text-lg mb-3">
                Informações
              </h3>
              <p className="text-muted-foreground mb-2">
                📍 Rua Padre Alessandro Ferloni 119, Ludovico Pavoni - Eloi Mendes MG, 37110-000
              </p>
              <p className="text-muted-foreground mb-2">
                📧 pvrepvendas@gmail.com
              </p>
              <p className="text-muted-foreground">
                📞 (35) 99811-7351
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

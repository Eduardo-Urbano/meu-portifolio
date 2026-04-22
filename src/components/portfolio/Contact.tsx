import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl rounded-3xl glass p-8 md:p-14 shadow-elegant relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent opacity-20 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-accent">Contato</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                Vamos criar algo <span className="text-gradient">incrível</span>?
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Estou aceitando novos projetos freelancer. Conte-me sobre sua ideia e vamos
                conversar sobre como posso ajudar.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:eduardosurbano004@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                    <Mail size={16} />
                  </span>
                  hello@eduardourbano.dev
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                    <MapPin size={16} />
                  </span>
                  Remoto · São Paulo, BR
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 3000);
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-xs text-muted-foreground" htmlFor="name">
                  Nome
                </label>
                <input
                  id="name"
                  required
                  className="mt-1 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="voce@exemplo.com"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary resize-none"
                  placeholder="Conte sobre seu projeto..."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                {sent ? "Mensagem enviada ✓" : (
                  <>
                    Enviar mensagem
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>

        <footer className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Eduardo Urbano. Todos os direitos reservados.</div>
          <div>Construído com React, TypeScript & Tailwind.</div>
        </footer>
      </div>
    </section>
  );
}

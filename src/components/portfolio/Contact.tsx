import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;
    console.log(import.meta.env.VITE_EMAILJS_KEY);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAILJS_KEY
      )
      .then(() => {
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      })
      .catch((error) => {
        console.error("Erro EmailJS:", error);
        alert("Erro ao enviar mensagem");
      });
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl rounded-3xl glass p-8 md:p-14 shadow-elegant relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent opacity-20 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-12 relative items-center">
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

              <div className="mt-8 space-y-4 flex flex-row justify-between">
                <div className="flex flex-col gap-3">
                  <a
                    href="https://linkedin.com/in/edu-urbano"
                    target="_blank"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                      In
                    </span>
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Eduardo-Urbano"
                    target="_blank"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.87 10.96.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.8.56C20.71 21.43 24 17.1 24 12 24 5.65 18.85.5 12 .5z"/>
                      </svg>
                    </span>
                    GitHub
                  </a>
                  <a
                    href="https://wa.me/5511989194497?text=Olá%20Eduardo,%20vim%20pelo%20seu%20portfólio!"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all hover:translate-x-1"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.52 3.48A11.91 11.91 0 0 0 12.01 0C5.38 0 .01 5.37.01 12c0 2.11.55 4.17 1.6 6L0 24l6.2-1.63A11.96 11.96 0 0 0 12.01 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.49-8.52zM12.01 21.82c-1.81 0-3.58-.49-5.12-1.42l-.37-.22-3.68.97.98-3.59-.24-.37A9.8 9.8 0 0 1 2.2 12c0-5.42 4.4-9.82 9.81-9.82 2.62 0 5.08 1.02 6.93 2.88A9.77 9.77 0 0 1 21.82 12c0 5.42-4.4 9.82-9.81 9.82zm5.41-7.38c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.66.15-.2.3-.76.98-.93 1.18-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.46-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.53.08-.8.38-.27.3-1.05 1.03-1.05 2.5s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.7.64.71.23 1.35.2 1.86.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.27-.2-.57-.35z"/>
                      </svg>
                    </span>
                    WhatsApp
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <a
                      href="mailto:eduardosurbano004@gmail.com"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                        <Mail size={16} />
                      </span>
                      Eduardo Urbano
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                      <MapPin size={16} />
                    </span>
                    Remoto · São Paulo, BR
                  </div>
                                </div>
                </div>
            </motion.div>

            <div className="space-y-4 mt-8">
              <motion.form
                ref={formRef}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                onSubmit={sendEmail}
                className="space-y-4"
              >
                
                <div>
                  <label className="text-xs text-muted-foreground" htmlFor="name">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
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
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="voce@email.com"
                  />
                </div>

                <div>
                  <label className="text-xs text-muted-foreground" htmlFor="message">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
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
          
        </div>

        <footer className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Eduardo Urbano. Todos os direitos reservados.</div>
          <div>Construído com React, TypeScript & Tailwind.</div>
        </footer>
      </div>
    </section>
  );
}

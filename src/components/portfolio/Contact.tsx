import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [sent, setSent] = useState(false);

  const { language } = useLanguage();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

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

        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("Erro EmailJS:", error);

        alert(
          language === "pt"
            ? "Erro ao enviar mensagem"
            : "Error sending message"
        );
      });
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl rounded-3xl glass p-8 md:p-14 shadow-elegant relative overflow-hidden">
          <div
            className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-primary opacity-20 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent opacity-20 blur-3xl"
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-2 gap-12 relative items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                {language === "pt" ? "Contato" : "Contact"}
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                {language === "pt" ? (
                  <>
                    Vamos criar algo{" "}
                    <span className="text-gradient">incrível</span>?
                  </>
                ) : (
                  <>
                    Let’s build something{" "}
                    <span className="text-gradient">great</span>?
                  </>
                )}
              </h2>

              <p className="mt-5 text-muted-foreground leading-relaxed">
                {language === "pt"
                  ? "Estou aberto a oportunidades, projetos freelancer e experiências onde eu possa evoluir como desenvolvedor backend."
                  : "I am open to opportunities, freelance projects, and experiences where I can grow as a backend developer."}
              </p>

              <div className="mt-8 space-y-4 flex flex-row justify-between">
                <div className="flex flex-col gap-3">
                  <a
                    href="https://linkedin.com/in/edu-urbano"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all hover:translate-x-1"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                      In
                    </span>

                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/Eduardo-Urbano"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all hover:translate-x-1"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.87 10.96.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.8.56C20.71 21.43 24 17.1 24 12 24 5.65 18.85.5 12 .5z" />
                      </svg>
                    </span>

                    GitHub
                  </a>

                  <a
                    href="https://wa.me/5511989194497?text=Olá%20Eduardo,%20vim%20pelo%20seu%20portfólio!"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all hover:translate-x-1"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                      W
                    </span>

                    WhatsApp
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:eduardosurbano004@gmail.com"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all hover:translate-x-1"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                      <Mail size={16} aria-hidden="true" />
                    </span>

                    {language === "pt" ? "Enviar email" : "Send email"}
                  </a>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                      <MapPin size={16} aria-hidden="true" />
                    </span>

                    {language === "pt"
                      ? "Remoto · São Paulo, BR"
                      : "Remote · São Paulo, Brazil"}
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
                  <label
                    className="text-xs text-muted-foreground"
                    htmlFor="name"
                  >
                    {language === "pt" ? "Nome" : "Name"}
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder={
                      language === "pt" ? "Seu nome" : "Your name"
                    }
                  />
                </div>

                <div>
                  <label
                    className="text-xs text-muted-foreground"
                    htmlFor="email"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label
                    className="text-xs text-muted-foreground"
                    htmlFor="message"
                  >
                    {language === "pt" ? "Mensagem" : "Message"}
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary resize-none"
                    placeholder={
                      language === "pt"
                        ? "Conte sobre seu projeto..."
                        : "Tell me about your project..."
                    }
                  />
                </div>

                <button
                  type="submit"
                  aria-label={
                    language === "pt"
                      ? "Enviar mensagem"
                      : "Send message"
                  }
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {sent ? (
                    language === "pt" ? (
                      "Mensagem enviada ✓"
                    ) : (
                      "Message sent ✓"
                    )
                  ) : (
                    <>
                      {language === "pt"
                        ? "Enviar mensagem"
                        : "Send message"}

                      <Send
                        size={16}
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </motion.form>
            </div>
          </div>
        </div>

        <footer className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Eduardo Urbano.{" "}
            {language === "pt"
              ? "Todos os direitos reservados."
              : "All rights reserved."}
          </div>

          <div>
            {language === "pt"
              ? "Construído com React, TypeScript & Tailwind."
              : "Built with React, TypeScript & Tailwind."}
          </div>
        </footer>
      </div>
    </section>
  );
}
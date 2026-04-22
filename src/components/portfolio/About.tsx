import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Código limpo",
    desc: "Arquitetura escalável, testada e fácil de manter.",
  },
  {
    icon: Rocket,
    title: "Performance",
    desc: "Sites rápidos com Lighthouse 95+ por padrão.",
  },
  {
    icon: Sparkles,
    title: "Design refinado",
    desc: "Interfaces modernas, com atenção a cada detalhe.",
  },
  {
    icon: Users,
    title: "Comunicação clara",
    desc: "Entregas frequentes e processo transparente.",
  },
];

const stack = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Framer Motion",
  "Figma",
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Sobre mim</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Construindo a web com <span className="text-gradient">propósito</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Trabalho com desenvolvimento web há mais de 5 anos, ajudando startups e empresas a
              transformarem ideias em produtos digitais polidos. Meu foco é unir engenharia
              sólida e design pensado para o usuário.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Quando não estou codando, gosto de estudar tipografia, motion design e contribuir
              com projetos open-source.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full glass px-3 py-1 text-xs text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <f.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

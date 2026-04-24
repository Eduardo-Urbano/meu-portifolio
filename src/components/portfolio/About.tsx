import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Código organizado",
    desc: "Projetos estruturados com boas práticas e fácil manutenção.",
  },
  {
    icon: Rocket,
    title: "Performance",
    desc: "Foco em aplicações leves, rápidas e bem otimizadas.",
  },
  {
    icon: Sparkles,
    title: "Interface moderna",
    desc: "Desenvolvimento de interfaces responsivas e agradáveis ao usuário.",
  },
  {
    icon: Users,
    title: "Aprendizado constante",
    desc: "Sempre evoluindo e aplicando novos conhecimentos nos projetos.",
  },
];

const stack = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PHP",
  "Laravel",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MySQL",
  "MongoDB"
];

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-background/0 pointer-events-none" />
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
              Desenvolvedor web em formação, com experiência prática na criação de interfaces modernas e integração com APIs. Possuo uma base sólida em lógica de programação e venho desenvolvendo projetos que simulam cenários reais, incluindo aplicações completas com front-end e back-end.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Atualmente, estou focado em evoluir como desenvolvedor full stack, utilizando tecnologias como React, TypeScript e Node.js, além de aprofundar meus conhecimentos em back-end com Java e Spring Boot.
              
              Busco oportunidades freelance e projetos onde eu possa aplicar minhas habilidades e continuar evoluindo.
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

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 z-10">
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

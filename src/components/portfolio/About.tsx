import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles, Users } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const stack = [
  "Java",
  "Spring Boot",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "REST APIs",
  "Git",
  "GitHub",
  "PHP",
  "Laravel",
  "TypeScript",
  "React",
];

export function About() {
  const { language } = useLanguage();

  const features = [
    {
      icon: Code2,
      title: language === "pt" ? "Código organizado" : "Clean code structure",
      desc:
        language === "pt"
          ? "Projetos estruturados com boas práticas e foco em manutenção."
          : "Projects structured with good practices and maintainability in mind.",
    },
    {
      icon: Rocket,
      title: language === "pt" ? "Backend escalável" : "Scalable backend",
      desc:
        language === "pt"
          ? "Foco em APIs REST, integração de sistemas e arquitetura backend."
          : "Focus on REST APIs, system integration, and backend architecture.",
    },
    {
      icon: Sparkles,
      title: language === "pt" ? "Soluções completas" : "Complete solutions",
      desc:
        language === "pt"
          ? "Experiência conectando backend, banco de dados e interfaces web."
          : "Experience connecting backend, databases, and web interfaces.",
    },
    {
      icon: Users,
      title: language === "pt" ? "Aprendizado constante" : "Continuous learning",
      desc:
        language === "pt"
          ? "Sempre evoluindo e aplicando novos conhecimentos em projetos reais."
          : "Always improving and applying new knowledge in real projects.",
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-background/0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {language === "pt" ? "Sobre mim" : "About me"}
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              {language === "pt" ? (
                <>
                  Construindo soluções backend com{" "}
                  <span className="text-gradient">propósito</span>.
                </>
              ) : (
                <>
                  Building backend solutions with{" "}
                  <span className="text-gradient">purpose</span>.
                </>
              )}
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {language === "pt"
                ? "Sou estudante de Desenvolvimento de Software na Fatec Mauá e desenvolvedor com foco em backend. Tenho experiência prática no desenvolvimento de APIs REST, integração de sistemas e manutenção de aplicações web, utilizando principalmente Java, Spring Boot, PostgreSQL e Docker."
                : "I am a Software Development student at Fatec Mauá and a backend-focused developer. I have hands-on experience developing REST APIs, integrating systems, and maintaining web applications, mainly using Java, Spring Boot, PostgreSQL, and Docker."}
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              {language === "pt"
                ? "Também possuo experiência com PHP, Laravel, TypeScript e React, o que me ajuda a entender melhor a comunicação entre frontend e backend. Atualmente busco oportunidades onde eu possa evoluir como desenvolvedor backend, contribuir com projetos reais e aprender com times mais experientes."
                : "I also have experience with PHP, Laravel, TypeScript, and React, which helps me better understand frontend-backend communication. I am currently looking for opportunities where I can grow as a backend developer, contribute to real projects, and learn from more experienced teams."}
            </p>

            <ul
              className="mt-8 flex flex-wrap gap-2"
              aria-label={
                language === "pt" ? "Tecnologias principais" : "Main technologies"
              }
            >
              {stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full glass px-3 py-1 text-xs text-muted-foreground list-none"
                >
                  {s}
                </li>
              ))}
            </ul>
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
                  <f.icon size={20} aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
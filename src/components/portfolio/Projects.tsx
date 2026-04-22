import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Trabalhos</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Projetos <span className="text-gradient">selecionados</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma seleção dos trabalhos mais recentes. Clique em qualquer card para ver detalhes.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.button
              type="button"
              key={p.id}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="group relative text-left overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-muted-foreground">{p.year} · {p.role}</div>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight">{p.title}</h3>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-foreground/5 border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!project) return;

      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();

      document.addEventListener("keydown", onKey);

      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", onKey);

        document.body.style.overflow = "";
      };
    }, [project, onClose]);

    useEffect(() => {
      setCurrent(0);
    }, [project]);

    const next = () => {
      if (!project) return;
      setCurrent((prev) => (prev + 1) % project.images.length);
    };

    const prev = () => {
      if (!project) return;
      setCurrent((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-background/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl glass shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          >
            {/* botão fechar */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 z-10 rounded-full bg-background/10 p-2 text-foreground backdrop-blur transition-colors hover:bg-background cursor-pointer"
            >
              <X size={18} aria-hidden="true" />
            </button>

            {/*CARROSSEL */}
            <div
              className={`overflow-hidden rounded-t-3xl relative ${
                project.images[current].includes("mobile")
                  ? "h-[420px] md:h-[460px]"
                  : project.title === "Agenda do Aluno"
                  ? "h-[320px] sm:h-[380px] md:h-[420px]"
                  : "h-[220px] sm:h-[280px] md:h-[320px]"
              }`}
            >
              <img
                src={project.images[current]}
                alt={`Imagem do projeto ${project.title}`}
                className={`h-full w-full ${
                  project.images[current].includes("mobile")
                    ? "object-contain bg-black/20 p-2"
                    : project.title === "Agenda do Aluno"
                    ? "object-contain bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.22),_rgba(8,8,30,0.92)_75%)] p-1"
                    : "object-cover"
                }`}
              />

              {project.images.length > 1 && (
                <>
                  {/* anterior */}
                  <button type="button" onClick={prev} aria-label="Imagem anterior"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/0 text-white px-3 py-1 rounded-lg cursor-pointer"
                  >
                    {"<"}
                  </button>

                  {/* próximo */}
                  <button type="button" onClick={next} aria-label="Próxima imagem"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/0 text-white px-3 py-1 rounded-lg cursor-pointer"
                  >
                    {">"}
                  </button>
                </>
              )}
            </div>

            {/* indicadores */}
            {project.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-3">
                {project.images.map((_, i) => (
                  <div
                    key={i}
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === current ? "bg-white scale-110" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* conteúdo */}
            <div className="p-4 md:p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-foreground/10 px-2.5 py-1">
                  {project.year}
                </span>
                <span>{project.role}</span>
              </div>

              <h3
                id="project-modal-title"
                className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
              >
                {project.title}
              </h3>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>

              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-[0.2em] text-accent">
                  Tecnologias
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label={`Tecnologias usadas em ${project.title}`}>
                  {project.technologies.map((t) => (
                    <li
                      key={t}
                      className="list-none rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Visitar projeto
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
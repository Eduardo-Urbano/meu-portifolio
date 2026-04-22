import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
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

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-background/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 z-10 rounded-full bg-background/60 p-2 text-foreground backdrop-blur transition-colors hover:bg-background"
            >
              <X size={18} />
            </button>

            <div className="aspect-[16/9] overflow-hidden rounded-t-3xl">
              <img
                src={project.images[0]}
                alt={project.title}
                width={1280}
                height={720}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-foreground/10 px-2.5 py-1">{project.year}</span>
                <span>{project.role}</span>
              </div>

              <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>

              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-[0.2em] text-accent">Tecnologias</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Visitar projeto
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

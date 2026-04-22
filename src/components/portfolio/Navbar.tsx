import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-card" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block h-8 w-8 rounded-lg bg-gradient-primary shadow-glow" />
            <span className="text-lg">
              dev<span className="text-gradient">.Urban</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-primary after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Vamos conversar
          </a>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-md p-2 text-foreground"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-3 glass rounded-2xl p-5 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground"
                >
                  Vamos conversar
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

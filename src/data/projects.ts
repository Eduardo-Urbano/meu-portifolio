import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  link: string;
  year: string;
  role: string;
};

export const projects: Project[] = [
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Painel analítico em tempo real para empresas SaaS.",
    longDescription:
      "Dashboard completo com gráficos interativos, filtros avançados e exportação de relatórios. Construído com foco em performance, suportando milhares de eventos por segundo via WebSockets.",
    technologies: ["React", "TypeScript", "Tailwind", "Recharts", "WebSockets"],
    images: [project1],
    link: "https://example.com",
    year: "2025",
    role: "Full-stack Developer",
  },
  {
    id: "ecommerce-fashion",
    title: "Fashion Store",
    description: "E-commerce minimalista com checkout otimizado.",
    longDescription:
      "Loja virtual completa com integração de pagamentos, gestão de estoque e CMS headless. Performance 98+ no Lighthouse e taxa de conversão aumentada em 32%.",
    technologies: ["Next.js", "Stripe", "Sanity CMS", "Tailwind"],
    images: [project2],
    link: "https://example.com",
    year: "2024",
    role: "Frontend Lead",
  },
  {
    id: "fitness-app",
    title: "Fitness Tracker App",
    description: "Aplicativo mobile para acompanhamento de treinos.",
    longDescription:
      "App nativo cross-platform com sincronização em nuvem, gráficos de progresso, planos de treino personalizados e integração com wearables.",
    technologies: ["React Native", "Expo", "Supabase", "Reanimated"],
    images: [project3],
    link: "https://example.com",
    year: "2024",
    role: "Mobile Developer",
  },
  {
    id: "saas-landing",
    title: "SaaS Landing Page",
    description: "Landing page de alta conversão para startup.",
    longDescription:
      "Página de marketing focada em conversão, com testes A/B, animações cinematográficas e otimização SEO completa. Aumentou trial signups em 4x.",
    technologies: ["React", "Framer Motion", "GSAP", "Vite"],
    images: [project4],
    link: "https://example.com",
    year: "2025",
    role: "Frontend Developer",
  },
];

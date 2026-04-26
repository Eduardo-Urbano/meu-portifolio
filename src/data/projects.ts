import tostao1 from "@/assets/TostaoBank/1.png";
import tostao2 from "@/assets/TostaoBank/2.png";

import lingu1 from "@/assets/LinguRemi/1.jpg";

import agenda1 from "@/assets/agendaAluno/1.png";

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
    id: "tostao-bank",
    title: "Tostão Bank",
    description: "Sistema bancário web com API própria e versão mobile integrada.",
    longDescription:
      "Projeto acadêmico simulando um sistema bancário completo. Possui funcionalidades como autenticação de usuários, dashboard com dados da conta, transferências (Pix) e recarga de serviços.\n\nA aplicação conta com uma API própria, consumida tanto pela versão web quanto por uma versão mobile desenvolvida em Kotlin, permitindo que o mesmo usuário utilize sua conta em ambas as plataformas.\n\nO projeto continua em evolução, com foco na adição de novas funcionalidades e melhorias na arquitetura.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Java", "Spring Boot", "MySQL", "Kotlin"],
    images: [tostao1, tostao2],
    link: "https://github.com/Giovanni-Franca/Tostao-Bank",
    year: "2024",
    role: "Full Stack Developer",
  },
  {
    id: "linguremi",
    title: "LinguRemi",
    description: "Plataforma web para uma doceria gourmet com foco em vendas e gestão.",
    longDescription:
      "Sistema web desenvolvido para uma doceria gourmet com foco em aumentar as vendas e melhorar a gestão do negócio. A aplicação permite exibir produtos de forma organizada, facilitar o acesso dos clientes e otimizar a administração interna. Desenvolvido com front-end moderno e back-end em Java com Spring Boot, simulando um cenário real de aplicação comercial.",
    technologies: ["HTML", "Tailwindcss", "TypeScript", "Java", "Spring Boot"],
    images: [lingu1],
    link: "https://eduardo-urbano.github.io/LinguRemi/",
    year: "2025",
    role: "Full Stack Developer",
  },
  {
    id: "agenda-aluno",
    title: "Agenda do Aluno",
    description: "Aplicação web para organização de tarefas e rotina acadêmica.",
    longDescription:
      "Aplicação web desenvolvida para auxiliar estudantes na organização da rotina acadêmica, permitindo o controle de tarefas e prazos. O front-end foi construído com React, TypeScript e Tailwind CSS, consumindo uma API desenvolvida separadamente em Python para gerenciamento dos dados.",
    technologies: ["React", "TailwindCSS", "TypeScript", "Python"],
    images: [agenda1],
    link: "https://github.com/JarJv/agenda-do-aluno",
    year: "2025",
    role: "Frontend Developer",
  },
];
//Banners
import tostaoBanner from "@/assets/TostaoBank/TostaoBanner.png";
import linguBanner from "@/assets/LinguRemi/LinguRemiBanner.png";
import agendaBanner from "@/assets/agendaAluno/AgendaAlunoBanner.png";
import newsflowBanner from "@/assets/NewsFlow/Banner-News-Flow-Api.png";

//Tostão Bank
import tostao1 from "@/assets/TostaoBank/DashboardInicial.png";
import tostao2 from "@/assets/TostaoBank/Pix.png";
import tostao3 from "@/assets/TostaoBank/Seguros.png";
import tostao4 from "@/assets/TostaoBank/mobile.jpeg";

//LinguRémi
import lingu1 from "@/assets/LinguRemi/Index2.jpg";
import lingu2 from "@/assets/LinguRemi/Produtos.jpg";
import lingu3 from "@/assets/LinguRemi/Carrinho.jpg";
import lingu4 from "@/assets/LinguRemi/TelaCadastro.jpg";

//Agenda do Aluno
import agenda1 from "@/assets/agendaAluno/agenda-menu-mobile.png";
import agenda2 from "@/assets/agendaAluno/agenda-calendario.png";
import agenda3 from "@/assets/agendaAluno/agenda-frequencia.png";
import agenda4 from "@/assets/agendaAluno/agenda-menu-lateral-mobile.png";
import agenda5 from "@/assets/agendaAluno/telaLogin.png";

//NewsFlow API
import newsflow1 from "@/assets/NewsFlow/Dashboard-News-Flow-Api.png";
import newsflow2 from "@/assets/NewsFlow/Formulário-News-Flow-Api.png";
import newsflow3 from "@/assets/NewsFlow/Request-Insomnia-News-Flow-Api.png";
import newsflow4 from "@/assets/NewsFlow/Login-Request-Insomnia-New-Flow-Api.png";

type TranslatedText = {
  pt: string;
  en: string;
};

export type Project = {
  id: string;
  title: string;
  description: TranslatedText;
  longDescription: TranslatedText;
  technologies: string[];
  banner: string;
  images: string[];
  link: string;
  year: string;
  role: TranslatedText;
};

export const projects: Project[] = [
  {
    id: "tostao-bank",
    title: "Tostão Bank",

    description: {
      pt: "Sistema bancário web com API própria e versão mobile integrada.",
      en: "Web banking system with its own API and integrated mobile version.",
    },

    longDescription: {
      pt:
        "Projeto acadêmico simulando um sistema bancário completo. Possui funcionalidades como autenticação de usuários, dashboard com dados da conta, transferências (Pix) e recarga de serviços.\n\nA aplicação conta com uma API própria, consumida tanto pela versão web quanto por uma versão mobile desenvolvida em Kotlin.\n\nO projeto continua em evolução, com foco em melhorias de arquitetura e novas funcionalidades.",
      en:
        "Academic project simulating a complete banking system. Features include user authentication, account dashboard, Pix transfers, and service top-ups.\n\nThe application includes its own API, consumed by both the web version and a mobile application developed in Kotlin.\n\nThe project is still evolving, focusing on architecture improvements and new features.",
    },

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Java",
      "Spring Boot",
      "MySQL",
      "Kotlin",
    ],

    banner: tostaoBanner,
    images: [tostao1, tostao2, tostao3, tostao4],
    link: "https://github.com/Giovanni-Franca/Tostao-Bank",
    year: "2024",

    role: {
      pt: "Desenvolvedor Full Stack",
      en: "Full Stack Developer",
    },
  },

  {
    id: "linguremi",
    title: "LinguRemi",

    description: {
      pt: "Plataforma web para uma doceria gourmet com foco em vendas e gestão.",
      en: "Web platform for a gourmet dessert shop focused on sales and management.",
    },

    longDescription: {
      pt:
        "Sistema web desenvolvido para uma doceria gourmet com foco em melhorar vendas e gestão do negócio. Desenvolvido com frontend moderno e backend em Java com Spring Boot, simulando um cenário real de aplicação comercial.",
      en:
        "Web system developed for a gourmet dessert shop focused on improving sales and business management. Built with a modern frontend and Java Spring Boot backend, simulating a real commercial application scenario.",
    },

    technologies: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Java",
      "Spring Boot",
    ],

    banner: linguBanner,
    images: [lingu1, lingu2, lingu3, lingu4],
    link: "https://linguremi.vercel.app/",
    year: "2025",

    role: {
      pt: "Desenvolvedor Full Stack",
      en: "Full Stack Developer",
    },
  },

  {
    id: "agenda-aluno",
    title: "Agenda do Aluno",

    description: {
      pt: "Aplicação web para organização de tarefas e rotina acadêmica.",
      en: "Web application for organizing academic tasks and routines.",
    },

    longDescription: {
      pt:
        "Aplicação desenvolvida para auxiliar estudantes na organização da rotina acadêmica, utilizando React, TypeScript e integração com API em Python.",
      en:
        "Application developed to help students organize academic routines, using React, TypeScript, and integration with a Python API.",
    },

    technologies: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Python",
    ],

    banner: agendaBanner,
    images: [agenda1, agenda2, agenda3, agenda4, agenda5],
    link: "https://github.com/JarJv/agenda-do-aluno",
    year: "2025",

    role: {
      pt: "Desenvolvedor Frontend",
      en: "Frontend Developer",
    },
  },

  {
    id: "newsflow-api",
    title: "NewsFlow API",

    description: {
      pt: "API REST em Laravel para gerenciamento de notícias e conteúdo editorial.",
      en: "Laravel REST API for news and editorial content management.",
    },

    longDescription: {
      pt:
        "Aplicação desenvolvida em Laravel focada no gerenciamento de notícias, categorias e usuários. Conta com autenticação via Laravel Sanctum, CRUD completo, paginação e controle de acesso.",
      en:
        "Laravel application focused on managing news, categories, and users. Includes Laravel Sanctum authentication, full CRUD operations, pagination, and access control.",
    },

    technologies: [
      "PHP",
      "Laravel",
      "Laravel Sanctum",
      "Blade",
      "SQLite",
      "REST API",
    ],

    banner: newsflowBanner,
    images: [newsflow1, newsflow2, newsflow3, newsflow4],
    link: "https://newsflowapi.onrender.com/",
    year: "2026",

    role: {
      pt: "Desenvolvedor Backend",
      en: "Backend Developer",
    },
  },
];
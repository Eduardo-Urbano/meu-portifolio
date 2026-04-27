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
import agenda2 from "@/assets/agendaAluno/agenda-calendario.png"
import agenda3 from "@/assets/agendaAluno/agenda-frequencia.png"
import agenda4 from "@/assets/agendaAluno/agenda-menu-lateral-mobile.png"
import agenda5 from "@/assets/agendaAluno/telaLogin.png"

//NewsFlow API
import newsflow1 from "@/assets/NewsFlow/Dashboard-News-Flow-Api.png";
import newsflow2 from "@/assets/NewsFlow/Formulário-News-Flow-Api.png";
import newsflow3 from "@/assets/NewsFlow/Request-Insomnia-News-Flow-Api.png";
import newsflow4 from "@/assets/NewsFlow/Login-Request-Insomnia-New-Flow-Api.png";


export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  banner: string;
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
    banner: tostaoBanner,
    images: [tostao1, tostao2, tostao3, tostao4],
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
    banner: linguBanner,
    images: [lingu1, lingu2, lingu3, lingu4],
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
    banner: agendaBanner,
    images: [agenda1, agenda2, agenda3, agenda4, agenda5],
    link: "https://github.com/JarJv/agenda-do-aluno",
    year: "2025",
    role: "Frontend Developer",
  },
  {
    id: "newsflow-api",
    title: "NewsFlow API",
    description: "API REST em Laravel para gerenciamento de notícias e conteúdo editorial.",
    longDescription:
      "Aplicação desenvolvida em Laravel com foco no gerenciamento de notícias, categorias e usuários. O projeto conta com uma API REST autenticada via Laravel Sanctum, CRUD completo de postagens e categorias, paginação, filtros por título e categoria, além de autorização com Policies para controlar ações por usuário.\n\nAlém da API, possui uma interface web em Blade usada como painel de apoio para administração e visualização dos conteúdos, servindo como base para blogs, portais de notícias ou sistemas editoriais.",
    technologies: ["PHP", "Laravel", "Laravel Sanctum", "Blade", "SQLite", "REST API"],
    banner: newsflowBanner,
    images: [newsflow1, newsflow2, newsflow3, newsflow4],
    link: "https://github.com/Eduardo-Urbano/laravel-news-api",
    year: "2026",
    role: "Back-end Developer",
  },
];
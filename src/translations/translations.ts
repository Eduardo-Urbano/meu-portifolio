export type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      resume: "Currículo",
    },

    hero: {
      greeting: "Olá, eu sou",
      name: "Eduardo Urbano",
      role: "Desenvolvedor Backend",
      focus: "Java | Spring Boot | PostgreSQL | Docker",
      description:
        "Sou estudante de Desenvolvimento de Software na Fatec Mauá, com foco em desenvolvimento backend usando Java, Spring Boot, PostgreSQL e Docker. Tenho experiência prática com APIs REST, integração de sistemas e manutenção de aplicações web.",
      primaryButton: "Ver projetos",
      secondaryButton: "Entrar em contato",
    },

    about: {
      title: "Sobre mim",
      description:
        "Sou um desenvolvedor em formação com foco em backend. Atualmente estou aprofundando meus conhecimentos em Java, Spring Boot, PostgreSQL, Docker, APIs REST e boas práticas de desenvolvimento. Também possuo experiência com PHP, Laravel, TypeScript, React e integração entre frontend e backend.",
    },

    skills: {
      title: "Tecnologias",
      backend: "Backend",
      frontend: "Frontend",
      database: "Banco de Dados",
      tools: "Ferramentas",
      mainStack: "Stack principal",
      secondaryStack: "Conhecimentos complementares",
    },

    projects: {
      title: "Projetos",
      subtitle: "Alguns projetos que desenvolvi ou participei",
      viewProject: "Ver projeto",
      viewCode: "Ver código",
      viewDemo: "Ver demo",
      technologies: "Tecnologias",
      details: "Detalhes",

      items: {
        linguRemi: {
          title: "LinguRemi",
          category: "Plataforma Full Stack de Conteúdo e Gestão",
          description:
            "Plataforma desenvolvida com foco em gestão de conteúdo, integração entre frontend e backend e construção de API REST com Java e Spring Boot.",
        },

        tostaoBank: {
          title: "Tostão Bank",
          category: "Sistema Full Stack / Fintech Educacional",
          description:
            "Sistema acadêmico de fintech com modernização de funcionalidades, integração entre sistema legado em PHP e nova API desenvolvida com Java e Spring Boot.",
        },

        newsApi: {
          title: "News API",
          category: "API RESTful com Autenticação",
          description:
            "API construída com PHP e Laravel, utilizando autenticação com Laravel Sanctum, controle de acesso por perfil e gerenciamento de conteúdo.",
        },

        agendaAluno: {
          title: "Agenda do Aluno",
          category: "Sistema de Organização Educacional",
          description:
            "Aplicação web educacional desenvolvida em equipe, com foco em interface, consumo de API, organização de componentes e integração com backend.",
        },
      },
    },

    contact: {
      title: "Contato",
      subtitle: "Vamos conversar?",
      description:
        "Estou aberto a oportunidades de estágio, posições júnior e projetos onde eu possa evoluir como desenvolvedor backend.",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar mensagem. Tente novamente.",
    },

    footer: {
      text: "Desenvolvido por Eduardo Urbano",
      rights: "Todos os direitos reservados.",
    },

    language: {
      label: "Idioma",
      portuguese: "Português",
      english: "Inglês",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },

    hero: {
      greeting: "Hi, I am",
      name: "Eduardo Urbano",
      role: "Backend Developer",
      focus: "Java | Spring Boot | PostgreSQL | Docker",
      description:
        "I am a Software Development student at Fatec Mauá, focused on backend development using Java, Spring Boot, PostgreSQL, and Docker. I have hands-on experience with REST APIs, system integration, and web application maintenance.",
      primaryButton: "View projects",
      secondaryButton: "Contact me",
    },

    about: {
      title: "About me",
      description:
        "I am a developer in training focused on backend development. I am currently improving my skills in Java, Spring Boot, PostgreSQL, Docker, REST APIs, and software development best practices. I also have experience with PHP, Laravel, TypeScript, React, and frontend-backend integration.",
    },

    skills: {
      title: "Technologies",
      backend: "Backend",
      frontend: "Frontend",
      database: "Databases",
      tools: "Tools",
      mainStack: "Main stack",
      secondaryStack: "Additional knowledge",
    },

    projects: {
      title: "Projects",
      subtitle: "Some projects I have built or contributed to",
      viewProject: "View project",
      viewCode: "View code",
      viewDemo: "View demo",
      technologies: "Technologies",
      details: "Details",

      items: {
        linguRemi: {
          title: "LinguRemi",
          category: "Full Stack Content and Management Platform",
          description:
            "Platform developed with focus on content management, frontend-backend integration, and REST API development using Java and Spring Boot.",
        },

        tostaoBank: {
          title: "Tostão Bank",
          category: "Full Stack System / Educational Fintech",
          description:
            "Academic fintech system involving feature modernization, integration between a legacy PHP system and a new API built with Java and Spring Boot.",
        },

        newsApi: {
          title: "News API",
          category: "RESTful API with Authentication",
          description:
            "API built with PHP and Laravel, using Laravel Sanctum authentication, role-based access control, and content management features.",
        },

        agendaAluno: {
          title: "Agenda do Aluno",
          category: "Educational Management System",
          description:
            "Educational web application developed in a team, focused on UI development, API consumption, component organization, and backend integration.",
        },
      },
    },

    contact: {
      title: "Contact",
      subtitle: "Let’s talk?",
      description:
        "I am open to internship opportunities, junior positions, and projects where I can grow as a backend developer.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again.",
    },

    footer: {
      text: "Developed by Eduardo Urbano",
      rights: "All rights reserved.",
    },

    language: {
      label: "Language",
      portuguese: "Portuguese",
      english: "English",
    },
  },
} as const;
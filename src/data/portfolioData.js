export const personalInfo = {
  name: "Edilson Emidio de Espindola Filho",
  shortName: "Edilson Emidio",
  role: "Desenvolvedor de Software Full Stack",
  specialty: "PHP (Laravel) • React • Java (Spring Boot) • Node.js • Python",
  location: "Salgueiro, Pernambuco, Brasil",
  email: "edilsonemidio93@gmail.com",
  phone: "(87) 991368259",
  whatsappUrl: "https://wa.me/5587991368259?text=Olá%20Edilson!%20Vi%20seu%20portfolio%20e%20gostaria%20de%20conversar.",
  github: "https://github.com/EdilsonEmidio",
  linkedin: "https://www.linkedin.com/in/edilson-emidio-9b9a4634a",
  statusBadge: "Disponível para novos projetos & oportunidades",
  aboutSummary:
    "Desenvolvedor Full Stack graduando em Ciência da Computação pela UNIVASF. Sólida fundamentação em arquitetura de software (POO, SOLID, Padrões de Projeto, Clean Architecture e GRASP) e experiência prática com o ecossistema PHP (Laravel, Livewire), Java (Spring Boot), ecossistema JavaScript/TypeScript (React, Node.js) e Python para Inteligência Artificial.",
  aboutHighlights: [
    "Experiência com sistemas de impacto real (emissão de diplomas digitais e gestão acadêmica na Univasf).",
    "Desenvolvimento de ponta a ponta: do design de bancos relacionais (PostgreSQL, MariaDB, MySQL) a interfaces SPA modernas e responsivas.",
    "Adoção de boas práticas de engenharia, conteinerização com Docker e agilidade com Scrum/Kanban.",
    "Uso ativo de Inteligência Artificial aplicada ao fluxo de desenvolvimento (GitHub Copilot, engenharia de prompts, automação e refatoração)."
  ],
  stats: [
    { label: "Projetos de Destaque", value: "4+" },
    { label: "Graduação", value: "UNIVASF" },
    { label: "Stack Principal", value: "Full Stack" },
    { label: "Idiomas", value: "PT (Nativo) / EN (B1)" }
  ]
};

export const skillsData = [
  {
    category: "Linguagens & Core",
    icon: "code",
    skills: [
      { name: "PHP", level: "Avançado", badge: "Principal" },
      { name: "JavaScript (ES6+)", level: "Avançado", badge: "Principal" },
      { name: "TypeScript", level: "Intermediário" },
      { name: "Java", level: "Avançado", badge: "Principal" },
      { name: "Python", level: "Intermediário" },
      { name: "SQL", level: "Avançado" },
      { name: "HTML5 / CSS3", level: "Avançado" }
    ]
  },
  {
    category: "Backend & APIs",
    icon: "server",
    skills: [
      { name: "Laravel", level: "Avançado", badge: "Core" },
      { name: "Livewire", level: "Avançado", badge: "Core" },
      { name: "Spring Boot", level: "Avançado", badge: "Core" },
      { name: "Spring Security & JWT", level: "Intermediário" },
      { name: "Spring Data JPA / Hibernate", level: "Avançado" },
      { name: "Node.js / Express.js", level: "Intermediário" },
      { name: "Python (Flask)", level: "Intermediário" },
      { name: "APIs RESTful", level: "Avançado" }
    ]
  },
  {
    category: "Frontend & UI",
    icon: "layout",
    skills: [
      { name: "React", level: "Avançado", badge: "Core" },
      { name: "React Router", level: "Avançado" },
      { name: "Tailwind CSS", level: "Avançado" },
      { name: "FluxUI", level: "Intermediário" },
      { name: "SPA & Componentização", level: "Avançado" },
      { name: "Design Responsivo", level: "Avançado" }
    ]
  },
  {
    category: "Bancos de Dados & Modelagem",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: "Avançado", badge: "Utilizado no Acadigitus" },
      { name: "MySQL", level: "Intermediário" },
      { name: "MariaDB", level: "Intermediário" },
      { name: "Modelagem Relacional", level: "Avançado" },
      { name: "Database Migrations", level: "Avançado" },
      { name: "JDBC", level: "Intermediário" }
    ]
  },
  {
    category: "Arquitetura & Engenharia",
    icon: "cpu",
    skills: [
      { name: "Arquitetura em Camadas MVC", level: "Avançado" },
      { name: "POO (Prog. Orientada a Objetos)", level: "Avançado" },
      { name: "Princípios SOLID", level: "Avançado" },
      { name: "Design Patterns (GoF)", level: "Intermediário" },
      { name: "Clean Architecture", level: "Intermediário" },
      { name: "Padrões GRASP", level: "Intermediário" }
    ]
  },
  {
    category: "DevOps, Ferramentas & IA",
    icon: "terminal",
    skills: [
      { name: "Docker & Docker Compose", level: "Intermediário", badge: "Ambiente" },
      { name: "Git & GitHub", level: "Avançado" },
      { name: "Maven / Gradle", level: "Intermediário" },
      { name: "GitHub Copilot (Chat & Agents)", level: "Avançado" },
      { name: "ChatGPT & Prompt Engineering", level: "Avançado" },
      { name: "Scrum & Kanban", level: "Avançado" }
    ]
  }
];

export const projectsData = [
  {
    id: "acadigitus",
    title: "Acadigitus — Sistema de Emissão de Diplomas e Serviços",
    institution: "STI - UNIVASF (Superintendência de TI)",
    period: "Março 2026 – Julho 2026",
    role: "Estágio em Desenvolvimento Full Stack",
    category: "fullstack",
    featured: true,
    tags: ["PHP", "Laravel", "Livewire", "FluxUI", "PostgreSQL", "Docker", "MVC"],
    summary:
      "Remodelação do sistema institucional da UNIVASF para autenticação, emissão de diplomas digitais e agendamento de atendimentos de discentes e administradores.",
    description:
      "Atuação direta na equipe de desenvolvimento da Superintendência de Tecnologia da Informação (STI) da UNIVASF. Focado no redesenho estrutural e técnico da plataforma que gerencia todo o ciclo de emissão e verificação de diplomas, bem como agendamento de serviços acadêmicos.",
    highlights: [
      "Desenvolvimento de telas e fluxos completos: períodos letivos, informações curriculares de cursos e cadastros de serviços.",
      "Modelagem relacional e otimização de consultas no banco de dados PostgreSQL.",
      "Implementação de regras de negócio complexas no backend em Laravel seguindo estritamente a arquitetura MVC em camadas.",
      "Criação de componentes dinâmicos e reativos utilizando Livewire e FluxUI.",
      "Padronização de todo o ambiente de desenvolvimento e deploy com Docker e Docker Compose."
    ],
    architecture: "Arquitetura MVC em Camadas, conteinerização Docker, persistência relacional com Migrations.",
    demoUrl: null,
    githubUrl: "https://github.com/EdilsonEmidio",
    icon: "award"
  },
  {
    id: "presensys",
    title: "PresenSys — Gestão de Frequência e Relatórios Escolares",
    institution: "UNIVASF / Escola Local",
    period: "Maio 2026 – Julho 2026",
    role: "Desenvolvedor Frontend & Integração",
    category: "frontend",
    featured: true,
    tags: ["React", "React Router", "Node.js", "Express.js", "PostgreSQL", "REST API"],
    summary:
      "Sistema desenvolvido em equipe acadêmica para implantação em uma escola local, automatizando registro de turmas, faltas e relatórios estatísticos.",
    description:
      "Solução projetada para simplificar a rotina de professores e coordenação pedagógica, substituindo planilhas manuais por um painel web intuitivo e centralizado com relatórios instantâneos de assiduidade.",
    highlights: [
      "Liderança do desenvolvimento Frontend completo em React SPA com navegação via React Router.",
      "Consumo otimizado e integração robusta com backend RESTful em Express.js.",
      "Interface responsiva pensada para usabilidade ágil durante a chamada em sala de aula.",
      "Geração de relatórios analíticos de faltas e frequência por turma e período letivo.",
      "Versionamento colaborativo com Git e modelagem em PostgreSQL."
    ],
    architecture: "Single Page Application (SPA) desacoplada consumindo API RESTful JSON com persistência relacional.",
    demoUrl: null,
    githubUrl: "https://github.com/EdilsonEmidio",
    icon: "clipboard-check"
  },
  {
    id: "ecommerce-fullstack",
    title: "E-Commerce Multi-Perfil com Spring Boot & React",
    institution: "Projeto Acadêmico / Engenharia de Software",
    period: "Julho 2025 – Novembro 2025",
    role: "Desenvolvedor Full Stack",
    category: "fullstack",
    featured: true,
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "MariaDB", "React"],
    summary:
      "Plataforma completa de e-commerce com segregação de compradores e vendedores, autenticação stateless JWT e histórico de pedidos.",
    description:
      "Aplicação full stack corporativa projetada para demonstrar segurança, modelagem transacional e arquitetura distribuída. Divide o fluxo de compra do fluxo de gestão de produtos para os vendedores.",
    highlights: [
      "Autenticação e autorização stateless via tokens JWT protegendo rotas críticas com Spring Security.",
      "Divisão granular de permissões entre usuários do tipo Comprador e Vendedor.",
      "Catálogo dinâmico de produtos, gerenciamento de estoque e carrinho de compras.",
      "Histórico detalhado de compras para clientes e painel de vendas para comerciantes.",
      "Frontend interativo em React integrado via chamadas assíncronas à API Spring Boot."
    ],
    architecture: "API RESTful em camadas (Controller, Service, Repository) com Spring Boot, JPA/Hibernate e MariaDB.",
    demoUrl: null,
    githubUrl: "https://github.com/EdilsonEmidio",
    icon: "shopping-bag"
  },
  {
    id: "sistema-especialista-ia",
    title: "Sistema Especialista com IA & Algoritmo Genético",
    institution: "UNIVASF / Inteligência Artificial",
    period: "Maio 2025 – Novembro 2025",
    role: "Pesquisa & Desenvolvimento (IA & Web)",
    category: "ai",
    featured: true,
    tags: ["React", "Python", "Flask", "Scikit-learn", "Algoritmo Genético", "Machine Learning"],
    summary:
      "Motor de recomendação inteligente que processa preferências do usuário e aplica algoritmos genéticos para selecionar combinações ideais de jogos.",
    description:
      "Projeto inovador combinando técnicas de Inteligência Artificial tradicional e heurísticas evolutivas para resolver problemas de recomendação multi-critério de alta dimensionalidade.",
    highlights: [
      "Processamento de critérios objetivos informados pelo usuário: gêneros favoritos, faixa de preço, plataforma e busca por platinas/conquistas.",
      "Treinamento e inferência de modelos preditivos em Python com a biblioteca Scikit-learn.",
      "Implementação de Algoritmo Genético customizado com funções de fitness ponderadas para seleção do grupo ideal de jogos.",
      "API RESTful em Flask servindo os resultados da otimização para a interface.",
      "Frontend dinâmico e amigável em React com exibição visual dos scores de compatibilidade."
    ],
    architecture: "Micro-serviço analítico em Flask (Python) com pipeline de IA integrado a frontend moderno em React.",
    demoUrl: null,
    githubUrl: "https://github.com/EdilsonEmidio",
    icon: "brain-circuit"
  }
];

export const experienceData = [
  {
    role: "Estágio em Desenvolvimento Full Stack",
    company: "STI - Univasf (Superintendência de Tecnologia da Informação)",
    period: "Março 2026 – Julho 2026",
    location: "Petrolina / Salgueiro, PE",
    badge: "Estágio Oficial",
    description:
      "Participação ativa na equipe de TI da universidade, atuando na remodelação e evolução do sistema institucional Acadigitus, responsável pelos fluxos de diplomas e serviços estudantis.",
    responsibilities: [
      "Desenvolvimento de páginas e interfaces reativas utilizando Laravel, Livewire e FluxUI.",
      "Modelagem e manutenção de esquemas relacionais no banco de dados PostgreSQL.",
      "Implementação de regras de negócio em backend PHP seguindo arquitetura MVC em camadas.",
      "Resolução de inconsistências, testes de validação e padronização do ambiente via Docker Compose."
    ]
  },
  {
    role: "Desenvolvimento Frontend & Integração",
    company: "Projeto PresenSys (Faculdade / Escola Local)",
    period: "Maio 2026 – Julho 2026",
    location: "Salgueiro, PE",
    badge: "Projeto de Extensão",
    description:
      "Construção colaborativa do sistema de gestão de faltas e turmas escolares para uma instituição de ensino da região.",
    responsibilities: [
      "Responsável pela arquitetura e desenvolvimento da interface com React e React Router.",
      "Integração contínua com a API Restful em Node.js (Express) e banco PostgreSQL.",
      "Foco em usabilidade e geração de relatórios de assiduidade claros para a equipe escolar."
    ]
  },
  {
    role: "Desenvolvimento Full Stack (Java & React)",
    company: "Projeto E-Commerce Multi-Perfil",
    period: "Julho 2025 – Novembro 2025",
    location: "UNIVASF",
    badge: "Projeto Prático",
    description:
      "Criação de plataforma transacional com separação de atores (compradores e vendedores), fluxo de pedidos e segurança robusta.",
    responsibilities: [
      "Configuração de autenticação stateless com Spring Security e JSON Web Tokens (JWT).",
      "Modelagem do banco MariaDB com Hibernate e Spring Data JPA.",
      "Desenvolvimento da interface web responsiva em React."
    ]
  },
  {
    role: "Pesquisa & Desenvolvimento em IA (Algoritmos Genéticos)",
    company: "Sistema Especialista de Recomendação",
    period: "Maio 2025 – Novembro 2025",
    location: "UNIVASF",
    badge: "Inteligência Artificial",
    description:
      "Modelagem e desenvolvimento de algoritmo genético associado a aprendizado de máquina para recomendação de jogos multi-critério.",
    responsibilities: [
      "Implementação de operadores genéticos (crossover, mutação, seleção por torneio/roleta) em Python.",
      "Treinamento de modelos em Scikit-learn e exposição de endpoints via Flask.",
      "Construção de dashboard interativo em React."
    ]
  }
];

export const educationData = [
  {
    degree: "Graduação em Ciência da Computação",
    institution: "UNIVASF — Universidade Federal do Vale do São Francisco",
    status: "Cursando",
    period: "Em andamento",
    details:
      "Formação sólida em algoritmos, estruturas de dados, engenharia de software, sistemas distribuídos, banco de dados e inteligência artificial."
  },
  {
    degree: "Hackathon em Redes Comunitárias e Inclusão Digital",
    institution: "Instituto Federal (IF)",
    status: "Concluído",
    period: "Certificado",
    details:
      "Desenvolvimento intensivo de soluções tecnológicas voltadas para inclusão digital e conectividade em comunidades."
  }
];

export const extraCourses = [
  { name: "Desenvolvimento Web Completo", provider: "Udemy", status: "Concluído" },
  { name: "Inglês B1", provider: "Udemy", status: "Cursando" },
  { name: "Otimização de Processos", provider: "Faculdade", status: "Concluído" },
  { name: "Documentação Científica & LaTeX", provider: "Faculdade", status: "Concluído" },
  { name: "Excel & Power BI para Análise de Dados", provider: "YouTube / Prática", status: "Concluído" }
];

export const softSkills = [
  { title: "Confiabilidade", desc: "Compromisso rigoroso com prazos, qualidade de código e entregas sólidas." },
  { title: "Comunicação Clara", desc: "Habilidade de alinhar expectativas técnicas com clareza para equipes e clientes." },
  { title: "Melhoria Contínua", desc: "Estudo constante de novas ferramentas, padrões de arquitetura e novas stacks." },
  { title: "Resiliência & Solução", desc: "Capacidade analítica para diagnosticar bugs complexos e resolver problemas." }
];

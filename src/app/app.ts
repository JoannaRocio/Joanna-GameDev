import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly activeTab = signal('inicio');
  protected readonly activeSkillGroup = signal(0);
  protected readonly activeExperienceSection = signal('laboral');
  protected readonly language = signal<'en' | 'es'>('en');
  protected readonly copy = computed(() =>
    this.language() === 'en' ? this.englishCopy : this.spanishCopy,
  );

  private readonly englishCopy = {
    navigationLabel: 'Portfolio sections',
    tabs: [
      { id: 'inicio', label: 'Home', icon: '⌂' },
      { id: 'juegos', label: 'Games', icon: '▣' },
      { id: 'habilidades', label: 'Skills', icon: '⌘' },
      { id: 'experiencia', label: 'Experience', icon: '◈' },
      { id: 'contacto', label: 'Contact', icon: '↗' },
    ],
    headerRole: 'GAME DEV · AI APPLICATION DEVELOPER',
    playerProfile: 'PLAYER PROFILE · BUENOS AIRES',
    roles: 'Game Developer · Frontend Specialist · AI Application Developer',
    introduction: '6+ years building web applications. Now also creating video games with Unity and C#.',
    newMission: 'NEW QUEST · AUG 2026',
    degree: "Bachelor's Degree in Video Game Programming",
    university: 'University of the City of Buenos Aires',
    playerCard: 'Player profile: Game Developer level',
    webExperience: 'WEB EXP.',
    years: '6+ YEARS',
    gameEngine: 'GAME ENGINE',
    questProgress: 'QUEST PROGRESS',
    projectsEyebrow: 'PROJECTS · UNITY / C#',
    gamesTitle: 'Video Games',
    projectCount: '02 PROJECTS',
    games: [
      {
        genre: '2D SHMUP · ARCADE',
        description: 'Shoot bubbles, defeat the final boss, and save the reef.',
        imageAlt: 'Fishing Fish gameplay: the character shoots bubbles at underwater enemies.',
        status: 'PLAYABLE IN BROWSER',
        play: 'Play on itch.io',
      },
      {
        genre: 'SIMULATION · ADVENTURE · FARMING',
        description: 'Explore, farm, catch monsters, and care for your pets.',
        imageAlt: "Memo's Island screenshot: a village scene with houses, gardens, and characters.",
        status: 'IN DEVELOPMENT',
        play: 'Play on itch.io',
      },
    ],
    skillsEyebrow: 'TECHNOLOGIES & TOOLS',
    skillsTitle: 'Skills',
    skillCategoriesLabel: 'Skill categories',
    skillGroups: [
      { title: 'Frontend', tabLabel: 'Frontend' },
      { title: 'Backend', tabLabel: 'Backend' },
      { title: 'AI-assisted development', tabLabel: 'AI tools' },
      { title: 'AI application development', tabLabel: 'AI apps' },
      { title: 'Data, testing & tools', tabLabel: 'Other' },
    ],
    experienceEyebrow: 'PROFESSIONAL BACKGROUND',
    experienceTitle: 'Experience',
    downloadCv: 'Download CV (Spanish)',
    experienceSectionsLabel: 'Experience and education',
    workExperience: 'Work experience',
    educationTab: 'Education',
    experience: [
      {
        period: 'Jul 2025 — Nov 2025',
        role: 'Full Stack Developer',
        company: 'Gire S.A. · Client: Rapipago',
        summary: 'System migration and payment flows, React frontend, and Java APIs.',
        stack: 'React · Redux · TypeScript · Java · Spring Boot',
      },
      {
        period: 'Apr 2024 — Jun 2025',
        role: 'Frontend Developer',
        company: 'Nonconformist · Andina ART / Banco Macro',
        summary: 'Responsive website for Andina ART and a ~30-component library for Banco Macro.',
        stack: 'React · TypeScript · Redux · SCSS · Storybook',
      },
      {
        period: 'Mar 2023 — Mar 2024',
        role: 'Frontend Developer',
        company: 'Huenei IT Services · Client: Molinos Agro',
        summary: 'Commercial management app, responsive interfaces, and API integration.',
        stack: 'Angular · TypeScript · RxJS · .NET · Java',
      },
      {
        period: 'Dec 2021 — Feb 2023',
        role: 'Frontend Developer',
        company: 'FYO (Futures and Options)',
        summary: 'Internal application, reusable components, and data grids for large datasets.',
        stack: 'Angular · TypeScript · RxJS · Jasmine',
      },
      {
        period: 'Jul 2019 — Dec 2021',
        role: 'Frontend / Full Stack Developer',
        company: 'Baufest · Clients: Bcycle / WarnerMedia',
        summary: 'Full-stack web applications, React frontend, and .NET solutions.',
        stack: 'React · JavaScript · ASP.NET · .NET · SQL Server',
      },
    ],
    education: [
      {
        period: 'Aug 2026 — Present',
        title: 'BSc in Video Game Programming',
        place: 'University of the City of Buenos Aires',
      },
      {
        period: 'Aug 2025',
        title: 'Computer Programming Associate Degree',
        place: 'National University of Lomas de Zamora · UNLZ',
      },
    ],
    current: 'IN PROGRESS',
    contactEyebrow: 'CONTACT',
    contactTitle: 'Contact me',
    contactIntroduction: 'Video games, frontend, and AI development.',
    contactLinks: ['GitHub', 'LinkedIn', 'Email', 'Web portfolio', 'itch.io'],
    footerRole: 'Game Developer · Unity · C#',
  };

  private readonly spanishCopy = {
    navigationLabel: 'Secciones del portafolio',
    tabs: [
      { id: 'inicio', label: 'Inicio', icon: '⌂' },
      { id: 'juegos', label: 'Juegos', icon: '▣' },
      { id: 'habilidades', label: 'Habilidades', icon: '⌘' },
      { id: 'experiencia', label: 'Experiencia', icon: '◈' },
      { id: 'contacto', label: 'Contacto', icon: '↗' },
    ],
    headerRole: 'GAME DEV · DESARROLLO DE APLICACIONES CON IA',
    playerProfile: 'PERFIL DEL JUGADOR · BUENOS AIRES',
    roles: 'Game Developer · Frontend Specialist · AI Application Developer',
    introduction: 'Más de 6 años creando aplicaciones web. Ahora también desarrollo videojuegos con Unity y C#.',
    newMission: 'NUEVA MISIÓN · AGO. 2026',
    degree: 'Lic. en Programación de Videojuegos',
    university: 'Universidad de la Ciudad de Buenos Aires',
    playerCard: 'Perfil de jugadora: nivel Game Developer',
    webExperience: 'EXP. WEB',
    years: '6+ AÑOS',
    gameEngine: 'GAME ENGINE',
    questProgress: 'PROGRESO DE MISIÓN',
    projectsEyebrow: 'PROYECTOS · UNITY / C#',
    gamesTitle: 'Videojuegos',
    projectCount: '02 PROYECTOS',
    games: [
      {
        genre: '2D SHMUP · ARCADE',
        description: 'Dispara burbujas, derrota al jefe final y salva el arrecife.',
        imageAlt: 'Captura de Fishing Fish: el personaje dispara burbujas a enemigos bajo el agua.',
        status: 'JUGABLE EN NAVEGADOR',
        play: 'Jugar en itch.io',
      },
      {
        genre: 'SIMULACIÓN · AVENTURA · GRANJA',
        description: 'Explora, cultiva, atrapa monstruos y cuida tus mascotas.',
        imageAlt: "Captura de Memo's Island: escena de pueblo con casas, jardines y personajes.",
        status: 'EN DESARROLLO',
        play: 'Jugar en itch.io',
      },
    ],
    skillsEyebrow: 'TECNOLOGÍAS Y HERRAMIENTAS',
    skillsTitle: 'Habilidades',
    skillCategoriesLabel: 'Categorías de habilidades',
    skillGroups: [
      { title: 'Frontend', tabLabel: 'Frontend' },
      { title: 'Backend', tabLabel: 'Backend' },
      { title: 'Desarrollo asistido por IA', tabLabel: 'IA tools' },
      { title: 'Desarrollo de aplicaciones con IA', tabLabel: 'Apps IA' },
      { title: 'Datos, testing y herramientas', tabLabel: 'Otras' },
    ],
    experienceEyebrow: 'TRAYECTORIA PROFESIONAL',
    experienceTitle: 'Experiencia',
    downloadCv: 'Descargar CV (Español)',
    experienceSectionsLabel: 'Experiencia y formación',
    workExperience: 'Experiencia laboral',
    educationTab: 'Formación',
    experience: [
      {
        period: 'Jul 2025 — Nov 2025',
        role: 'Full Stack Developer',
        company: 'Gire S.A. · Cliente: Rapipago',
        summary: 'Migración de sistema y desarrollo de flujos de pago, frontend React y APIs Java.',
        stack: 'React · Redux · TypeScript · Java · Spring Boot',
      },
      {
        period: 'Abr 2024 — Jun 2025',
        role: 'Frontend Developer',
        company: 'Nonconformist · Andina ART / Banco Macro',
        summary: 'Sitio responsive para Andina ART y librería de ~30 componentes para Banco Macro.',
        stack: 'React · TypeScript · Redux · SCSS · Storybook',
      },
      {
        period: 'Mar 2023 — Mar 2024',
        role: 'Frontend Developer',
        company: 'Huenei IT Services · Cliente: Molinos Agro',
        summary: 'Aplicación de gestión comercial, interfaces responsive e integración con APIs.',
        stack: 'Angular · TypeScript · RxJS · .NET · Java',
      },
      {
        period: 'Dic 2021 — Feb 2023',
        role: 'Frontend Developer',
        company: 'FYO (Futuros y Opciones)',
        summary: 'Aplicación interna, componentes reutilizables y grillas para grandes volúmenes de datos.',
        stack: 'Angular · TypeScript · RxJS · Jasmine',
      },
      {
        period: 'Jul 2019 — Dic 2021',
        role: 'Frontend / Full Stack Developer',
        company: 'Baufest · Clientes: Bcycle / WarnerMedia',
        summary: 'Aplicaciones web full stack, frontend React y soluciones con .NET.',
        stack: 'React · JavaScript · ASP.NET · .NET · SQL Server',
      },
    ],
    education: [
      {
        period: 'Ago. 2026 — Actualidad',
        title: 'Licenciatura en Programación de Videojuegos',
        place: 'Universidad de la Ciudad de Buenos Aires',
      },
      {
        period: 'Ago. 2025',
        title: 'Tecnicatura en Programación de Computadores',
        place: 'Universidad Nacional de Lomas de Zamora · UNLZ',
      },
    ],
    current: 'EN CURSO',
    contactEyebrow: 'CONTACTO',
    contactTitle: 'Contáctame',
    contactIntroduction: 'Videojuegos, frontend y desarrollo con IA.',
    contactLinks: ['GitHub', 'LinkedIn', 'Email', 'Portfolio web', 'itch.io'],
    footerRole: 'Game Developer · Unity · C#',
  };

  protected readonly skillGroups = [
    {
      skills: [
        'React 18–19',
        'Angular 7–18',
        'TypeScript',
        'JavaScript',
        'Next.js',
        'Redux',
        'RxJS',
        'HTML5',
        'CSS3',
        'SASS / SCSS',
        'Tailwind CSS',
        'Material UI',
        'Angular Material',
        'Bootstrap',
      ],
    },
    {
      skills: [
        'C#',
        '.NET Core',
        'ASP.NET Core Web API',
        '.NET Framework',
        'ASP.NET MVC',
        'Java',
        'Spring Boot',
        'Maven',
        'REST APIs',
      ],
    },
    {
      skills: ['GitHub Copilot', 'Cursor', 'ChatGPT', 'Gemini'],
    },
    {
      skills: [
        'LLMs',
        'AI agents',
        'Tool / function calling',
        'MCP',
        'Prompt engineering',
        'Semantic Kernel',
      ],
    },
    {
      skills: [
        'SQL Server',
        'MySQL',
        'PostgreSQL',
        'Jest',
        'Jasmine',
        'Git',
        'GitLab',
        'Bitbucket',
        'Azure DevOps',
        'Docker',
        'Postman',
        'Jira',
        'Trello',
        'Scrum',
        'Kanban',
      ],
    },
  ];

  protected readonly games = [
    {
      title: 'Fishing Fish',
      image: '/images/fishing-fish.png',
      link: 'https://sukaritasss.itch.io/fishing-fish',
    },
    {
      title: "Memo's Island",
      image: '/images/memos-island.png',
    },
  ];

  protected readonly contactLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/JoannaRocio',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/joanna-sakugawa/',
    },
    {
      label: 'Email',
      href: 'mailto:jrsakugawa@gmail.com',
    },
    {
      label: 'Web portfolio',
      href: 'https://sakugawa-joanna-porfolio.vercel.app/',
    },
    {
      label: 'itch.io',
      href: 'https://sukaritasss.itch.io/fishing-fish',
    },
  ];

  protected selectTab(tab: string): void {
    this.activeTab.set(tab);
  }

  protected setLanguage(language: 'en' | 'es'): void {
    this.language.set(language);
    document.documentElement.lang = language;
  }

  protected selectSkillGroup(index: number): void {
    this.activeSkillGroup.set(index);
  }

  protected selectExperienceSection(section: string): void {
    this.activeExperienceSection.set(section);
  }
}

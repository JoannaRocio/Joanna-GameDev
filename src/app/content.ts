export type Lang = 'es' | 'en' | 'ja';

export const LANGS: { id: Lang; label: string; name: string }[] = [
  { id: 'es', label: 'ES', name: 'Español' },
  { id: 'en', label: 'EN', name: 'English' },
  { id: 'ja', label: 'JA', name: '日本語' },
];

export type GameId = 'fishing' | 'dona' | 'memo' | 'pompon';
export type Engine = 'Unity' | 'Godot';

/** Data that does not change between languages. */
export interface GameData {
  id: GameId;
  engine: Engine;
  image?: string;
  width?: number;
  height?: number;
  link?: string;
  /** Vertical phone screenshots, shown side by side instead of `image`. */
  screens?: string[];
  released: boolean;
  browser: boolean;
  tags: string[];
}

export const RAPHA = {
  image: '/images/rapha.webp',
  width: 962,
  height: 489,
  link: 'https://jojo-latam-games.itch.io/rapha-vuelve-a-casa',
};

export const GAMES: GameData[] = [
  {
    id: 'fishing',
    engine: 'Unity',
    image: '/images/fishing-fish.png',
    width: 1365,
    height: 768,
    link: 'https://jojo-latam-games.itch.io/fishing-fish',
    released: true,
    browser: true,
    tags: ['Unity', 'C#', 'WebGL', 'Pixel art'],
  },
  {
    id: 'dona',
    engine: 'Unity',
    image: '/images/dona.webp',
    width: 993,
    height: 550,
    link: 'https://jojo-latam-games.itch.io/el-sueo-de-dona',
    released: true,
    browser: true,
    tags: ['Unity', 'C#', 'WebGL', 'Roguelike'],
  },
  {
    id: 'memo',
    engine: 'Unity',
    image: '/images/memos-island.png',
    width: 898,
    height: 492,
    released: false,
    browser: false,
    tags: ['Unity', 'C#', 'RPG', 'Game Boy style'],
  },
  {
    id: 'pompon',
    engine: 'Godot',
    screens: [
      '/images/pompon/portada.webp',
      '/images/pompon/casa.webp',
      '/images/pompon/aprender-jugando.webp',
      '/images/pompon/tienda.webp',
    ],
    released: false,
    browser: false,
    tags: ['Godot', 'Mobile', 'Edu'],
  },
];

export type SpriteGroup = 'character' | 'enemies' | 'items' | 'world';
export type SpriteId =
  | 'rapha-idle' | 'rapha-walk' | 'rapha-jump' | 'rapha-twist'
  | 'toad-jump' | 'parrot'
  | 'coin' | 'bubble' | 'heart'
  | 'platform-grass' | 'platform-cloud' | 'platform-hell' | 'ground-tiles';

export const SPRITES: { group: SpriteGroup; items: { id: SpriteId; src: string; w: number; h: number; frames?: number }[] }[] = [
  {
    group: 'character',
    items: [
      { id: 'rapha-idle', src: '/art/rapha-idle.webp', w: 240, h: 267, frames: 23 },
      { id: 'rapha-walk', src: '/art/rapha-walk.webp', w: 147, h: 246, frames: 8 },
      { id: 'rapha-jump', src: '/art/rapha-jump.webp', w: 156, h: 267, frames: 11 },
      { id: 'rapha-twist', src: '/art/rapha-twist.webp', w: 189, h: 246, frames: 12 },
    ],
  },
  {
    group: 'enemies',
    items: [
      { id: 'toad-jump', src: '/art/toad-jump.webp', w: 186, h: 135, frames: 13 },
      { id: 'parrot', src: '/art/parrot.webp', w: 180, h: 111, frames: 16 },
    ],
  },
  {
    group: 'items',
    items: [
      { id: 'coin', src: '/art/coin.webp', w: 120, h: 132, frames: 11 },
      { id: 'bubble', src: '/art/bubble.png', w: 228, h: 204 },
      { id: 'heart', src: '/art/heart.png', w: 156, h: 132 },
    ],
  },
  {
    group: 'world',
    items: [
      { id: 'platform-grass', src: '/art/platform-grass.png', w: 180, h: 198 },
      { id: 'platform-cloud', src: '/art/platform-cloud.png', w: 174, h: 106 },
      { id: 'platform-hell', src: '/art/platform-hell.png', w: 180, h: 184 },
      { id: 'ground-tiles', src: '/art/ground-tiles.png', w: 336, h: 258 },
    ],
  },
];

export type TrackId = 'menu' | 'gameplay' | 'sad';
export const TRACKS: { id: TrackId; src: string; duration: number }[] = [
  { id: 'menu', src: '/music/main-menu.mp3', duration: 16 },
  { id: 'gameplay', src: '/music/gameplay.mp3', duration: 34 },
  { id: 'sad', src: '/music/sad-theme.mp3', duration: 36 },
];

export const LINKS = {
  itch: 'https://jojo-latam-games.itch.io/',
  github: 'https://github.com/JoannaRocio',
  linkedin: 'https://www.linkedin.com/in/joanna-sakugawa/',
  email: 'jrsakugawa@gmail.com',
  cvEs: '/files/joanna-sakugawa-cv-es.pdf',
  cvEn: '/files/joanna-sakugawa-resume-en.pdf',
};

export const PIPELINE_TOOLS = [
  ['Unity', 'C#', 'Godot'],
  ['Piskel', 'Krita'],
  ['FL Studio Mobile', 'sfxr'],
  ['GitHub', 'Supabase', 'Claude'],
];

export const WEB_SKILLS = [
  'React',
  'Angular',
  'React Native',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Redux',
  'HTML5 · CSS3 · SASS',
  'C# · .NET',
  'Java · Spring Boot',
  'SQL Server · MySQL · PostgreSQL',
  'Jest · Jasmine',
  'Git · Azure DevOps',
  'Scrum · Kanban',
];

export const JOBS = [
  { company: 'Gire S.A.', stack: 'React · Java · TypeScript' },
  { company: 'Nonconformist', stack: 'React · React Native · Next.js' },
  { company: 'HUENEI IT', stack: 'Angular · Java · .NET Core' },
  { company: 'Futuros y Opciones', stack: 'Angular · TypeScript' },
  { company: 'Baufest', stack: 'Angular · React · .NET' },
];

interface GameCopy {
  title: string;
  genre: string;
  description: string;
  imageAlt: string;
  /** One description per screenshot in `screens`. */
  screenAlts?: string[];
}

export interface Copy {
  htmlTitle: string;
  metaDescription: string;
  skipLink: string;
  langLabel: string;
  nav: { home: string; games: string; art: string; about: string; skills: string; experience: string; contact: string };
  menu: string;
  hero: {
    eyebrow: string;
    role: string;
    intro: string;
    ctaGames: string;
    ctaCv: string;
    stats: { value: string; label: string }[];
    pressStart: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    genre: string;
    badge: string;
    description: string;
    imageAlt: string;
    creditsTitle: string;
    credits: { role: string; detail: string }[];
    play: string;
  };
  games: {
    eyebrow: string;
    title: string;
    intro: string;
    filtersLabel: string;
    filters: { all: string; unity: string; godot: string; playable: string };
    released: string;
    inDev: string;
    browser: string;
    mobile: string;
    play: string;
    soon: string;
    items: Record<GameId, GameCopy>;
  };
  art: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: Record<SpriteGroup, string>;
    sprites: Record<SpriteId, string>;
    frames: string;
    musicTitle: string;
    musicIntro: string;
    tracks: Record<TrackId, string>;
    play: string;
    pause: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    languagesTitle: string;
    languages: string[];
    locationTitle: string;
    location: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    pipeline: { title: string; detail: string }[];
    webTitle: string;
    webIntro: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    jobs: { role: string; period: string; summary: string }[];
    educationTitle: string;
    education: { title: string; place: string; period: string; current: boolean }[];
    current: string;
    downloadEs: string;
    downloadEn: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    email: string;
    itch: string;
  };
  footer: string;
}

const es: Copy = {
  htmlTitle: 'Joanna Rocío Sakugawa · Game Developer',
  metaDescription:
    'Portfolio de Joanna Rocío Sakugawa, game developer en Buenos Aires. Juegos 2D en Unity y Godot: programación, pixel art, música y sonido.',
  skipLink: 'Saltar al contenido',
  langLabel: 'Idioma',
  nav: { home: 'Inicio', games: 'Juegos', art: 'Arte y música', about: 'Sobre mí', skills: 'Habilidades', experience: 'Experiencia', contact: 'Contacto' },
  menu: 'Menú',
  hero: {
    eyebrow: 'GAME DEVELOPER · BUENOS AIRES',
    role: 'Game Developer · Técnica en Programación',
    intro:
      'Hago juegos 2D con Unity y Godot. Programo y también dibujo el pixel art, compongo la música y armo los efectos de sonido. Antes de los videojuegos trabajé más de 6 años como programadora web.',
    ctaGames: 'Ver mis juegos',
    ctaCv: 'Descargar CV',
    stats: [
      { value: '5', label: 'juegos' },
      { value: '3', label: 'jugables en el navegador' },
      { value: '6+', label: 'años programando' },
    ],
    pressStart: 'PRESS START',
  },
  featured: {
    eyebrow: 'PROYECTO DESTACADO',
    title: 'Rapha vuelve a casa',
    genre: 'Plataformero 2D · Unity · C#',
    badge: 'Hecho 100% por mí, sin IA',
    description:
      'Rapha quiere volver a casa con su familia. Recorrés su mundo esquivando sapos y loros, los atacás con burbujas y juntás monedas hasta llegar a la meta. Hice todo yo: el código, los sprites, la música y los sonidos.',
    imageAlt: 'Pantalla de inicio de Rapha vuelve a casa: una tortuga con gorra junto al menú del juego.',
    creditsTitle: 'Créditos',
    credits: [
      { role: 'Programación', detail: 'Unity · C#' },
      { role: 'Arte y animación', detail: 'Pixel art · Piskel · Krita' },
      { role: 'Música', detail: 'FL Studio Mobile' },
      { role: 'Efectos de sonido', detail: 'sfxr' },
    ],
    play: 'Jugar en itch.io',
  },
  games: {
    eyebrow: 'NIVEL 1 · PROYECTOS',
    title: 'Mis juegos',
    intro: 'Tres están publicados en itch.io y se juegan directo en el navegador. Los otros dos están en desarrollo.',
    filtersLabel: 'Filtrar juegos',
    filters: { all: 'Todos', unity: 'Unity', godot: 'Godot', playable: 'Jugables' },
    released: 'Publicado',
    inDev: 'En desarrollo',
    browser: 'Navegador',
    mobile: 'Celular',
    play: 'Jugar',
    soon: 'Próximamente',
    items: {
      fishing: {
        title: 'Fishing Fish',
        genre: "Shoot 'em up 2D",
        description:
          'Un pez chiquito armado con burbujas esquiva oleadas de criaturas marinas, cada una con su propio patrón de ataque, hasta enfrentar al jefe final y salvar el arrecife.',
        imageAlt: 'Captura de Fishing Fish: un pez naranja dispara burbujas a peces enemigos bajo el agua.',
      },
      dona: {
        title: 'El sueño de Dona',
        genre: 'Plataformero runner con elementos roguelike',
        description:
          'La noche antes de una carrera importante, una chica sueña con Dona, una tortuga que corre sin parar. Hay que saltar, esquivar enemigos, juntar las 3 monedas estrella y vencer al jefe final para despertar a tiempo.',
        imageAlt: 'Pantalla de inicio de El sueño de Dona: una tortuga corredora junto al menú.',
      },
      memo: {
        title: "Memo's Island",
        genre: 'RPG de aventura 2D con carreras de monstruos, estilo Game Boy',
        description:
          'Una aventura en una isla con su pueblo, un reloj con ciclo de día y noche, y monstruos que compiten en carreras.',
        imageAlt: "Captura de Memo's Island: un pueblo de noche con faroles, casas y un monstruo junto al personaje.",
      },
      pompon: {
        title: 'Pompon Friends',
        genre: 'Mascota virtual 2D estilo Tamagotchi',
        description: 'Un juego para celular, pensado para chicos, donde cuidan a su mascota virtual y aprenden mientras juegan.',
        imageAlt: 'Capturas de Pompon Friends en el celular.',
        screenAlts: [
          'Pantalla de inicio de Pompon Friends con cinco mascotas y el botón ¡Jugar!.',
          'Mochi, una conejita celeste, en su casa con las barras de hambre, energía y felicidad.',
          'Minijuego de aprender jugando: un examen de multiplicación con tres respuestas.',
          'Tienda de muebles y ropa para decorar la casa de la mascota.',
        ],
      },
    },
  },
  art: {
    eyebrow: 'NIVEL 2 · ARTE Y SONIDO',
    title: 'Arte y música',
    intro: 'Estos sprites y temas los hice yo para Rapha vuelve a casa. Dibujé cada animación cuadro por cuadro en pixel art y compuse la música en FL Studio Mobile.',
    groups: { character: 'Personaje', enemies: 'Enemigos', items: 'Objetos', world: 'Escenario' },
    sprites: {
      'rapha-idle': 'Rapha · quieto',
      'rapha-walk': 'Rapha · caminando',
      'rapha-jump': 'Rapha · saltando',
      'rapha-twist': 'Rapha · giro',
      'toad-jump': 'Sapo',
      parrot: 'Loro',
      coin: 'Moneda',
      bubble: 'Burbuja',
      heart: 'Vida',
      'platform-grass': 'Plataforma de pasto',
      'platform-cloud': 'Plataforma de nubes',
      'platform-hell': 'Plataforma del infierno',
      'ground-tiles': 'Tiles de suelo',
    },
    frames: 'cuadros',
    musicTitle: 'Música',
    musicIntro: 'Temas originales del juego.',
    tracks: { menu: 'Menú principal', gameplay: 'Gameplay', sad: 'Tema triste' },
    play: 'Reproducir',
    pause: 'Pausar',
  },
  about: {
    eyebrow: 'PERFIL DE JUGADORA',
    title: 'Sobre mí',
    paragraphs: [
      'Soy desarrolladora de videojuegos y trabajo principalmente con Unity y C#. También hago juegos en Godot.',
      'Vengo de más de 6 años programando aplicaciones web para empresas como Gire, Baufest y Futuros y Opciones. De ahí traigo el trabajo en equipo con Scrum, el código ordenado y el cuidado por las interfaces.',
      'Desde agosto de 2026 estudio la Licenciatura en Desarrollo y Producción de Videojuegos en la Universidad de la Ciudad Autónoma de Buenos Aires.',
    ],
    languagesTitle: 'Idiomas',
    languages: ['Español (nativo)', 'Inglés (B2)'],
    locationTitle: 'Ubicación',
    location: 'Buenos Aires, Argentina',
  },
  skills: {
    eyebrow: 'INVENTARIO',
    title: 'Cómo hago un juego',
    intro: 'Me ocupo de cada parte del proceso, desde el código hasta el sonido.',
    pipeline: [
      { title: 'Programación', detail: 'Gameplay, enemigos y jefes, menús, opciones, tabla de puntajes y builds para navegador (WebGL).' },
      { title: 'Arte', detail: 'Personajes, animaciones, fondos y elementos de interfaz en pixel art.' },
      { title: 'Audio', detail: 'Música propia y efectos de sonido retro.' },
      { title: 'Herramientas', detail: 'Control de versiones, base de datos en la nube y asistentes de IA.' },
    ],
    webTitle: 'Desarrollo web',
    webIntro: 'Más de 6 años de experiencia profesional en frontend y full stack.',
  },
  experience: {
    eyebrow: 'HISTORIAL',
    title: 'Experiencia',
    jobs: [
      { role: 'Programadora Full Stack', period: 'Jul. 2025 – Nov. 2025', summary: 'Migración de sistema y flujos de pago, frontend en React y APIs en Java.' },
      { role: 'Programadora Frontend', period: 'Abr. 2024 – Jun. 2025', summary: 'Sitio responsive para Andina ART y una librería de ~30 componentes para Banco Macro.' },
      { role: 'Programadora Frontend', period: 'Mar. 2023 – Mar. 2024', summary: 'Aplicación de gestión comercial para Molinos Agro e integración con APIs.' },
      { role: 'Programadora Frontend', period: 'Dic. 2021 – Feb. 2023', summary: 'Aplicación interna, componentes reutilizables y grillas para grandes volúmenes de datos.' },
      { role: 'Programadora Full Stack', period: 'Jul. 2019 – Dic. 2021', summary: 'Aplicaciones web full stack para Bcycle y WarnerMedia.' },
    ],
    educationTitle: 'Educación',
    education: [
      { title: 'Licenciatura en Desarrollo y Producción de Videojuegos', place: 'Universidad de la Ciudad Autónoma de Buenos Aires', period: 'Desde agosto 2026', current: true },
      { title: 'Tecnicatura en Programación de Computadores', place: 'Universidad Nacional de Lomas de Zamora', period: 'Finalizada en agosto 2025', current: false },
    ],
    current: 'En curso',
    downloadEs: 'CV en español',
    downloadEn: 'CV en inglés',
  },
  contact: {
    eyebrow: 'CONTINUE?',
    title: 'Contacto',
    intro: 'Estoy buscando trabajo como game developer. Si tenés una propuesta o querés hablar de algún proyecto, escribime.',
    email: 'Escribime un mail',
    itch: 'Mis juegos en itch.io',
  },
  footer: 'Hecho con Angular por Joanna Rocío Sakugawa',
};

const en: Copy = {
  htmlTitle: 'Joanna Rocío Sakugawa · Game Developer',
  metaDescription:
    'Portfolio of Joanna Rocío Sakugawa, a game developer in Buenos Aires. 2D games in Unity and Godot: programming, pixel art, music and sound.',
  skipLink: 'Skip to content',
  langLabel: 'Language',
  nav: { home: 'Home', games: 'Games', art: 'Art & music', about: 'About', skills: 'Skills', experience: 'Experience', contact: 'Contact' },
  menu: 'Menu',
  hero: {
    eyebrow: 'GAME DEVELOPER · BUENOS AIRES',
    role: 'Game Developer · Programming Technician',
    intro:
      "I make 2D games with Unity and Godot. I write the code, and I also draw the pixel art, compose the music and make the sound effects. Before games, I worked as a web developer for more than 6 years.",
    ctaGames: 'See my games',
    ctaCv: 'Download resume',
    stats: [
      { value: '5', label: 'games' },
      { value: '3', label: 'playable in the browser' },
      { value: '6+', label: 'years coding' },
    ],
    pressStart: 'PRESS START',
  },
  featured: {
    eyebrow: 'FEATURED PROJECT',
    title: 'Rapha Goes Home',
    genre: '2D platformer · Unity · C#',
    badge: 'Made 100% by me, no AI',
    description:
      'Rapha wants to get back home to the family. You run through Rapha\'s world dodging frogs and parrots, hit them with bubbles and collect coins until you reach the goal. I made everything myself: the code, the sprites, the music and the sounds.',
    imageAlt: 'Rapha Goes Home title screen: a turtle wearing a cap next to the game menu.',
    creditsTitle: 'Credits',
    credits: [
      { role: 'Programming', detail: 'Unity · C#' },
      { role: 'Art & animation', detail: 'Pixel art · Piskel · Krita' },
      { role: 'Music', detail: 'FL Studio Mobile' },
      { role: 'Sound effects', detail: 'sfxr' },
    ],
    play: 'Play on itch.io',
  },
  games: {
    eyebrow: 'LEVEL 1 · PROJECTS',
    title: 'My games',
    intro: 'Three are published on itch.io and run right in your browser. The other two are in development.',
    filtersLabel: 'Filter games',
    filters: { all: 'All', unity: 'Unity', godot: 'Godot', playable: 'Playable' },
    released: 'Released',
    inDev: 'In development',
    browser: 'Browser',
    mobile: 'Mobile',
    play: 'Play',
    soon: 'Coming soon',
    items: {
      fishing: {
        title: 'Fishing Fish',
        genre: "2D shoot 'em up",
        description:
          'A tiny fish armed with bubbles dodges waves of sea creatures, each with its own attack pattern, until the final boss fight to save the coral reef.',
        imageAlt: 'Fishing Fish screenshot: an orange fish shoots bubbles at enemy fish underwater.',
      },
      dona: {
        title: "Dona's Dream",
        genre: 'Runner platformer with roguelike elements',
        description:
          'The night before an important race, a girl dreams of Dona, a turtle who never stops running. Jump, dodge enemies, collect the 3 star coins and beat the final boss to wake up in time.',
        imageAlt: "Dona's Dream title screen: a running turtle next to the menu.",
      },
      memo: {
        title: "Memo's Island",
        genre: '2D adventure RPG with monster races, Game Boy style',
        description: 'An adventure on an island with its own town, a day and night clock, and monsters that compete in races.',
        imageAlt: "Memo's Island screenshot: a town at night with street lamps, houses and a monster next to the player.",
      },
      pompon: {
        title: 'Pompon Friends',
        genre: 'Tamagotchi-style 2D virtual pet',
        description: 'A mobile game for kids where they look after their virtual pet and learn while they play.',
        imageAlt: 'Pompon Friends phone screenshots.',
        screenAlts: [
          'Pompon Friends title screen with five pets and the Play button.',
          'Mochi, a light-blue bunny, at home with hunger, energy and happiness bars.',
          'Learn-while-playing minigame: a multiplication quiz with three answers.',
          'Shop with furniture and clothes to decorate the pet’s home.',
        ],
      },
    },
  },
  art: {
    eyebrow: 'LEVEL 2 · ART & SOUND',
    title: 'Art & music',
    intro: 'I made these sprites and songs for Rapha Goes Home. I drew every animation frame by frame in pixel art and composed the music in FL Studio Mobile.',
    groups: { character: 'Character', enemies: 'Enemies', items: 'Items', world: 'World' },
    sprites: {
      'rapha-idle': 'Rapha · idle',
      'rapha-walk': 'Rapha · walk',
      'rapha-jump': 'Rapha · jump',
      'rapha-twist': 'Rapha · spin',
      'toad-jump': 'Toad',
      parrot: 'Parrot',
      coin: 'Coin',
      bubble: 'Bubble',
      heart: 'Life',
      'platform-grass': 'Grass platform',
      'platform-cloud': 'Cloud platform',
      'platform-hell': 'Underworld platform',
      'ground-tiles': 'Ground tiles',
    },
    frames: 'frames',
    musicTitle: 'Music',
    musicIntro: 'Original songs from the game.',
    tracks: { menu: 'Main menu', gameplay: 'Gameplay', sad: 'Sad theme' },
    play: 'Play',
    pause: 'Pause',
  },
  about: {
    eyebrow: 'PLAYER PROFILE',
    title: 'About me',
    paragraphs: [
      "I'm a game developer and I work mainly with Unity and C#. I also make games in Godot.",
      'I come from more than 6 years building web applications for companies such as Gire, Baufest and Futuros y Opciones. That is where I learned teamwork with Scrum, clean code and care for interfaces.',
      "Since August 2026 I've been studying for a Bachelor's Degree in Video Game Development and Production at the University of the City of Buenos Aires.",
    ],
    languagesTitle: 'Languages',
    languages: ['Spanish (native)', 'English (B2)'],
    locationTitle: 'Location',
    location: 'Buenos Aires, Argentina',
  },
  skills: {
    eyebrow: 'INVENTORY',
    title: 'How I make a game',
    intro: 'I handle every part of the process, from code to sound.',
    pipeline: [
      { title: 'Programming', detail: 'Gameplay, enemies and bosses, menus, options, leaderboards and browser builds (WebGL).' },
      { title: 'Art', detail: 'Characters, animations, backgrounds and UI elements in pixel art.' },
      { title: 'Audio', detail: 'Original music and retro sound effects.' },
      { title: 'Tools', detail: 'Version control, a cloud database and AI assistants.' },
    ],
    webTitle: 'Web development',
    webIntro: 'More than 6 years of professional experience in frontend and full stack.',
  },
  experience: {
    eyebrow: 'HISTORY',
    title: 'Experience',
    jobs: [
      { role: 'Full Stack Developer', period: 'Jul. 2025 – Nov. 2025', summary: 'System migration and payment flows, React frontend and Java APIs.' },
      { role: 'Frontend Developer', period: 'Apr. 2024 – Jun. 2025', summary: 'Responsive website for Andina ART and a library of ~30 components for Banco Macro.' },
      { role: 'Frontend Developer', period: 'Mar. 2023 – Mar. 2024', summary: 'Commercial management app for Molinos Agro and API integration.' },
      { role: 'Frontend Developer', period: 'Dec. 2021 – Feb. 2023', summary: 'Internal application, reusable components and data grids for large datasets.' },
      { role: 'Full Stack Developer', period: 'Jul. 2019 – Dec. 2021', summary: 'Full stack web applications for Bcycle and WarnerMedia.' },
    ],
    educationTitle: 'Education',
    education: [
      { title: "Bachelor's Degree in Video Game Development and Production", place: 'University of the City of Buenos Aires', period: 'Since August 2026', current: true },
      { title: 'Associate Degree in Computer Programming', place: 'National University of Lomas de Zamora', period: 'Completed in August 2025', current: false },
    ],
    current: 'In progress',
    downloadEs: 'Resume in Spanish',
    downloadEn: 'Resume in English',
  },
  contact: {
    eyebrow: 'CONTINUE?',
    title: 'Contact',
    intro: "I'm looking for a job as a game developer. If you have an opportunity or want to talk about a project, send me a message.",
    email: 'Send me an email',
    itch: 'My games on itch.io',
  },
  footer: 'Built with Angular by Joanna Rocío Sakugawa',
};

const ja: Copy = {
  htmlTitle: 'Joanna Rocío Sakugawa · ゲーム開発者',
  metaDescription:
    'ブエノスアイレスのゲーム開発者、Joanna Rocío Sakugawaのポートフォリオ。UnityとGodotで2Dゲームを制作。プログラミング、ドット絵、音楽、効果音。',
  skipLink: '本文へスキップ',
  langLabel: '言語',
  nav: { home: 'ホーム', games: 'ゲーム', art: 'アート・音楽', about: 'プロフィール', skills: 'スキル', experience: '経歴', contact: '連絡先' },
  menu: 'メニュー',
  hero: {
    eyebrow: 'GAME DEVELOPER · BUENOS AIRES',
    role: 'ゲーム開発者 · プログラミング準学士',
    intro:
      'UnityとGodotで2Dゲームを作っています。プログラミングだけでなく、ドット絵、作曲、効果音も自分で手がけています。ゲーム開発の前は、Webエンジニアとして6年以上働いていました。',
    ctaGames: 'ゲームを見る',
    ctaCv: '履歴書をダウンロード',
    stats: [
      { value: '5', label: '本のゲーム' },
      { value: '3', label: '本はブラウザでプレイ可能' },
      { value: '6+', label: '年のプログラミング経験' },
    ],
    pressStart: 'PRESS START',
  },
  featured: {
    eyebrow: '注目のプロジェクト',
    title: 'Rapha Goes Home',
    genre: '2Dプラットフォーマー · Unity · C#',
    badge: 'AIを使わず、すべて自作',
    description:
      'ラファは家族の待つ家に帰りたい。カエルやオウムをよけ、泡で攻撃し、コインを集めながらゴールを目指します。コード、スプライト、音楽、効果音まで、すべて私ひとりで制作しました。',
    imageAlt: 'Rapha Goes Homeのタイトル画面：帽子をかぶったカメとゲームメニュー。',
    creditsTitle: 'クレジット',
    credits: [
      { role: 'プログラミング', detail: 'Unity · C#' },
      { role: 'アート・アニメーション', detail: 'ドット絵 · Piskel · Krita' },
      { role: '音楽', detail: 'FL Studio Mobile' },
      { role: '効果音', detail: 'sfxr' },
    ],
    play: 'itch.ioでプレイ',
  },
  games: {
    eyebrow: 'LEVEL 1 · PROJECTS',
    title: '制作したゲーム',
    intro: '3本はitch.ioで公開中で、ブラウザですぐに遊べます。残りの2本は開発中です。',
    filtersLabel: 'ゲームを絞り込む',
    filters: { all: 'すべて', unity: 'Unity', godot: 'Godot', playable: 'プレイ可能' },
    released: '公開中',
    inDev: '開発中',
    browser: 'ブラウザ',
    mobile: 'スマホ',
    play: 'プレイ',
    soon: '近日公開',
    items: {
      fishing: {
        title: 'Fishing Fish',
        genre: '2Dシューティング',
        description:
          '泡で戦う小さな魚が、それぞれ違う攻撃パターンを持つ海の生き物たちの群れをかわし、ボスを倒してサンゴ礁を守ります。',
        imageAlt: 'Fishing Fishのスクリーンショット：オレンジの魚が水中で敵の魚に泡を撃っている。',
      },
      dona: {
        title: "Dona's Dream",
        genre: 'ローグライク要素のあるランナー型プラットフォーマー',
        description:
          '大事なレースの前夜、ある女の子が走り続けるカメ「ドナ」の夢を見ます。ジャンプして敵をよけ、3枚のスターコインを集め、ボスを倒して時間までに目を覚ましましょう。',
        imageAlt: "Dona's Dreamのタイトル画面：走るカメとメニュー。",
      },
      memo: {
        title: "Memo's Island",
        genre: 'モンスターレースのある2DアドベンチャーRPG（ゲームボーイ風）',
        description: '町のある島を舞台にしたアドベンチャー。昼夜が変わる時計があり、モンスターたちがレースで競い合います。',
        imageAlt: "Memo's Islandのスクリーンショット：街灯と家が並ぶ夜の町と、プレイヤーのそばのモンスター。",
      },
      pompon: {
        title: 'Pompon Friends',
        genre: 'たまごっち風の2D育成ゲーム',
        description: '子ども向けのスマホゲーム。バーチャルペットのお世話をしながら、遊びの中で学べます。',
        imageAlt: 'Pompon Friendsのスマホ画面。',
        screenAlts: [
          '5匹のペットと「プレイ」ボタンがあるPompon Friendsのタイトル画面。',
          '空腹・元気・幸せのゲージと一緒に、家にいる水色のウサギのモチ。',
          '遊びながら学ぶミニゲーム：3つの選択肢があるかけ算クイズ。',
          'ペットの家を飾る家具や服のショップ。',
        ],
      },
    },
  },
  art: {
    eyebrow: 'LEVEL 2 · ART & SOUND',
    title: 'アートと音楽',
    intro: 'ここにあるスプライトと曲は、Rapha Goes Homeのために私が制作したものです。アニメーションは1コマずつドット絵で描き、音楽はFL Studio Mobileで作曲しました。',
    groups: { character: 'キャラクター', enemies: '敵', items: 'アイテム', world: 'ステージ' },
    sprites: {
      'rapha-idle': 'ラファ · 待機',
      'rapha-walk': 'ラファ · 歩き',
      'rapha-jump': 'ラファ · ジャンプ',
      'rapha-twist': 'ラファ · 回転',
      'toad-jump': 'カエル',
      parrot: 'オウム',
      coin: 'コイン',
      bubble: '泡',
      heart: 'ライフ',
      'platform-grass': '草の足場',
      'platform-cloud': '雲の足場',
      'platform-hell': '地獄の足場',
      'ground-tiles': '地面タイル',
    },
    frames: 'コマ',
    musicTitle: '音楽',
    musicIntro: 'ゲームのオリジナル曲。',
    tracks: { menu: 'メインメニュー', gameplay: 'ゲームプレイ', sad: '悲しいテーマ' },
    play: '再生',
    pause: '一時停止',
  },
  about: {
    eyebrow: 'PLAYER PROFILE',
    title: 'プロフィール',
    paragraphs: [
      'ゲーム開発者として、主にUnityとC#で制作しています。Godotでもゲームを作っています。',
      'これまで6年以上、Gire、Baufest、Futuros y OpcionesなどでWebアプリケーションを開発してきました。その経験から、スクラムでのチーム開発、読みやすいコード、UIへのこだわりを身につけました。',
      '2026年8月から、ブエノスアイレス市立大学でビデオゲーム開発・制作の学士課程に在籍しています。',
    ],
    languagesTitle: '言語',
    languages: ['スペイン語（ネイティブ）', '英語（B2）'],
    locationTitle: '所在地',
    location: 'アルゼンチン、ブエノスアイレス',
  },
  skills: {
    eyebrow: 'INVENTORY',
    title: 'ゲームづくりの流れ',
    intro: 'コードからサウンドまで、制作のすべての工程を担当しています。',
    pipeline: [
      { title: 'プログラミング', detail: 'ゲームプレイ、敵とボス、メニュー、設定、ランキング、ブラウザ向けビルド（WebGL）。' },
      { title: 'アート', detail: 'キャラクター、アニメーション、背景、UIパーツをドット絵で制作。' },
      { title: 'オーディオ', detail: 'オリジナル曲とレトロな効果音。' },
      { title: 'ツール', detail: 'バージョン管理、クラウドデータベース、AIアシスタント。' },
    ],
    webTitle: 'Web開発',
    webIntro: 'フロントエンドとフルスタックで6年以上の実務経験。',
  },
  experience: {
    eyebrow: 'HISTORY',
    title: '経歴',
    jobs: [
      { role: 'フルスタックエンジニア', period: '2025年7月 – 2025年11月', summary: 'システム移行と決済フローの開発。ReactのフロントエンドとJavaのAPI。' },
      { role: 'フロントエンドエンジニア', period: '2024年4月 – 2025年6月', summary: 'Andina ARTのレスポンシブサイトと、Banco Macro向けの約30コンポーネントのライブラリ。' },
      { role: 'フロントエンドエンジニア', period: '2023年3月 – 2024年3月', summary: 'Molinos Agro向けの営業管理アプリとAPI連携。' },
      { role: 'フロントエンドエンジニア', period: '2021年12月 – 2023年2月', summary: '社内アプリ、再利用可能なコンポーネント、大量データ用のグリッド。' },
      { role: 'フルスタックエンジニア', period: '2019年7月 – 2021年12月', summary: 'BcycleとWarnerMedia向けのフルスタックWebアプリ。' },
    ],
    educationTitle: '学歴',
    education: [
      { title: 'ビデオゲーム開発・制作 学士課程', place: 'ブエノスアイレス市立大学', period: '2026年8月から', current: true },
      { title: 'コンピュータープログラミング準学士', place: 'ロマス・デ・サモラ国立大学', period: '2025年8月 修了', current: false },
    ],
    current: '在学中',
    downloadEs: '履歴書（スペイン語）',
    downloadEn: '履歴書（英語）',
  },
  contact: {
    eyebrow: 'CONTINUE?',
    title: '連絡先',
    intro: 'ゲーム開発者としての仕事を探しています。お仕事のご相談やプロジェクトのお話があれば、お気軽にご連絡ください。',
    email: 'メールを送る',
    itch: 'itch.ioのゲーム',
  },
  footer: 'Angularで制作 · Joanna Rocío Sakugawa',
};

export const COPY: Record<Lang, Copy> = { es, en, ja };

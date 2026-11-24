import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, PLATFORM_ID, afterNextRender, computed, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  COPY,
  GAMES,
  GameData,
  JOBS,
  LANGS,
  LINKS,
  Lang,
  PIPELINE_TOOLS,
  RAPHA,
  SPRITES,
  TRACKS,
  TrackId,
  WEB_SKILLS,
} from './content';

type Filter = 'all' | 'unity' | 'godot' | 'playable';
type TabId = 'inicio' | 'juegos' | 'arte' | 'sobre-mi' | 'habilidades' | 'experiencia' | 'contacto';
type NavKey = 'home' | 'games' | 'art' | 'about' | 'skills' | 'experience' | 'contact';

const TABS: { id: TabId; key: NavKey; icon: string }[] = [
  { id: 'inicio', key: 'home', icon: '⌂' },
  { id: 'juegos', key: 'games', icon: '▶' },
  { id: 'arte', key: 'art', icon: '♪' },
  { id: 'sobre-mi', key: 'about', icon: '☺' },
  { id: 'habilidades', key: 'skills', icon: '✦' },
  { id: 'experiencia', key: 'experience', icon: '◆' },
  { id: 'contacto', key: 'contact', icon: '✉' },
];
const isTab = (v: string): v is TabId => TABS.some((t) => t.id === v);

const STORAGE_KEY = 'portfolio-lang';

function matches(game: GameData, filter: Filter): boolean {
  switch (filter) {
    case 'unity':
      return game.engine === 'Unity';
    case 'godot':
      return game.engine === 'Godot';
    case 'playable':
      return game.browser;
    default:
      return true;
  }
}

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly langs = LANGS;
  protected readonly links = LINKS;
  protected readonly rapha = RAPHA;
  protected readonly jobs = JOBS;
  protected readonly pipelineTools = PIPELINE_TOOLS;
  protected readonly webSkills = WEB_SKILLS;
  protected readonly year = 2026;
  protected readonly pipelineIcons = ['code', 'art', 'audio', 'tools'];

  protected readonly language = signal<Lang>('es');
  protected readonly copy = computed(() => COPY[this.language()]);
  protected readonly filter = signal<Filter>('all');
  protected readonly activeTab = signal<TabId>('inicio');
  protected readonly tabs = TABS;
  protected readonly spriteGroups = SPRITES;
  protected readonly tracks = TRACKS;
  protected readonly playing = signal<TrackId | null>(null);
  protected readonly progress = signal(0);
  private audio?: HTMLAudioElement;
  protected readonly filters: Filter[] = ['all', 'unity', 'godot', 'playable'];

  protected readonly visibleGames = computed(() => GAMES.filter((g) => matches(g, this.filter())));
  protected readonly counts = Object.fromEntries(
    (['all', 'unity', 'godot', 'playable'] as Filter[]).map((f) => [f, GAMES.filter((g) => matches(g, f)).length]),
  ) as Record<Filter, number>;

  /** The resume that matches the current language (Japanese visitors get the English one). */
  protected readonly cvHref = computed(() => (this.language() === 'es' ? LINKS.cvEs : LINKS.cvEn));

  constructor() {
    effect(() => {
      const lang = this.language();
      const c = COPY[lang];
      this.document.documentElement.lang = lang;
      this.title.setTitle(c.htmlTitle);
      this.meta.updateTag({ name: 'description', content: c.metaDescription });
    });

    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      this.language.set(this.initialLanguage());
      this.syncTabWithHash(destroyRef);
    });
  }

  protected setLanguage(lang: Lang): void {
    this.language.set(lang);
    if (!this.isBrowser) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage can be blocked; the choice still applies to this visit */
    }
  }

  protected setFilter(filter: Filter): void {
    this.filter.set(filter);
  }

  protected toggleTrack(id: TrackId): void {
    if (!this.isBrowser) return;
    const track = TRACKS.find((t) => t.id === id)!;
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.addEventListener('timeupdate', () => {
        const a = this.audio!;
        this.progress.set(a.duration ? a.currentTime / a.duration : 0);
      });
      this.audio.addEventListener('ended', () => {
        this.playing.set(null);
        this.progress.set(0);
      });
    }
    if (this.playing() === id) {
      this.audio.pause();
      this.playing.set(null);
      return;
    }
    if (!this.audio.src.endsWith(track.src)) {
      this.audio.src = track.src;
      this.progress.set(0);
    }
    this.audio.play().catch(() => this.playing.set(null));
    this.playing.set(id);
  }

  protected formatTime(seconds: number): string {
    return `${Math.floor(seconds / 60)}:${String(Math.round(seconds % 60)).padStart(2, '0')}`;
  }

  private initialLanguage(): Lang {
    const isLang = (v: string | null | undefined): v is Lang => v === 'es' || v === 'en' || v === 'ja';
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (isLang(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isLang(saved)) return saved;
    } catch {
      /* ignore */
    }
    for (const l of navigator.languages ?? [navigator.language]) {
      const code = l?.slice(0, 2).toLowerCase();
      if (isLang(code)) return code;
    }
    return 'es';
  }

  /** Each tab has its own link (#juegos, #contacto...), so the back button and shared links work. */
  private syncTabWithHash(destroyRef: DestroyRef): void {
    const apply = (scroll: boolean) => {
      const hash = decodeURIComponent(location.hash.slice(1));
      if (hash !== '' && !isTab(hash)) return; // e.g. the skip link
      this.activeTab.set(hash === '' ? 'inicio' : hash);
      if (this.activeTab() !== 'arte' && this.playing()) {
        this.audio?.pause();
        this.playing.set(null);
      }
      if (scroll) window.scrollTo({ top: 0 });
    };
    apply(false);
    const onHash = () => apply(true);
    window.addEventListener('hashchange', onHash);
    destroyRef.onDestroy(() => window.removeEventListener('hashchange', onHash));
  }
}

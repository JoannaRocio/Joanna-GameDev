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
  WEB_SKILLS,
} from './content';

type Filter = 'all' | 'unity' | 'godot' | 'playable';
type SectionId = 'games' | 'about' | 'skills' | 'experience' | 'contact';

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

/** Pixel art for the Pompon Friends card (no screenshot yet). 0 = empty. */
const POMPON = [
  '....11111111....',
  '..112222222211..',
  '.12222222222221.',
  '.12222222222221.',
  '1222222222222221',
  '1223322222233221',
  '1223322222233221',
  '1222222222222221',
  '1244222442224421',
  '1222222222222221',
  '1222222552222221',
  '.12222222222221.',
  '.12222222222221.',
  '..112222222211..',
  '...1166..6611...',
  '....11....11....',
];
const POMPON_COLORS: Record<string, string> = {
  '1': '#7b2f63',
  '2': '#ff9ccf',
  '3': '#2b1630',
  '4': '#ff6fae',
  '5': '#c2185b',
  '6': '#f5d547',
};

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

  protected readonly pomponPixels = POMPON.flatMap((row, y) =>
    [...row].flatMap((c, x) => (POMPON_COLORS[c] ? [{ x, y, fill: POMPON_COLORS[c] }] : [])),
  );

  protected readonly language = signal<Lang>('es');
  protected readonly copy = computed(() => COPY[this.language()]);
  protected readonly filter = signal<Filter>('all');
  protected readonly menuOpen = signal(false);
  protected readonly activeSection = signal<SectionId | null>(null);

  protected readonly sections: SectionId[] = ['games', 'about', 'skills', 'experience', 'contact'];
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
      this.observeSections(destroyRef);
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

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
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

  private observeSections(destroyRef: DestroyRef): void {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.activeSection.set(entry.target.id as SectionId);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const id of this.sections) {
      const el = this.document.getElementById(id);
      if (el) observer.observe(el);
    }
    destroyRef.onDestroy(() => observer.disconnect());
  }
}

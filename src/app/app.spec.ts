import { TestBed } from '@angular/core/testing';
import { App } from './app';

function goTo(tab: string): void {
  location.hash = tab;
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}

function button(el: HTMLElement, selector: string, label: string): HTMLButtonElement {
  return Array.from(el.querySelectorAll<HTMLButtonElement>(selector)).find((b) => b.textContent?.includes(label))!;
}

describe('App', () => {
  afterEach(() => history.replaceState(null, '', location.pathname));

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('lists all five games in Spanish and opens each one', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    button(el, '.lang-switch button', 'ES').click();
    fixture.detectChanges();
    expect(el.querySelector('h1')?.textContent).toContain('Sakugawa');

    goTo('juegos');
    fixture.detectChanges();
    const titles = Array.from(el.querySelectorAll('.game-tab strong')).map((t) => t.textContent);
    expect(titles).toEqual(['Rapha vuelve a casa', 'Pez Pescador', 'El sueño de Dona', 'La isla de Memo', 'Amigos Pompón']);
    expect(el.querySelector('.game-detail h3')?.textContent).toBe('Rapha vuelve a casa');
    expect(el.querySelector('.credits')).not.toBeNull();

    button(el, '.game-tab', 'Amigos Pompón').click();
    fixture.detectChanges();
    expect(el.querySelector('.game-detail h3')?.textContent).toBe('Amigos Pompón');
    expect(el.querySelectorAll('.phone-strip img').length).toBe(4);
    expect(el.querySelector('.game-tab[aria-selected="true"]')?.textContent).toContain('Amigos Pompón');
  });

  it('translates game names and labels the Japanese button in Japanese', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(button(el, '.lang-switch button', '日本語')).toBeTruthy();

    goTo('juegos');
    button(el, '.lang-switch button', 'EN').click();
    fixture.detectChanges();
    expect(el.textContent).toContain("Dona's Dream");
    expect(el.textContent).toContain('Rapha Goes Home');
    expect(document.documentElement.lang).toBe('en');

    button(el, '.lang-switch button', '日本語').click();
    fixture.detectChanges();
    expect(el.textContent).toContain('ラファ、おうちへ帰る');
    expect(el.textContent).toContain('ポンポンフレンズ');
    expect(el.textContent).toContain('AIを使わず、すべて自作');
    expect(document.documentElement.lang).toBe('ja');
  });

  it('filters games by engine', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    button(el, '.lang-switch button', 'EN').click();
    goTo('juegos');
    fixture.detectChanges();
    button(el, '.filters button', 'Godot').click();
    fixture.detectChanges();
    expect(el.querySelectorAll('.game-tab').length).toBe(1);
    expect(el.querySelector('.game-detail h3')?.textContent).toBe('Pompon Friends');
  });

  it('shows sprites by group and the music player', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    goTo('arte');
    fixture.detectChanges();
    expect(el.querySelectorAll('.art-layout [role="tab"]').length).toBe(4);
    expect(el.querySelectorAll('.sprite-cell').length).toBe(4);
    (el.querySelectorAll<HTMLButtonElement>('.art-layout [role="tab"]')[2]).click();
    fixture.detectChanges();
    expect(el.querySelectorAll('.sprite-cell').length).toBe(3);
    expect(el.querySelectorAll('.track-btn').length).toBe(3);
  });

  it('splits experience into work and education', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    button(el, '.lang-switch button', 'ES').click();
    goTo('experiencia');
    fixture.detectChanges();
    expect(el.querySelectorAll('.timeline li').length).toBe(5);
    button(el, '[role="tab"]', 'Educación').click();
    fixture.detectChanges();
    expect(el.textContent).toContain('Licenciatura en Desarrollo y Producción de Videojuegos');
    expect(el.querySelector('.tab.active')?.textContent).toContain('Experiencia');
  });
});

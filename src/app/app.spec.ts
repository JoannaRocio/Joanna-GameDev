import { TestBed } from '@angular/core/testing';
import { App } from './app';

function goTo(tab: string): void {
  location.hash = tab;
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}

describe('App', () => {
  afterEach(() => history.replaceState(null, '', location.pathname));

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('renders all five games in Spanish', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    Array.from(el.querySelectorAll<HTMLButtonElement>('.lang-switch button')).find((b) => b.textContent?.trim() === 'ES')!.click();
    fixture.detectChanges();
    expect(el.querySelector('h1')?.textContent).toContain('Sakugawa');
    expect(el.textContent).toContain('Rapha vuelve a casa');
    goTo('juegos');
    fixture.detectChanges();
    for (const title of ['Fishing Fish', 'El sueño de Dona', "Memo's Island", 'Pompon Friends']) {
      expect(el.textContent).toContain(title);
    }
    goTo('experiencia');
    fixture.detectChanges();
    expect(el.textContent).toContain('Licenciatura en Desarrollo y Producción de Videojuegos');
    expect(el.querySelector('.tab.active')?.textContent).toContain('Experiencia');
  });

  it('switches to English and Japanese', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const btn = (label: string) =>
      Array.from(el.querySelectorAll<HTMLButtonElement>('.lang-switch button')).find((b) => b.textContent?.trim() === label)!;

    goTo('juegos');
    btn('EN').click();
    fixture.detectChanges();
    expect(el.textContent).toContain("Dona's Dream");
    goTo('inicio');
    fixture.detectChanges();
    expect(el.textContent).toContain('Rapha Goes Home');
    expect(document.documentElement.lang).toBe('en');

    btn('JA').click();
    fixture.detectChanges();
    expect(el.textContent).toContain('AIを使わず、すべて自作');
    expect(document.documentElement.lang).toBe('ja');
  });

  it('filters games by engine', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    goTo('juegos');
    fixture.detectChanges();
    const godot = Array.from(el.querySelectorAll<HTMLButtonElement>('.filters button')).find((b) => b.textContent?.includes('Godot'))!;
    godot.click();
    fixture.detectChanges();
    expect(el.querySelectorAll('.game-card').length).toBe(1);
    expect(el.querySelector('.game-card')?.textContent).toContain('Pompon Friends');
  });

  it('shows the art and music tab', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    goTo('arte');
    fixture.detectChanges();
    expect(el.querySelectorAll('.sprite-cell').length).toBe(13);
    expect(el.querySelectorAll('.track-btn').length).toBe(3);
  });
});

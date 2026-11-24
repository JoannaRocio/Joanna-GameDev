import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
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
    for (const title of ['Fishing Fish', 'El sueño de Dona', "Memo's Island", 'Pompon Friends']) {
      expect(el.textContent).toContain(title);
    }
    expect(el.textContent).toContain('Licenciatura en Desarrollo y Producción de Videojuegos');
  });

  it('switches to English and Japanese', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const btn = (label: string) =>
      Array.from(el.querySelectorAll<HTMLButtonElement>('.lang-switch button')).find((b) => b.textContent?.trim() === label)!;

    btn('EN').click();
    fixture.detectChanges();
    expect(el.textContent).toContain('Rapha Goes Home');
    expect(el.textContent).toContain("Dona's Dream");
    expect(document.documentElement.lang).toBe('en');

    btn('JA').click();
    fixture.detectChanges();
    expect(el.textContent).toContain('制作したゲーム');
    expect(document.documentElement.lang).toBe('ja');
  });

  it('filters games by engine', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const godot = Array.from(el.querySelectorAll<HTMLButtonElement>('.filters button')).find((b) => b.textContent?.includes('Godot'))!;
    godot.click();
    fixture.detectChanges();
    expect(el.querySelectorAll('.game-card').length).toBe(1);
    expect(el.querySelector('.game-card')?.textContent).toContain('Pompon Friends');
  });
});

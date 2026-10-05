import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should default to English and switch all portfolio sections to Spanish', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.getAttribute('aria-label')).toBe('Joanna Rocío Sakugawa');
    expect(compiled.textContent).toContain('PLAYER PROFILE');
    expect(compiled.textContent).toContain('Home');

    const gamesTab = Array.from(compiled.querySelectorAll<HTMLButtonElement>('.tab')).find((button) =>
      button.textContent?.includes('Games'),
    );
    gamesTab?.click();
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Fishing Fish');
    expect(compiled.textContent).toContain("Memo's Island");
    expect(compiled.textContent).toContain('PLAYABLE IN BROWSER');

    const spanishButton = Array.from(compiled.querySelectorAll<HTMLButtonElement>('.language-switch button')).find(
      (button) => button.textContent?.trim() === 'ES',
    );
    spanishButton?.click();
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Jugar en itch.io');
    expect(compiled.textContent).toContain('Juegos');
    expect(document.documentElement.lang).toBe('es');
  });
});

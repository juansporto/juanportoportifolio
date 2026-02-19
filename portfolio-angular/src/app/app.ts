import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ContatoComponent } from './components/contato/contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    SobreComponent,
    HabilidadesComponent,
    ProjetosComponent,
    ExperienciaComponent,
    ContatoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  readonly currentYear = new Date().getFullYear();
  isMenuOpen = false;
  private observer?: IntersectionObserver;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll('.reveal').forEach((element) => {
      this.observer?.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

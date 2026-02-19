import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  iconClass: string;
}

@Component({
  selector: 'app-habilidades',
  standalone: true,
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
  readonly skills: Skill[] = [
    { name: 'Java', level: 90, iconClass: 'devicon-java-plain colored' },
    { name: 'Spring Boot', level: 85, iconClass: 'devicon-spring-plain colored' },
    { name: 'SQL / MySQL / PostgreSQL', level: 82, iconClass: 'devicon-azuresqldatabase-plain colored' },
    { name: 'HTML / CSS / Bootstrap', level: 78, iconClass: 'devicon-html5-plain colored' },
    { name: 'Git', level: 80, iconClass: 'devicon-git-plain colored' }
  ];
}

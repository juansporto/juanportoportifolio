import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  stack: string;
  technologies: { label: string; iconClass: string }[];
  github: string;
  demo?: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  readonly projects: Project[] = [
    {
      title: 'ProjectMeGkids',
      description:
        'Projeto focado em desenvolvimento Back-End, com organização de regras de negócio, persistência de dados e versionamento no GitHub.',
      stack: 'Java • Spring Boot • PostgreSQL • Git',
      technologies: [
        { label: 'Java', iconClass: 'devicon-java-plain colored' },
        { label: 'Spring Boot', iconClass: 'devicon-spring-plain colored' },
        { label: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
        { label: 'Git', iconClass: 'devicon-git-plain colored' }
      ],
      github: 'https://github.com/juansporto/projectMeGkids'
    },
    {
      title: 'WIN Client',
      description:
        'Cliente de sistema com foco em operação e suporte, voltado à estabilidade da plataforma e experiência do usuário no dia a dia.',
      stack: 'Java • SQL • MySQL • Git',
      technologies: [
        { label: 'Java', iconClass: 'devicon-java-plain colored' },
        { label: 'SQL', iconClass: 'devicon-azuresqldatabase-plain colored' },
        { label: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
        { label: 'Git', iconClass: 'devicon-git-plain colored' }
      ],
      github: 'https://github.com/sistema-win/win-client'
    }
  ];
}

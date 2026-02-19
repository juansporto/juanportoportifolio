import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  readonly freelanceMessage =
  'Desenvolvo soluções Back-End com Java, APIs e modelagem de banco de dados. Envie os detalhes do seu projeto e receba um orçamento personalizado.';

  readonly links = [
    {
      label: 'LinkedIn',
      iconClass: 'devicon-linkedin-plain colored',
      value: 'linkedin.com/in/juanportodev',
      href: 'https://www.linkedin.com/in/juanportodev'
    },
    {
      label: 'GitHub',
      iconClass: 'devicon-github-original',
      value: 'github.com/juansporto',
      href: 'https://github.com/juansporto'
    },
    {
      label: 'WhatsApp',
      iconClass: 'devicon-whatsapp-plain',
      value: '(61) 98507-7660',
      href: 'https://wa.me/5561985077660'
    },
    {
      label: 'E-mail',
      iconClass: 'devicon-google-plain colored',
      value: 'juanporto.ti@gmail.com',
      href: 'mailto:juanporto.ti@gmail.com'
    }
  ];
}

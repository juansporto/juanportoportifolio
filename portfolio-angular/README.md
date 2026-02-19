# Portfólio Angular - Juan Porto

Portfólio profissional em Angular com tema galáxia (dark), gradientes roxo/azul,
efeitos de brilho neon leve e animações suaves de entrada.

## Estrutura de componentes

- `src/app/components/home`: avatar, nome, cargo e CTA
- `src/app/components/sobre`: resumo profissional e objetivos
- `src/app/components/habilidades`: barras de progresso das skills
- `src/app/components/projetos`: cards com hover, stack e links
- `src/app/components/experiencia`: experiência profissional em timeline
- `src/app/components/contato`: LinkedIn, GitHub e e-mail com destaque visual

Componente raiz:
- `src/app/app.ts`
- `src/app/app.html`
- `src/app/app.css`

Estilo global e tema:
- `src/styles.css`

## Executar localmente

1. Instale as dependências:
   - `npm install`
2. Rode em desenvolvimento:
   - `npm start`
3. Abra:
   - `http://localhost:4200`

## Build de produção

- `npm run build`
- Saída: `dist/portfolio-angular/browser`

## Deploy na Vercel

Este projeto já está com `vercel.json` configurado.

1. Conecte o repositório na Vercel.
2. A Vercel detecta automaticamente o build.
3. Se precisar configurar manualmente:
   - Build Command: `npm run build`
   - Output Directory: `dist/portfolio-angular/browser`

## Deploy na Netlify

Este projeto já está com `netlify.toml` configurado.

1. Conecte o repositório na Netlify.
2. A Netlify usará o arquivo automaticamente.

## Personalização

Edite o conteúdo principal em cada componente dentro de:
- `src/app/components/*/*.component.html`

Edite estilos globais em:
- `src/styles.css`

Edite comportamento do menu e animação de rolagem em:
- `src/app/app.ts`

## Bibliotecas visuais sugeridas (opcional)

- **Angular Material**: componentes de UI prontos
- **Ng Icons** ou **Angular FontAwesome**: ícones profissionais
- **AOS (Animate On Scroll)**: animações ao rolar a página
- **tsParticles**: fundo de partículas/estrelas mais avançado
- **GSAP**: animações premium e mais controle de transições

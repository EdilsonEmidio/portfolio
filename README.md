# 🚀 Portfólio Profissional — Edilson Emidio

Portfólio interativo de **Edilson Emidio de Espindola Filho** (Desenvolvedor de Software Full Stack), construído com **React**, **JavaScript**, **Tailwind CSS** e **Vite**, configurado e otimizado para deploy contínuo no **GitHub Pages**.

---

## 🎨 Destaques do Design & Recursos

- **Tema Noturno Harmônico**: Paleta *Obsidian Slate* com iluminação ambiente em tons de esmeralda (`emerald-400`), ciano (`cyan-400`) e safira, com superfícies em *glassmorphism* (`backdrop-blur-md`).
- **Espaço para Foto de Perfil**:
  - Área em destaque com moldura neon e gradiente animado no Hero.
  - Para adicionar sua foto real: basta salvar sua foto como `avatar.jpg` dentro da pasta `public/` (ou seja, `public/avatar.jpg`). O portfólio a detectará e exibirá automaticamente!
  - Caso ainda não tenha foto, um avatar SVG moderno já fica ativo por padrão.
- **Vitrine Interativa de Projetos**:
  - Filtros dinâmicos: *Todos*, *Full Stack*, *Frontend*, *IA & Otimização*.
  - Modal interativo com aprofundamento técnico em cada projeto (arquitetura MVC, modelagem relacional, segurança JWT, regras de negócio e contêineres Docker).
  - Os 4 sistemas citados no currículo:
    1. **Acadigitus** (STI - UNIVASF): PHP/Laravel + Livewire + FluxUI + PostgreSQL + Docker.
    2. **PresenSys** (Faculdade & Escola Local): React SPA + React Router + Node.js (Express) + PostgreSQL.
    3. **E-Commerce Multi-Perfil**: Java (Spring Boot) + Spring Security + JWT + MariaDB + React.
    4. **Sistema Especialista com IA**: React + Python (Flask) + Scikit-learn + Algoritmos Genéticos.
- **Habilidades & Competências**:
  - Barra de pesquisa interativa em tempo real e filtros por categoria (Linguagens, Backend, Frontend, Banco de Dados, Arquitetura, DevOps/IA).
- **Linha do Tempo & Formação**:
  - Trajetória com nós luminosos e cronologia das experiências.
  - Graduação em Ciência da Computação pela UNIVASF, hackathons e cursos de extensão.
- **Contato em 1 Clique**:
  - Botão interativo para copiar e-mail (`edilsonemidio93@gmail.com`) com toast de confirmação.
  - Botão direto para WhatsApp (`(87) 991368259`).
  - Links diretos para GitHub e LinkedIn.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vite.dev/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Ícones**: [Lucide React](https://lucide.dev/) + Componentes SVG nativos
- **Tipografia**: *Plus Jakarta Sans* & *JetBrains Mono* (Google Fonts)
- **CI/CD**: GitHub Actions para deploy automático no GitHub Pages

---

## 💻 Como Rodar Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/EdilsonEmidio/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:5173](http://localhost:5173) no seu navegador.

4. **Gerar build de produção**:
   ```bash
   npm run build
   ```
   Os arquivos compilados estarão na pasta `dist/`.

---

## 🌐 Publicação no GitHub Pages

O projeto já está 100% configurado para o GitHub Pages:
- O arquivo `vite.config.js` já inclui `base: './'`, permitindo que scripts e estilos sejam carregados em qualquer subdiretório do GitHub Pages (`https://edilsonemidio.github.io/portfolio/`).
- O fluxo `.github/workflows/deploy.yml` compila e publica automaticamente o site a cada `git push` na branch `main`.

### Ativando no GitHub:
1. Acesse seu repositório no GitHub: `https://github.com/EdilsonEmidio/portfolio`.
2. Vá em **Settings** > **Pages**.
3. Na opção **Source**, selecione **GitHub Actions**.
4. Faça o push do código:
   ```bash
   git commit -m "feat: portfolio completo em React e Tailwind CSS"
   git push origin main
   ```
5. Em poucos instantes, o GitHub Actions publicará o site online!

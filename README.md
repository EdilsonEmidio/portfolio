# 🚀 Portfólio Profissional — Edilson Emidio

Portfólio interativo de **Edilson Emidio de Espindola Filho** (Desenvolvedor de Software Full Stack), construído com **React**, **JavaScript**, **Tailwind CSS** e **Vite**, configurado e otimizado para deploy contínuo no **GitHub Pages**.

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

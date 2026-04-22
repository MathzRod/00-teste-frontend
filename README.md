# Teste Frontend

Interface de login desenvolvida em React, com foco em organização dos componentes, suporte a tema claro/escuro e uma estrutura simples para evoluir o projeto depois.

## Contato

Discord: `mathzer4`

## Sobre o projeto

O projeto implementa uma tela de login com e-mail, senha, link de recuperação de senha, botão de envio e alternância entre tema claro e tema escuro.

A ideia principal foi manter a tela pequena, mas já com uma base organizada. Por isso, os elementos mais reutilizáveis foram separados em componentes próprios:

- `Input`: centraliza o padrão visual dos campos e permite receber uma ação extra, como o link "Esqueceu a senha?".
- `Button`: concentra o estilo do botão principal e evita repetir a mesma configuração em outras telas.
- `Login`: fica responsável apenas por montar a tela e controlar os estados do formulário.

Também foi criado um botão de troca de tema com ícones de sol e lua. A troca acontece adicionando o atributo `data-theme` no elemento `html`, e as cores são controladas por variáveis CSS no arquivo de temas.

## Tecnologias usadas

- React: usado para montar a interface em componentes e controlar os estados dos campos do formulário.
- TypeScript: usado para tipar props, eventos e estados, reduzindo erros comuns durante o desenvolvimento.
- Vite: usado por ser leve, rápido para desenvolvimento local e simples para gerar build de produção.
- Sass/SCSS Modules: usado para separar os estilos por componente e evitar conflito de nomes de classes.
- CSS variables: usadas para controlar os temas claro e escuro sem duplicar toda a estrutura de estilos.

## Decisões de desenvolvimento

A componentização foi feita nos pontos que tendem a se repetir em uma aplicação real: inputs e botões. Isso deixa a página de login mais fácil de ler e facilita reaproveitar a mesma base em outras telas.

O tema foi resolvido com variáveis CSS porque essa abordagem deixa a alteração visual centralizada. Em vez de criar várias classes condicionais dentro dos componentes, o React só altera o valor de `data-theme`, e o CSS cuida das cores.

O logo foi importado diretamente no componente para o Vite conseguir tratar o arquivo corretamente no build. Também foi adicionado texto alternativo na imagem para melhorar acessibilidade.

## Como executar

Instale as dependências:

```bash
npm install
```

Execute em modo desenvolvimento:

```bash
npm run dev
```

Gere o build de produção:

```bash
npm run build
```

Visualize o build localmente:

```bash
npm run preview
```

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: compila TypeScript e gera os arquivos finais de produção.
- `npm run preview`: abre uma prévia local do build gerado.
- `npm run lint`: executa a verificação de lint configurada no projeto.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

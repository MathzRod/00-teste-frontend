## Bem vindos!

Estamos felizes por você estar interessado(a) em integrar nosso time!

Como o número de interessados foi muito grande, vamos aplicar um pequeno teste, bem simples. Com intuito de filtrar os candidatos que só mandaram mensagem por mandar, dos realmente interessados.

## Não se preocupe

Não vamos te pedir muito, o teste consiste apenas em fazer uma tela de login. Simples né? Mas você já vai mostrar pra gente que consegue seguir um fluxo real de trabalho. Com uma demanda real, e material de apoio real.

## Como o teste vai funcionar

Você vai criar um fork desse repo, vai executar a demanda, e quando estiver pronto, vai abrir um pr. Isso vai nós indicar que você acabou e que podemos analisar o seu resultado. Simples né?

## A Demanda

Como mencionado antes você só precisa criar uma tela de login. Aqui está ela:

**Tema claro:**
![Tema claro](./imagens/00-login/Tela-Claro-naoLogado.jpg)

**Tema Escuro:**
![Tema escuro](./imagens/00-login/Tela-Escuro-naoLogado.jpg)

> Todas as imagens estão na pasta 'imagens/' para consulta.

Pode usar a tecnologia que estiver confortável para esse teste.

### Informações complementares a demanda

Tipografia:

- Nunito - font principal
- fonts secundarias não se aplicam a tela de login



## O que vai ser avaliado

- similaridade do resultado entregue com as imagens da demanda.
- performance.
- qualidade do código.
- Experiência do usuário (UX).
- Interatividade.

## Entrega

Antes de abrir o pr para sinalizar que finalizou o teste, modifique esse README.md Com seu discord para entrarmos em contato. E com uma breve explicação do seu trabalho como: tecnologias usadas, o motivo por trás do uso dessas tecnologias e etc. Explicação do projeto feita por IA vai ser desconsiderada, é necessário que você entenda o que está fazendo.

Também adicione uma sessão explicando como executar seu projeto caso ele não seja só arquivos estáticos com: instalação de dependências, build e etc.

## duvidas

Qualquer duvida pode perguntar diretamente na publicação: https://discord.com/channels/755483507698172045/1494423687233798267







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

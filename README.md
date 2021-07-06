# Weather
<!--ts-->
   * [Sobre](#Sobre)
   * [Como usar](#como-usar)
      * [Pre Requisitos](#pre-requisitos)
      * [Instalação](#instalacao)
      * [Rodando o Front End](#rodando-o-front-end)
   * [Tests](#testes)
   * [Tecnologias](#tecnologias)
<!--te-->

![loading page](screenshots/loading.png?raw=true)

![main page](screenshots/main.png?raw=true)

![main responsive page](screenshots/main-responsive.png?raw=true)
## Sobre

<p align="center">Esse projeto front-end desenvolvido em ReactJS obtem a atual localização do usuário e informa as condições climaticas dele. É destinado ao desafio <i>Builders</i> para a vaga de React Developer</p>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Intalação
```bash
# Clone este repositório
$ git clone <https://github.com/felipemarinhodev/weather>

# Acesse a pasta do projeto no terminal/cmd
$ cd weather

# Instale as dependências
$ npm install
# ou
$ yarn
```

Outro pré-requisito para a execução do projeto é possuir uma __API KEY__ do serviço [Open Weather Map](https://openweathermap.org/api). Após realizar o cadastro e estar de posse da sua chave, É necessário criar o arquivo de `.env.local` com base no arquivo `example.env.local` e incluir a chave na variável de ambiente `NEXT_PUBLIC_API_KEY`.
## Como usar

### 🎲 Rodando o front end


```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd weather

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
#ou
$ yarn dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
### ⚠️ Rodando os teste

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd weather

# Execute a aplicação em modo de desenvolvimento
$ npm run test
#ou
$ yarn test

# Será executado os teste e exibido no console.
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [NextJS](https://nextjs.org)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com)
- [styled-media-query](https://www.npmjs.com/package/styled-media-query)
- [Jest](https://jestjs.io)
- [ESLint](https://eslint.org)
- [axios](https://axios-http.com)
- [plop](https://plopjs.com)

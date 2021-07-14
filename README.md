![Imagem do projeto](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc158979b-4d23-4acc-b82f-e57f743639b4%2FThumbnail_NLW_Missao-1.png?table=block&id=a25b063c-c195-4651-8056-3951d03e2459&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=3840&userId=cf9b1e94-00e5-4697-931b-a8f9d1b88890&cache=v2)
<h1 align="center">Next Level Week Together - NodeJS 🚀</h1>

 
<div align="center">
<a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node-%5Ev14.17.3-green"/></a>
</div>

## Descrição

> <p align="center">Aplicação realizada em NodeJS durante a NLW Together proporcionada pela Rocket Seat. Utilizamos também <a href="https://www.typescriptlang.org/">Typescript</a>, <a href="https://typeorm.io/#/">TypeORM</a> com banco de dados Postgres e bibliotecas como <a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a> e <a href="https://www.npmjs.com/package/bcryptjs">bcrypt</a>.</p>
> <p align="center">Trata-se de uma API de envio de elogios a outros usuários por meio de tags.</p>


### Status
✔️ Finalizado ✔️


### Tabela de Conteúdos
<!--ts-->
- [Descrição](#descrição)
- [Status](#status)
- [Tabela de Conteúdos](#tabela-de-conteúdos)
- [Como usar](#como-usar)
    - [Pré requisitos](#pré-requisitos)
    - [Configurando ambiente](#configurando-ambiente)
- [Instalação](#instalação)
<!--te-->


## Como usar

### Pré requisitos
- Para rodar a aplicação, é necessário ter o [NodeJS](https://nodejs.org/en/) instalado, além do [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/).
- Quanto ao banco de dados, é necessário ajustar as configurações no arquivo [ormconfig.json](https://github.com/bjmvercelli/nlw-node-valoriza/blob/main/ormconfig.json)

### Configurando ambiente
- Acesse o arquivo [.env.example](https://github.com/bjmvercelli/nlw-node-valoriza/blob/main/.env.example), preencha o valor da variável *JWT_SECRET* e renomeie o arquivo para *.env*.


## Instalação
```
# Clone o repositório
$ git clone https://github.com/bjmvercelli/nlw-node-valoriza.git

# Entre na pasta do projeto
$ cd nlw-node-valoriza

# Instale as dependências
$ yarn 
    #ou
$ npm install

# Inicie a aplicação
$ yarn dev 
    #ou
$ npm run dev
```
# Certificadora de Competência Identitária - ELLP [Gestão de Oficinas]

Este repositório unifica o front-end e o back-end da plataforma de gestão de oficinas do projeto de extensão ELLP (Ensino Lúdico de Programação) da UTFPR-CP.

## Estrutura do Repositório

O projeto é dividido em dois diretórios principais:
* `/frontend`: Interface web construída com React, TypeScript e TanStack Start.
* `/backend`: API RESTful desenvolvida com Node.js, Express, Mongoose e MongoDB.

## Como Executar o Projeto

Certifique-se de ter o Node.js instalado na sua máquina e o MongoDB rodando localmente (ou uma URI de banco configurada no arquivo `.env` do backend).

Instale as dependências executando `npm install` dentro das respectivas pastas.

A partir do diretório raiz do projeto, utilize os seguintes comandos para iniciar os servidores:

### 1. Iniciar o Servidor Back-end:
```bash
npm run dev:backend
```

### 2. Iniciar o Servidor Front-end:
```bash
npm run dev:frontend
```

*(Lembre-se de rodar estes comandos em terminais separados para manter ambos em execução ao mesmo tempo).*

## Documentação da API (Swagger)

A API possui documentação interativa com o Swagger. Para acessá-la:
1. Inicie o back-end (`npm run dev:backend`).
2. Acesse a URL: `http://localhost:3000/api-docs` no seu navegador.

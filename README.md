# Projeto Docker: Front-end e Back-end com Docker Compose

Este projeto combina um front-end (usando Nginx) e um back-end (usando Flask), todos rodando em contêineres Docker usando Docker Compose. Esta documentação fornece instruções para configurar, construir e executar a aplicação em outra máquina.

## Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- Docker: [Instale o Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Instale o Docker Compose](https://docs.docker.com/compose/install/)

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```plaintext
project/
├── meu_app_api - MVP 2/
│   ├── Dockerfile  # Dockerfile para a API Flask
│   ├── requirements.txt  # Dependências do Python
│   ├── app.py  # Arquivo principal do Flask
├── meu_app_front - MVP 2/
│   ├── Dockerfile  # Dockerfile para o front-end Nginx
│   ├── index.html  # Arquivo HTML do front-end
├── docker  # Arquivo Docker Compose para vincular os serviços

```

Passos para Rodar a Aplicação
Para rodar a aplicação em uma máquina diferente, siga estas etapas:

# 1. Clone o Repositório 
Para obter o código, clone o repositório para sua máquina local:

git `clone` `<URL_DO_REPOSITÓRIO>`  
## Substitua pela URL do repositório 
`cd` project  

## Navegue para o diretório do projeto 

# 2. Construa e Execute com Docker Compose
Para construir e rodar a aplicação, use Docker Compose para construir todos os serviços e iniciá-los:

  
## Constrói e executa todos os serviços
`docker-compose up --build`


# 3. Acesse a Aplicação pelo Navegador
Depois que os contêineres estiverem rodando, acesse a aplicação pelo navegador:

Front-end: Acesse http://localhost:80/ para visualizar o front-end.
Back-end (API): Para acessar a API, use http://localhost:5000/

# DTMoney Back End

- Back end do aplicativo DTMoney que esta no repositório <a href="https://github.com/cfcamargo/dtmoney_frontend">dtmoney_frontend</a>
- Esta aplicação foi desenvolvida para treinar os conhecimentos adquiridos nos meus estudos com back end
- Tenho estudado o Adonis JS, um framework node, excelente e muito produtivo.
- Para testar o projeto vc pode usar um programa como <a href="https://insomnia.rest/">Insomnia</a>, e realizar as requisições na rota "/transactions"
- Voce tambem pode acessar o respositorio do <a href="https://github.com/cfcamargo/dtmoney_frontend">front-end</a>, que foi desenvolvido com o Nuxt3.
- Para o banco de dados eu usei o MySql em um container docker.




## Setup para testar projeto

Ter instalado ou instalar
[Docker Compose](https://docs.docker.com/compose/install/)
[Doker](https://www.docker.com/)

```bash
# Subir Container dokker com o mysql
$ docker-compose up -d

# Rodar migration para criar a estrutura do banco de dados
$ node ace migration:run

# instalar as dependencias
$ npm install

# iniciar servidor em ambiente de desenvolvimento
$ npm run dev
```

- Para realizar as requisicoes é necessario criar o arquivo '.env', com as variaveis ambiente.
- Usar as credencias do docker.compose.yml e a porta 3333.


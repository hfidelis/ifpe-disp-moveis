## Atividade 4 - IFPE | Programação para Dispositivos Móveis

**Docente: Nilson Cândido**
**Discente: Heitor Fidelis**

# Como executar?

**1 - Executar servidor utilizando `json-server`**
> `$ cd server`

> `$ npm i`

> `$ npm run start`
> Agora o servidor utilizando json-server está disponível em http://localhost:8000

**2 - Executar mobile em modo de desenvolvimento para o navegador web**

> `$ cd mobile`

**Preencha as variáveis de ambiente para a configuração do Firebase no arquivo `.env`**
```bash
FB_API_KEY=EXEMPLO
FB_AUTH_DOMAIN=exemplo.firebasedapp.com
FB_PROJECt_ID=exemplo-id
FB_STORAGE_BUCKET=exemplo.firebasestorage.app
FB_MESSAGING_SENDER_ID=123
FB_APP_ID=1:2345:web:67
``

> `$ npm i`

> `$ npm run web`

> Agora o app está disponível em http://localhost:8081

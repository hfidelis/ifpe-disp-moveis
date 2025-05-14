## Atividade 6 - IFPE | Programação para Dispositivos Móveis

### Login e Registro com Firebase

**Docente: Nilson Cândido**
**Discente: Heitor Fidelis**

# Como executar?

**1 - Executar servidor utilizando `json-server`**

1. **Navegue para o diretório do projeto do servidor**

> `$ cd server`

2. **Instale as dependências**

> `$ npm i`

3. **Execute o projeto**

> `$ npm run start`

> Agora o servidor utilizando json-server está disponível em http://localhost:8000

**2 - Executar mobile em modo de desenvolvimento para o navegador web**

1. **Navegue para o diretório do projeto mobile**

> `$ cd mobile`

2. **Preencha as variáveis de ambiente para a configuração do Firebase no arquivo `.env`**
```bash
FB_API_KEY=EXEMPLO
FB_AUTH_DOMAIN=exemplo.firebasedapp.com
FB_PROJECT_ID=exemplo-id
FB_STORAGE_BUCKET=exemplo.firebasestorage.app
FB_MESSAGING_SENDER_ID=123
FB_APP_ID=1:2345:web:67
```

3. **Instale as dependências**

> `$ npm i`

4. **Execute o app**

> `$ npm run web`

> Agora o app está disponível em http://localhost:8081

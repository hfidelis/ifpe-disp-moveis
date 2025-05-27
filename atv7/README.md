# Atividade 7 - Upload de Imagens (Cloudinary)

## Docente: Nilson Cândido
## Discente: Heitor Fidelis

### Como iniciar

### 1. Clone o repositório

```bash
git clone https://github.com/hfidelis/ifpe-disp-moveis.git
```

### 2. Acesse o diretório da atividade

```bash
cd ifpe-disp-moveis/atividade-7
```

### 3. Instale as dependências do servidor

```bash
cd server

npm install
```

### 4. Configure as variáveis de ambiente do servidor
Crie um arquivo `.env` na raiz do diretório `server` e adicione as seguintes variáveis:

```bash
touch .env
```

```plaintext
CLOUDINARY_CLOUD_NAME=cloudexample
CLOUDINARY_API_KEY=12345
CLOUDINARY_API_SECRET=123abc
```

### 5. Inicie o servidor

```bash
npm run start
```

**Agora o backend está disponível no endereço `http://localhost:3001`**

### 6. Instale as dependências do cliente

```bash
cd mobile
npm install
```

### 7. Configure as variáveis de ambiente do cliente

**Nota: É recomendável utilizar o ip da sua máquina na rede como host no backend, ao invés de localhost. Para conseguir o seu ip ->**

```bash
# WINDOWS
ipconfig

# LINUX
ifconfig | grep inet

# Procure por 192.168.x.x ou 10.31.x.x
```

Crie um arquivo `.env` na raiz do diretório `mobile` e adicione as seguintes variáveis:
```bash
touch .env
```

```plaintext
CLOUDINARY_CLOUD_NAME=cloudexample
CLOUDINARY_UPLOAD_PRESET=storageexample
BACKEND_URL=http://seu-ip:3001
```

### 8. Inicie o cliente

```bash
npx expo start --web --tunnel
```

**Agora o aplicativo está disponível no Expo Go através do Qr Code ou endereço disponibilizado no terminal, e acessível na web em http://localhost:8081**
# Usa uma imagem oficial do Node.js
FROM node:23 AS build

# Define o diretório de trabalho dentro do contêiner do Docker
WORKDIR /app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install 

# Copia o restante do código
COPY . . 

# Expõe a porta usada pela aplicação
EXPOSE 4000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
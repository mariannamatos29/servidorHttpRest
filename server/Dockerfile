# Use uma imagem base do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie apenas os arquivos de dependências para o container
COPY package*.json ./

# Instale as dependências
RUN npm install --legacy-peer-deps

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta do servidor
EXPOSE 5000

# Comando para iniciar o servidor
CMD ["npm", "start"]

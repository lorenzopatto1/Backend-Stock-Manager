# Etapa 1: Build da aplicação
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app

# RUN npm prune --production

EXPOSE 80

CMD ["node", "dist/shared/infra/http/server.js"]
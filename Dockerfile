# Etapa 1: Build da aplicação
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN chown -R deploy:deploy /app

USER deploy

RUN npm install

COPY --chown=deploy:deploy . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app

USER deploy

# RUN npm prune --production

EXPOSE 80

CMD ["node", "dist/shared/infra/http/server.js"]
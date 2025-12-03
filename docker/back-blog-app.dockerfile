FROM alpine:3.20 AS builder

ARG DB_HOST
ARG DB_PORT
ARG DB_USER
ARG DB_PASSWORD
ARG DB_NAME

RUN apk add --no-cache \
    curl \
    bash \
    libc6-compat \
    git

RUN apk add --no-cache nodejs npm

RUN npm i -g pnpm@10.22.0

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm back:build

WORKDIR /app/apps/back-blog

RUN echo "DB_HOST=$DB_HOST"  >> .env && \
    echo "DB_PORT=$DB_PORT" >> .env && \
    echo "DB_USER=$DB_USER" >> .env && \
    echo "DB_PASSWORD=$DB_PASSWORD" >> .env && \
    echo "DB_NAME=$DB_NAME" >> .env

EXPOSE 8080

WORKDIR /app

CMD ["node", "/app/apps/back-blog/dist/main.js"]
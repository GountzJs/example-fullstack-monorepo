FROM alpine:3.20 AS builder

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

FROM node:20-alpine AS runner

COPY --from=builder /app/apps/back-blog/dist ./dist

EXPOSE 8080

CMD ["node", "dist/main.js"]
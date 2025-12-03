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

RUN pnpm web:build

FROM nginx:stable-alpine

COPY --from=builder /app/apps/web-blog/dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

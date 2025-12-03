# Docker Documentación

## Web Blog

Ejecuta desde el root:

```bash
docker build -f web-blog-app.dockerfile -t web-blog .
```

Lanza el contenedor:

```bash
docker run -d -p 80:80 --name web-blog web-blog
```

Para detener el contenedor:

```bash
docker stop web-blog
```

Para eliminar el contenedor:

```bash
docker rm web-blog
```


## Back Blog

Ejecuta desde el root:

```bash
docker build \
  -f back-blog-app.dockerfile \
  -t back-blog \
  --build-arg DB_HOST=myhost \
  --build-arg DB_USER=postgres \
  --build-arg DB_PASS=supersecret \
  --build-arg DB_NAME=mydb \
  .
```

Lanza el contenedor:

```bash
docker run -d -p 8080:8080 --name back-blog back-blog
```

Para detener el contenedor:

```bash
docker stop back-blog
```

Para eliminar el contenedor:

```bash
docker rm back-blog
```

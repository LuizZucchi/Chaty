## MongoDB

### baixar imagem
```
docker pull mongodb/mongodb-community-server
```

### rodar imagem
```
docker run --name mongo -d mongodb/mongodb-community-server:latest
```

### shell interativo (mongosh)
```
docker exec -it mongo mongosh
``` 
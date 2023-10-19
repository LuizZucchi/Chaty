## MongoDB

### baixar imagem
```
docker pull mongodb/mongodb-community-server
```

### rodar imagem
```
docker run -d -p 27017:27017 --name mymongo -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo --auth
```

### shell interativo (mongosh)
```
docker exec -it mongo mongosh
``` 
## MongoDB

### baixar imagem
```
docker pull mongodb/mongodb-community-server
```

### rodar imagem
## com auth
```
docker run -d -p 27017:27017 --name mymongo -e MONGO_INITDB_ROOT_USERNAME=elzuko -e MONGO_INITDB_ROOT_PASSWORD=221432 mongo --auth
```
## sem auth
```
docker run -d -p 27017:27017 --name mymongo mongo
```

### shell interativo (mongosh)
```
docker exec -it mymongo mongosh "mongodb://localhost:27017/mydatabase"
```
## Criando user (em testes)
```
 db.createUser({user: "elzuko", pwd: passwordPrompt(), roles: [{role: "userAdminAnyDatabase", db: "admin"}, "readWriteAnyDatabase"]})
```
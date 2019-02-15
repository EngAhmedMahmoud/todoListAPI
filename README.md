# TODO APP REST API
This App is a todolist Application with Nodejs/monogDB with a CRUD REST API for:
- Adding Tasks(Create).
- Deleting Task(Delete).
- Updating Task(Update).
- Show All Tasks(All).
## Requirements
- nodejs
- npm
## Configuration
- Create account on mlab to host your db or install mongoDB locally
- Create .env file 
- Add The following configuration


**DB_URL example here from my mlab account not locally**


Open .env And add these configuration

```shell
SERVER_URL  = PUT HERE SERVER IP or DOMAIN ex: http://127.0.0.1
SERVER_PORT = PUT HERE RUNNING PORT ex:5000
DB_URL      = PUT HERE DB_URL ex:mongodb://userName:Password@ds127825.mlab.com:27825/DB_NAME
```
## Running
```shell
git clone https://github.com/EngAhmedMahmoud/todoListAPI.git
cd todoListAPI
touch .env
npm i
npm start
```
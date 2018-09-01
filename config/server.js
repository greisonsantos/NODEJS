
var express = require('express'); //iniciando o mudulo do express
var consign = require('consign'); //faço consign a olhar para dentro do diretorio routes e automaticamnete e realizado os requires
var bodyParser= require('body-parser') //mudulo para reber dados de formularios

var app = express();
app.use(bodyParser.urlencoded({ extends:true})); //iniciando o modulo de tratativa de url

app.set('view engine', 'ejs'); //indica que estou ultilizando ejs para rederizar as views
app.set('views', './app/views'); //indica o caminho onde estar minha views

// consign().include('app/routes').into(app); //instancia cinsign apontando para routes e passado como parametro para execusão do express


//autoload com consign nas rotas e no banco

 consign()
     .include('app/routes')   //autoload automatico de todas as rotas
     .then('config/db_connection.js') //autoload automatico da conexão
      .then('app/models')  //autoload de todas as models automatico
     .into(app);

module.exports = app;


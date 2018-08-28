
var express= require('express'); //incorpora biblioteca express
var app= express();  //executa a função
app.set('view engine', 'ejs');  //indica para o express que estamos ultilizando o ejs para que possa trabalhar em conjunto

app.set('views', './App/views'); //inclui onde sera procurado os arquivos de views
module.exports= app;
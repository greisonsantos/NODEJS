
var app= require('./config/server'); //inclui e executa o modulo de configuração de servidor 


//chamando modulos de rotas
 var rotaNoticias= require('./App/routes/noticias'); //importando o modulo de rotas de noticias
 rotaNoticias(app);  //executando o modulo de rotas

 var rotaHOme= require('./App/routes/home'); //importando o modulo de rotas de noticias
 rotaHOme(app);  //executando o modulo de rotas

 var rotaFormInclusao= require('./App/routes/form_inclusao')(app); //inclui o modulo ja executando

app.listen(3000, function(){

 console.log("servidor rodando com express");

});
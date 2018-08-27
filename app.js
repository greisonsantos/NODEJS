var express= require('express'); //incorpora biblioteca express
var app= express();  //executa a função

app.set('view engine', 'ejs');  //indica para o express que estamos ultilizando o ejs para que possa trabalhar em conjunto





app.get('/', function(req, res){      // parametros requisição e respostas =>quando acessar rota  / retorna um html especifico
    
    // res.send("<html><body>Portal de Noticias</body> </html>"); =>sem ejs
    res.render('home/index'); //com ejs
});

app.get('/formulario_inclusao', function(req, res){      // parametros requisição e respostas =>quando acessar rota  / retorna um html especifico
    
    //res.send("<html><body>Portal de Noticias de Tecnologia</body> </html>"); //=>sem ejs
        res.render('admin/form_add_noticia'); //com ejs
});

app.get('/noticias', function(req, res){      // parametros requisição e respostas =>quando acessar rota  / retorna um html especifico
    
    //res.send("<html><body>Portal de Noticias de Tecnologia</body> </html>"); //=>sem ejs
        res.render('noticias/noticias'); //com ejs
});

app.listen(3000, function(){

 console.log("servidor rodando com express");

});



var app= require('./config/server'); //inclui e executa o modulo de configuração de servidor 


app.get('/', function(req, res){      // parametros requisição e respostas =>quando acessar rota  / retorna um html especifico
    
    // res.send("<html><body>Portal de Noticias</body> </html>"); =>sem ejs
    res.render('home/index'); //com ejs
});

app.get('/formulario_inclusao', function(req, res){      // parametros requisição e respostas =>quando acessar rota  / retorna um html especifico
    
    //res.send("<html><body>Portal de Noticias de Tecnologia</body> </html>"); //=>sem ejs
        res.render('admin/form_add_noticia'); //com ejs
});


app.get('/noticias', function(req, res){      // parametros requisição e respostas =>quando acessar rota  / retorna um html especifico
    
    //res.send("<html><body>Portal de Noticsias de Tecnologia</body> </html>"); //=>sem ejs
        res.render('noticias/noticias'); //com ejs
});

app.listen(3000, function(){

 console.log("servidor rodando com express");

});
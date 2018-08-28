module.exports= function(app){

   app.get('/noticias', function(req, res){      // parametros requisição e respostas =>quando acessar rota  / retorna um html especifico
      //res.send("<html><body>Portal de Noticsias de Tecnologia</body> </html>"); //=>sem ejs
        res.render('noticias/noticias'); //com ejs
    });
};
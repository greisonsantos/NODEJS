module.exports= function(app){


app.get('/', function(req, res){      // parametros requisição e respostas =>quando acessar rota  / retorna um html especifico
    
    // res.send("<html><body>Portal de Noticias</body> </html>"); =>sem ejs
    res.render('home/index'); //com ejs
});
}
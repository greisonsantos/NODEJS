module.exports= function(app){


app.get('/formulario_inclusao', function(req, res){      // parametros requisição e respostas =>quando acessar rota  / retorna um html especifico
    
    //res.send("<html><body>Portal de Noticias de Tecnologia</body> </html>"); //=>sem ejs
        res.render('admin/form_add_noticia'); //com ejs
});
}
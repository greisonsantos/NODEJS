module.exports = function(app){

    app.get('/noticia', function(req,res){
        //assim a conexão com o banco de dados so e estabelecido qunado se acessa essa rota
        var connection = app.config.db_connection();

        var noticiaModel= new app.app.models.noticiasModel(connection);

         noticiaModel.getNoticia(function(error, result){
            res.render('noticias/noticia', { noticia : result });
        });

    });
}
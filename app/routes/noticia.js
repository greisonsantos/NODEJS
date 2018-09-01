module.exports = function(app){

    app.get('/noticia', function(req,res){
        //assim a conexão com o banco de dados so e estabelecido qunado se acessa essa rota
        var connection = app.config.db_connection();

        var noticiaModel= app.app.models.noticiasModel;

         noticiaModel.getNoticia(connection, function(error, result){
            res.render('noticias/noticia', { noticia : result });
        });

    });
}
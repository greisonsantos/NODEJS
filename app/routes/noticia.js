module.exports = function(app){

    app.get('/noticia', function(req,res){
        //assim a conexão com o banco de dados so e estabelecido qunado se acessa essa rota
        var connection = app.config.db_connection();

        connection.query("SELECT * FROM noticias where id=1", function(error, result){
            res.render('noticias/noticia', { noticia : result });
        });

    });
}
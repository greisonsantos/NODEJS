module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', function(req,res){  //deve passar o tipo da requisição get;post;request

    	var noticia= req.body;
        // res.send(noticias);  //imprimi no navegador

        //passos para gravar no banco
        //recuperar a conexao
        //recuperar a model
        //salvar noticia

        var connection= app.config.db_connection(); //recuperando a conexao com banco de dados
        var  model=new  app.app.models.noticiasModel(connection); //recuperando model de noticias

        model.salvarNoticia(noticia, function(error, result){ //dados do form; conexao; e calback
        	res.redirect('/noticias');

        })
    });
}
  // // var bdConnection =  require('../../config/db_connection'); //recuperando o arquivo de conexão com banco


  //   module.exports = function(app){

  //   // var connection = bdConnection(); //executando a função de coneção
  //   // app.get('/noticias', function(req,res){

  //   //         //primeiro parametro       //segundo e uma calback
  //   //         connection.query("SELECT * FROM noticias", function(error, result){
  //   //            // res.send(result);  imprimi na tela
  //   //            res.render('noticias/noticias',{ noticias :result});  //envia para view
  //   //         });
  //   // });
  //   };

    module.exports = function(app){

    app.get('/noticias', function(req,res){
        //assim a conexão com o banco de dados so e estabelecido qunado se acessa essa rota
        var connection = app.config.db_connection();

        connection.query("SELECT * FROM noticias", function(error, result){
            res.render('noticias/noticias', { noticias : result });
        });

    });
}
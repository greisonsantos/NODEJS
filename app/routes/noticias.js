module.exports = function(app){
    app.get('/noticias', function(req,res){

        var mysql      = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '160597',
            database: 'portal_noticias'
        });

        connection.query("select * from noticias", function(error, result){  //recebe dois parametros padroões 
            res.send(result);
        });

    });
}

var http= require('http'); //incorpora biblioteca http no script

//http.createServe(functionn(req, res){   //sobe um servidor

//   res.end("<html><body>POrtal de noticias </body> </html>");    //resposta da requisição geralmente arquivos html
//}).listen(3000); 

 var server = http.createServer(function(req, res){   //sobe um servidor
   res.end("<html><body>Portal de notícias </body> </html>");    //resposta da requisição geralmente arquivos html
}); 

 server.listen(3000);
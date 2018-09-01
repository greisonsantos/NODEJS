var app = require('./config/server');



//faço autoload automatico com consign
//var rotaNoticias = require('./app/routes/noticias')(app);
//var rotaHome = require('./app/routes/home')(app);
//var rotaFormInclusaoNoticia = require('./app/routes/form_inclusao_noticia')(app);

app.listen(3000, function(){
    console.log("Servidor ON");
});
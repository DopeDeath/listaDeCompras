 var crypto = require("crypto");
module.exports.produtosGetCtrl = function(app, req, res) {


  var connection = app.config.dbConnection();
  var produtosModel = new app.app.models.ProdutosDAO(connection);

  produtosModel.getProdutos(function(error, result) {

    if (!error) {
    res.send(result).status(200);
    } else {
      res.sendStatus(500);
    }
  });

}


module.exports.produtosPostCtrl = function(app, req, res) {
  var produtosSub = req.body;

  req.assert('nome', 'Nome não pode ser nulo').notEmpty().len(1, 50);
  req.assert('genero', 'Genero não pode ser nulo').notEmpty().len(1, 50);
  req.assert('perecivel', 'Perecivel não pode ser nulo').notEmpty();

  var validError = req.validationErrors();

  if (validError) {

    res.status(406)
    return;

  } else {

    var connection = app.config.dbConnection();
    var produtosModel = new app.app.models.ProdutosDAO(connection);



    // produtosSub.nome = crypto.createHash('md5').update(produtosSub.nome).digest("hex")
    //
    // console.log(produtosSub);
  }

  produtosModel.postProdutos(produtosSub, function(error, result) {

    if (error) {
      res.sendStatus(501)
    } else {
      res.status(201)
      res.send(result);
    }

    connection.end()

  });

}

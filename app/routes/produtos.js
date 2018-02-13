module.exports = function(app) {

  app.get('/produtos', function(req, res, next) {
    app.app.controllers.produtos.produtosGetCtrl(app, req, res);
  });


  app.post('/produtos', function(req, res, next) {
    app.app.controllers.produtos.produtosPostCtrl(app, req, res);

  })
};

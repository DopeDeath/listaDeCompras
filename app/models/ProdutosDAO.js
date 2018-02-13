function ProdutosDAO(connection) {
  this._connection = connection;
}


ProdutosDAO.prototype.getProdutos = function(callback){
  this._connection.query('select * from produtos', callback);
}


ProdutosDAO.prototype.postProdutos = function(produtosSub, callback) {
  this._connection.query('insert into produtos set ?', produtosSub, callback);
}


module.exports = function (){
  return ProdutosDAO;

}

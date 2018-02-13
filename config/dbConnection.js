var mysql = require('mysql');

var connMySQL = function() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lista_de_compras'
  });

}

module.exports = function() {
  return connMySQL;
};

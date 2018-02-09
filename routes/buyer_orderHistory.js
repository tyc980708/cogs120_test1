
/*
 * GET home page.
 */
var data = require('../buyer_menu.json');

exports.viewHistory = function(req, res){
  res.render('buyer_orderHistory', data);
};
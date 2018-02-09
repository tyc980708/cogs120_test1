
var data = require('../buyer_menu.json');

exports.viewMenu = function(req, res) { 
  // controller code goes here 
  var name = req.params.name; 
  console.log("The project name is: " + name);
  res.render('index_itemDetail', {
    'itemName': name
  });
};
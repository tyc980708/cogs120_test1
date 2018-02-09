
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var index_itemDetail = require('./routes/index_itemDetail');
var buyer_orderHistory = require('./routes/buyer_orderHistory');
var account = require('./routes/account');
var buyer_orderDetail = require('./routes/buyer_orderDetail');
var seller_addFromHistory = require('./routes/seller_addFromHistory');
var seller_addFromNew = require('./routes/seller_addFromNew');
var seller_home = require('./routes/seller_home');
var seller_itemDetail = require('./routes/seller_itemDetail');
var seller_itemPhotos = require('./routes/seller_itemPhotos');
var seller_nextDetail = require('./routes/seller_nextDetail');
var seller_nextMenu = require('./routes/seller_nextMenu');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/index_itemDetail', index_itemDetail.viewMenu);
app.get('/', index.view);
app.get('/buyer_orderHistory', buyer_orderHistory.view);
app.get('/', index.view);
app.get('/account', account.view);
app.get('/', index.view);
app.get('/buyer_orderDetail', buyer_orderDetail.view);
app.get('/', index.view);
app.get('/seller_addFromHistory', seller_addFromHistory.view);
app.get('/', index.view);
app.get('/seller_addFromNew', seller_addFromNew.view);
app.get('/', index.view);
app.get('/seller_home', seller_home.view);
app.get('/', index.view);
app.get('/seller_itemDetail', seller_itemDetail.view);
app.get('/', index.view);
app.get('/seller_itemPhotos', seller_itemPhotos.view);
app.get('/', index.view);
app.get('/seller_nextDetail', seller_nextDetail.view);
app.get('/', index.view);
app.get('/seller_nextMenu', seller_nextMenu.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

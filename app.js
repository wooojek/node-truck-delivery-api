const Koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');
const delivery = require('./routes/delivery');

const app = new Koa();
const static = new Koa();

static.use(serve(__dirname + '/public'));
app.use(mount('/', static));

app.use(delivery);

module.exports = app;
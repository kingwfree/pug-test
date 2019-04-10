const Koa = require('koa');
const views = require('koa-views');
const {join} = require('path');
const router = require('./router/router');
const static = require('koa-static');
const app = new Koa;


app.use(views(join(__dirname,'views'),{
    extension:'pug'
}));

//引入css样式时，public文件夹就是根了
app.use(static(join(__dirname,"public")))

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3003,()=>{
    console.log('项目启动成功，监听在3003端口');
});
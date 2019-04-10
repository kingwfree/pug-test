const Router = require('koa-router');
const router = new Router;

router.get('/if',async ctx=>{
    await ctx.render('if');
})
router.get('/each',async ctx=>{
    await ctx.render('each');
})
//嵌入
router.get('/interpolation',async ctx=>{
    await ctx.render('interpolation');
})
router.get('/include',async ctx=>{
    await ctx.render('include');
})
router.get('/css1',async ctx=>{
    await ctx.render('css1');
})
router.get('/js',async ctx=>{
    await ctx.render('js');
})
router.get('/mixin',async ctx=>{
    await ctx.render('mixin');
})


module.exports = router;
const koa = require('koa');
const app = new koa();
const fs = require('fs');
const router = require('koa-router')()
const mysql = require('mysql')
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'test'
})

router.post('/test/del', async(ctx, next) => { //删除接口
    console.log('del', ctx.request.body);
    let req = ctx.request.body;
    let _SQL = `delete from news where id='${req.id}'`;

    let da = await new Promise(function(resolve, reject) {
        connection.query(_SQL, (error, results, fields) => {
            if (error) throw error
            return resolve(results)
        });

    })
    ctx.body = {
        data: da,
        msg: '',
        code: '000000'
    };
})
router.post('/test/edit', async(ctx, next) => { //修改接口
    console.log('edit', ctx.request.body);
    let req = ctx.request.body;
    let values = Object.values(ctx.request.body)
    let sqlStr = Object.keys(ctx.request.body).map(item => {
        if (typeof req[item] == 'string') { //字符串需要加上单引号才能作为sql查询语句
            return `${item} = '${req[item]}'`
        }
        return `${item} = ${req[item]}`
    });

    let _sql = `update news set ${sqlStr.join(',')} where id='${req.id}'`; //sql查询语句
    let da = await new Promise(function(resolve, reject) {
        connection.query(_sql, (error, results, fields) => {
            if (error) throw error
            return resolve(results)
        });

    })
    ctx.body = {
        data: da,
        msg: '',
        code: '000000'
    };
})
router.get('/test/list', async(ctx, next) => { //查询接口
    console.log('list', ctx.request.body);
    let da = await new Promise(function(resolve, reject) {
        connection.query(`SELECT title,theme,Category from news`, (error, results, fields) => {
            if (error) throw error
            return resolve(results)
        });

    })
    ctx.body = {
        data: da,
        msg: '',
        code: '000000'
    };
})


router.post('/test/add', async(ctx, next) => { //新增接口
    console.log('add', ctx.request.body);
    let req = ctx.request.body;
    let keysArr = Object.keys(ctx.request.body);
    let values = Object.values(ctx.request.body).map((item, index) => {
        if (typeof item == 'string') {
            item = `'${item}'`
        }
        return item
    })
    let _sql = `insert into news(title,theme,Category) values (${values.join(',')})`;
    let da = await new Promise(function(resolve, reject) {
        connection.query(_sql, (error, results, fields) => {
            if (error) throw error
            return resolve(results)
        });

    })
    ctx.body = {
        data: da,
        msg: '',
        code: '000000'
    };

})
app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods());
app.listen(3000, () => {
    console.log('server is running at 3000 port')
})
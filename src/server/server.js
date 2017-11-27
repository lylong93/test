const Koa = require('koa')
const Router = require('koa-router')
const mongoose = require('mongoose')
const app = new Koa()
const router = new Router()

const DBURL = 'mongodb://127.0.0.1:27017'
const db = mongoose.connect(DBURL).connection

db.on('connected', console.log.bind(console, '连接成功'))


router.get('/', (ctx) => {
    ctx.body = 'hi body'
})
app.use(router.routes())

app.listen(8000)
const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()
// const router = new Router()

const userRouter = require('./user')

const mongoose = require('mongoose')

const DBURL = 'mongodb://127.0.0.1:27017/where-app'
const db = mongoose.connect(DBURL).connection

db.on('connected', console.log.bind(console, '连接成功'))


router.get('/', (ctx) => {
    ctx.body = 'hi body'
})
app.use(router.routes())
app.use(userRouter.routes())

app.listen(8000, console.log.bind(console, 'run in 8000'))
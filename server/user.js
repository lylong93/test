const Koa = require('koa')
const router = require('koa-router')
const app = new Koa()
const Router = new router()

const model = require('./model')
const User = model.getModel('user')

Router.get('/user', (ctx) => {
    ctx.response.body = {
        'hello': '0'
    }
})
Router.get('/list', (ctx) => {
    User.find({}, (err, doc) => {
        ctx.body = doc
        console.log('不可靠')
    })
    ctx.body = 'ok'
    console.log(ctx.body)
})
Router.get('/user/register', (ctx) => {
    ctx.response.body = 'ok'
})

module.exports = Router
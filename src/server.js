const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public')) // static, public content (search in project root)
server.use(express.urlencoded({extended: true})) // middle ground between '/room/:room/:question/:action' and QuestionController.index
server.use(route)

server.listen(3000, () => console.log('RODANDO'))
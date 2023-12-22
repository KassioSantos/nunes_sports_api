var express = require('express')
var cors = require('cors')
const moment = require('moment');
const produtoRouter = require('./routes/produtoRoutes')

var app = express()

app.use(cors())
const port = process.env.PORT || 3000

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.static('public'))

app.use('/', produtoRouter)


app.listen(port, async () => {
    var horaAtual = moment().format('HH:mm:ss DD-MM-YYYY');
    console.log('Servidor rodando!', horaAtual)
    console.log(`http://localhost:${port}`)
})
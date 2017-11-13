const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)


sequelize.sync({force: false}).then(() => {
    io.on('connection', function (socket) {
        socket.on('chat message', function(msg){
            io.emit('chat message', msg);
          })
    })

    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
    
})

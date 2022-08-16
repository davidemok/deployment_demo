const express = require("express")
const cors = require("cors")
const path = require('path')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('client'))
const { getCss, getJava } = require('./controller/controller.js')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
    //wherever these files are, join the paths
})
app.get('/css', getCss)
app.get('/js', getJava)

const port = process.env.PORT || 4000



app.listen(port, console.log("bubberduck, we are a go at 4000"))
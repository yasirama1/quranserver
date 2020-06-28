const express = require('express')
const tas = require('./routes/Translated_ayats')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();
const config = require('./config/config')
const morgan = require('morgan')

const app = express();
const {sequelize} = require('./models')

app.use(express.json());
app.use('/tas',tas)
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())


app.get('/', (req, res) => {
	res.send("Everything is good!")
})

sequelize.sync({force: false})
  .then(() => {
    app.listen(process.env.PORT || 3000)
    console.log(`Server started on port ${config.port}`)
  })

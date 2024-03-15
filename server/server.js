const express = require('express');
const bodyParse = require('body-parser')
const cors = require('cors');
const { sequelize } = require('./service/sequelize');
const router = require('./routes/index');

const app = express();

var corOptions = {
    origin: "http://localhost:8000/api"
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json("Hello from api")
})

const PORT = process.env.PORT || 8000;

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})




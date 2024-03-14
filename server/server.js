const express = require('express');
const bodyParse = require('body-parser')
const cors = require('cors');

const app = express();

var corOptions = {
    origin: "http://localhost:8000"
}

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json("Hello from api")
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

// const db = mysql.createConnection({
//     host: "vision.herosite.pro",
//     port: 3306,
//     user: "inyourcorner",
//     database: "inyourcorner",
//     password: "inyourcorner",
// })

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL');
// });

// app.get('/', (re, res) => {
//     return res.json("From BackEnd Side");
// })

// app.get('/code', (re,res) => {
//     const sql = "SELECT * FROM embeddedcode"
//     db.query(sql, (err, data) => {
//         if(err) {
//             return res.json(err);
//         }
//         else {
//             return res.json(data);
//         }
//     })
//     // return sql
// })

// app.post('/Register', (req, res) => {
//     const sql = `INSERT INTO (RegisterEmail, CreatedOnDate) VALUES ()`
//     db.query(sql, (err, data) => {
//         if(err) {
//             return res.json(err);
//         }
//         else {
//             return res.json(data);
//         }
//     })
// })

// app.post('/login', (req, res) => {
//     let Email = req.body.Email
//     const sql = "SELECT * FROM registerdetails where RegisterEmail = '" + Email + "' "
//     db.query(sql, (err, data) => {
//         if(err) {
//             return res.json(err);
//         }
//         else {
//             return res.json(data);
//         }
//     })
// })

// app.listen(8000, () => {
//     console.log("Listening");
// })
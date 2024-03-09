const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "vision.herosite.pro",
    port: 3306,
    user: "inyourcorner",
    database: "inyourcorner",
    password: "inyourcorner",
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/', (re, res) => {
    return res.json("From BackEnd Side");
})

app.get('/code', (re,res) => {
    const sql = "select * from embeddedcode"
    db.query(sql, (err, data) => {
        if(err) {
            return res.json(err);
        }
        else {
            return res.json(data);
        }
    })
    // return sql
})

app.listen(8000, () => {
    console.log("Listening");
})
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'andre',
  password: 'password',
  database: 'livraria'
});

const app = express();

connection.query("SELECT * FROM Categoria", (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    // rows fetch
    console.log(data);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Servidor rodando...');
});

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'india-1.czbnqenodij7.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'india2022',
  database: 'teste',
  port: '3306'
});


/*
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'andre',
  password: 'password',
  database: 'teste'
});
*/
const app = express();

app.get('/login', async (req, res)=>{
  console.log('Oi');
    // Conectando ao banco.
    connection.getConnection(function (err, connection) {
      if (err) console.log("error");
    // Executando a query MySQL (selecionar todos os dados da tabela usuário).
      connection.query('SELECT * FROM Users', function (error, results, fields) {
      // Caso ocorra algum erro, não irá executar corretamente.if (error) throw error;
      // Pegando a 'resposta' do servidor pra nossa requisição. Ou seja, aqui ele vai mandar nossos dados.
      //res.send(results);
        res.send(result);
        console.log(results);
    });
  });
});


connection.query("SELECT * FROM Users", (err, data) => {
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

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

// npx sequelize-cli model:generate --name User --attributes name:string,password:string
// npx sequelize-cli db:migrate

//npx sequelize-cli model:generate --name Usuario --attributes numDoc:integer,nome:string,telefone:string,email:string,avaliacao:integer,tipo:integer

const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('./config/smtp');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let usuario = models.Usuario;

app.post('/login', async (req,res)=>{
  let response = await usuario.findOne({
    where:{email:req.body.email, senha:req.body.password}
  });
  console.log(response);
  if (response === null){
    res.send(JSON.stringify('error'));
  } else {
    res.send(response);
  }
});

app.post('/create', async (req,res)=>{
  let create = await usuario.create({
    num_doc: 5555,
    nome: req.body.name,
    senha: req.body.password,
    telefone: '99999',
    email: req.body.email,
    avaliacao: 0,
    tipo: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  res.send(JSON.stringify('Usuário criado com sucesso'));
});

app.post('/code-email', async (req,res)=>{
  //let response = await usuario.findOne
  const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: SMTP_CONFIG.user,
      pass: SMTP_CONFIG.pass
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let randomCode = '';
  let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (i = 0; i < 6; i++) {
    randomCode += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  code = randomCode.toUpperCase();

  var message = {
    from: "easy.fretes@mailtrap.com.br",
    to: [req.body.email],
    subject: "Código para trocar senha",
    text: code,
    html: "<p>{code}</p>"
  };

  transporter.sendMail(message, function(err) {
    if (err) {
      res.send(JSON.stringify('error'))
    } else {
      res.send(JSON.stringify(code));
    }
  });
});

app.post('/verifyMail', async (req,res)=>{
  let response = await usuario.findOne({
    where:{email:req.body.email}
  });
  if (response === null){
    res.send(JSON.stringify('error'));
  } else {
    res.send(JSON.stringify(response.id));
  }
});

app.post('/verifyPass', async (req,res)=>{
  let response = await usuario.findOne({
    where:{id:req.body.id}
  });
  console.log(req.body);
  if (response === null){ // não pode dar null
    res.send(JSON.stringify('error'));
  } else {
    if (req.body.novaSenha == req.body.confNovaSenha) {
      // Faz a atualização
      response.senha = req.body.novaSenha;
      response.save()

      res.send(JSON.stringify('Senha atualizada com sucesso!'));
    } else {
      res.send(JSON.stringify('Senhas diferentes'));
    }
  }
});

let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});

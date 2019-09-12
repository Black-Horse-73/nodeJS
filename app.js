//https://expressjs.com/ru/

let express = require('express'); //импортируем модуль express
let app = express(); //задаем переменную для модуля express
let bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser({
   extended: true
}));

let fs = require('fs');
let arrayPath = './data.json';

function fsReadFileSynchToArray(filePath) {
   let data = JSON.parse(fs.readFileSync(filePath));
   console.log(data);
   return data;
}

let articles = fsReadFileSynchToArray(arrayPath); //задаем переменную для экспортированого массива
console.log(articles);

let loaded = 0;
app.get('/articles', (req, resp) => {
   loaded += 3;
   console.log(articles.length)
   resp.send({
      hasNext: articles.length > loaded,
      articles: articles.slice(loaded - 3, loaded)
   });
});

app.listen(3001, () => console.log('Сервер работает на порте 3001...')); //используем модуль express, назначаем порт для нашего cервера
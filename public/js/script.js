//https://expressjs.com/ru/

let loadMore = document.querySelector('.more');


loadMore.addEventListener('click', function () { //действие при кликании на кнопку
   fetch('http://localhost:3001/articles', { //fetch() делает сетевые запросы и получает информацию с сервера (1 параметр - адрес куда обращаемся, 2 - метод который нам необходим)
         method: 'GET' //указываем какой из методов нам необходим, GET - получить
      })
      .then((data) => data.json()) //этой строкой мы указываем что ответ в формате json
      .then((data) => {
         let articles = document.querySelector('.articles');
         console.log(data);
         data.articles.forEach((article) => {
            let articleHTML = `
            <article>
               <img src="${article.image}" alt="Tushkan">
               <h2>${article.title}</h2>
               <p><span>${article.date}</span>|<span>${article.author}</span></p>
               <p>${article.tag}</p>
               <p>${article.views}</p>
               <p>${article.text}</p>
            </article >
         `;
            articles.insertAdjacentHTML('afterEnd', articleHTML);
         })
         if (!data.hasNext) {
            loadMore.style.display = "none";
         }
      })
})
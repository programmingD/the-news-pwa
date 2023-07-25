const API = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=962ccbe6d8b7408ab7f8674fd54c6b64';
const API_II = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=962ccbe6d8b7408ab7f8674fd54c6b64';
const API_III = 'https://newsapi.org/v2/everything?q=apple&from=2023-07-23&to=2023-07-23&sortBy=popularity&apiKey=962ccbe6d8b7408ab7f8674fd54c6b64';
const HTMLNode = document.getElementById('news');

function getNewsAPI(API) {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
        /*.then((data) => {
            //console.log(data);
            data.articles.forEach(article => {
                if(article.urlToImage != null && article.title != null && article.author != null && article.description != null && article.publishedAt != null){
                    let apples = `
                    <div class="card" style="width: 18rem;">
                        <img src="${article.urlToImage}" class="card-img-top" alt="Image of the notice">
                        <div class="card-body">
                            <h2 class="title-news">${article.title}</h2>
                            <p class="author"><span class="author">${article.author}</p>
                            <p class="card-text">${article.description} <br> <a href="${article.url}" target="_blank" rel="noopener noreferrer">Read more...</a></p>
                            <p class="card-text published">Published at ${article.publishedAt
                            }</p>
                            
                        </div>
                    </div>`;
                    HTMLNode.innerHTML += apples;
                } 
            });
        })*/
}

function runApp() {
    getNewsAPI(API);
    getNewsAPI(API_II);
    getNewsAPI(API_III);
}
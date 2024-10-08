import MY_APY_KEY from './myapp.js'

let API = `https://newsdata.io/api/1/news?apikey=${MY_APY_KEY}=pegasus&language=en`;

const HTMLNode = document.getElementById('news');

function getNewsAPI(API) {
    fetch(API)
        .then(res => res.json())
        /*.then(data => {
            console.log(data);
        });*/
        .then((data) => {
            //console.log(data);
            data.results.forEach(article => {
                if(article.creator != null && article.content != null && article.title != null && article.link != null && article.description != null && article.image_url != null){
                    let apples = `
                    <div class="card" style="width: 18rem;">
                        <img src="${article.image_url}" class="card-img-top" alt="Image of the notice">
                        <div class="card-body">
                            <h2 class="title-news">${article.title}</h2>
                            <p class="author"><span class="author">${article.creator}</p>
                            <p class="card-text">${article.description} <br> <a href="${article.link}" target="_blank" rel="noopener noreferrer">Read more...</a></p>
                            <p class="card-text published">Published at ${article.pubDate}</p>
                            <p class="card-text published">Language ${article.language}</p>
                        </div>
                    </div>`;
                    HTMLNode.innerHTML += apples;
                } 
            });
        })
}

function runApp() {
    getNewsAPI(API);
    /*getNewsAPI(API_II);
    getNewsAPI(API_III);*/
}

var story = [`<p class="fs-1 fw-bolder">"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."</p> 
<p class="fs-1 fw-bolder">--J.K. Rowling</p>`




,`<p class="fs-1 fw-bolder">"Be yourself; everyone else is already taken."</p> 
<p class="fs-1 fw-bolder">-- Oscar Wilde</p>`



, `<p class="fs-1 fw-bolder">"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."</p> 
<p class="fs-1 fw-bolder">-- Albert Einstein </p>`


, `<p class="fs-1 fw-bolder">" So many books, so little time. "</p> 
<p class="fs-1 fw-bolder">--Frank Zappa</p>`


, `<p class="fs-1 fw-bolder">"You only live once, but if you do it right, once is enough. "</p> 
<p class="fs-1 fw-bolder">--Mae West</p>`


, `<p class="fs-1 fw-bolder">" A friend is someone who knows all about you and still loves you. "</p> 
<p class="fs-1 fw-bolder">--Elbert Hubbard</p>`
]


function addStory(){
    let qoute = Math.floor(Math.random() * story.length) ; 
document.getElementById("main_qoute").innerHTML = story[qoute];

}

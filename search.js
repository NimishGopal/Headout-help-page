let options = {
    shouldSort: true,
    threshold: 0.2,
    location: 0,
    distance: 1000,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        "title"
    ]
}
let articleKeys = [];
let articles = document.querySelectorAll('.category-block > div a');
Array.from(articles).forEach((article)=>{
    articleKeys.push({
        "title": article.innerHTML,
        "outerHTML": article.outerHTML
    });
});

let fuse = new Fuse(articleKeys, options);
let searchResultBox = document.querySelector('.search-options');
let cancelbtn = document.querySelector('.cancel-cta');
let searchBar = document.querySelector('.search-bar');

const searchArticle = (context) => {
    searchResultBox.classList.add('display-block');
    cancelbtn.classList.add('display-block');
    let resultHTML = "";
    let result = fuse.search(context.value);
    result.forEach((ele) => {
        resultHTML= resultHTML + ele.outerHTML;
    });
    searchResultBox.innerHTML=resultHTML;
    (context.value=="")?cancelbtn.classList.remove('display-block'):"";
}
const clearSearch = () => {
    searchBar.value = "";
    cancelbtn.classList.remove('display-block');
    searchResultBox.classList.remove('display-block');
}
cancelbtn.addEventListener('click',clearSearch);

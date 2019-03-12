let options = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
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
        "href": article.href,
        "outerHTML": article.outerHTML
    });
});
let fuse = new Fuse(articleKeys, options);
let searchResultBox = document.querySelector('.search-options');
searchResultBox.classList.add('display-block');
const searchArticle = (context) => {
    let resultHTML = "";
    let result = fuse.search(context.value);
    result.forEach((ele) => {
        resultHTML= resultHTML + ele.outerHTML;
    });
    searchResultBox.innerHTML=resultHTML;
}
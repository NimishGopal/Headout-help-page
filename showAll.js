//SHOW ALL BUTTON FUNCTIONALITY
const hideShowAllElements = (targetBlock, showEle) => {
    targetBlock.classList.add('expand-block');

    showEle.classList.remove('display-block');
}

const displayShowAllElements = (ele) => {
    let lastElement = ele.children[maxAllowedElements - 2];
    //CHECK IF WE WANT CATEGORY ROW OR CATEGORY BLOCK
    let targetBlock = ele.parentElement;
    let targetEle = ele.lastChild.previousElementSibling;
    targetEle.classList.add('display-block');
    targetEle.addEventListener('click', () => hideShowAllElements(targetBlock, targetEle));
}

let maxAllowedElements = 6;
let categoryBlocks = document.querySelectorAll('.category-block > div');
categoryBlocks.forEach((ele) => {
    if (ele.childElementCount > maxAllowedElements) {
        displayShowAllElements(ele);
    }
});
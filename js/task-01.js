const allLiRef = document.querySelectorAll('li.item');
console.log('Number of categories: ', allLiRef.length);

function makeCategoryInventarisation(categoryArray) {
    [...categoryArray].map(category => {
        console.log('Category: ', category.firstElementChild.textContent);
        console.log('Elements: ', category.querySelectorAll('li').length);
    });
}

makeCategoryInventarisation(allLiRef);

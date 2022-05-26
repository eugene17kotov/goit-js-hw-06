const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulRef = document.querySelector('#ingredients');

function createIngredientsList(ingredientsArray, whereAppend) {
    whereAppend.append(
        ...ingredientsArray.map(ingredient => {
            const liEl = document.createElement('li');
            liEl.textContent = ingredient;
            liEl.classList.add('item');
            return liEl;
        })
    );
}

createIngredientsList(ingredients, ulRef);

console.log(ulRef);

// const ingredientsList = ingredients.map(ingredient => {
//     const liEl = document.createElement('li');
//     liEl.textContent = ingredient;
//     liEl.classList.add('item');
//     return liEl;
// });

// ulRef.append(...ingredientsList);

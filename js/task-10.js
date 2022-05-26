function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    inputNumber: document.querySelector('input'),
    createBtn: document.querySelector('button[data-create]'),
    destroyBtn: document.querySelector('button[data-destroy]'),
    divForBoxes: document.getElementById('boxes'),
};

refs.createBtn.addEventListener('click', () => createBoxes(refs.inputNumber.value));
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const arrayBoxes = [];

    for (let i = 0; i < amount && i < 100; i += 1) {
        const side = 30 + i * 10;
        arrayBoxes.push(
            `<div style="width: ${side}px; height: ${side}px; background-color: ${getRandomHexColor()};"></div>`
        );
    }

    refs.divForBoxes.insertAdjacentHTML('afterbegin', arrayBoxes.join(''));
}

function destroyBoxes() {
    [...refs.divForBoxes.children].forEach(element => {
        if (element) {
            refs.divForBoxes.children[0].remove();
        }
    });
    refs.inputNumber.value = '';
}

// refs.createBtn.addEventListener('click', createBoxes(refs.inputNumber.value));
// refs.destroyBtn.addEventListener('click', destroyBoxes);
// refs.inputNumber.addEventListener('input', getInputAmount);

// let inputAmount;

// function getInputAmount(event) {
//     inputAmount = event.currentTarget.value;
// }

// function createBoxes(amount) {
// amount = inputAmount;

// for (let index = 1; index <= amount; index += 1) {
//     const div = document.createElement('div');
//     arrayBoxes.push(div);
// }

// refs.divForBoxes.append(...arrayBoxes);

// for (let i = 0; i < amount; i += 1) {
//     const side = 30 + i * 10;
//     refs.divForBoxes.children[i].style.width = `${side}px`;
//     refs.divForBoxes.children[i].style.height = `${side}px`;
// refs.divForBoxes.children[i].style.backgroundColor = getRandomHexColor();
// }
// }

// function destroyBoxes() {
// for (let i = 0; refs.divForBoxes.children[0]; i += 1) {
//     refs.divForBoxes.children[0].remove();
// }
// refs.inputNumber.value = '';
// }

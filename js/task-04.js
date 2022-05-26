const refs = {
    decrementButton: document.querySelector('button[data-action="decrement"]'),
    incrementButton: document.querySelector('button[data-action="increment"]'),
    count: document.querySelector('#value'),
};

let counterValue = 0;

refs.decrementButton.addEventListener('click', onDecrementCounter);
refs.incrementButton.addEventListener('click', onIncrementCounter);

function onIncrementCounter() {
    counterValue += 1;
    refs.count.textContent = counterValue;
}

function onDecrementCounter() {
    counterValue -= 1;
    refs.count.textContent = counterValue;
}

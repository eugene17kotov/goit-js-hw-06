const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onCheckLength);

function onCheckLength(event) {
    const input = event.currentTarget;
    input.value.length >= input.dataset.length ? onValidClass() : onInvalidClass();
}

function onValidClass() {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
}

function onInvalidClass() {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
    alert('Min length - 6 symbols');
}

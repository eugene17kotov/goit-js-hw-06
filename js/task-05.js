const refs = {
    input: document.querySelector('#name-input'),
    text: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onTextInput);

function onTextInput(event) {
    event.currentTarget.value === ''
        ? (refs.text.textContent = 'Anonymous')
        : (refs.text.textContent = event.currentTarget.value.trim());
}

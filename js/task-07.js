const refs = {
    input: document.getElementById('font-size-control'),
    text: document.getElementById('text'),
};

refs.input.addEventListener('input', event => {
    refs.text.style.fontSize = `${event.currentTarget.value}px`;
});

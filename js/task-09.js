function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    textColor: document.querySelector('.color'),
    changeColorBtn: document.querySelector('.change-color'),
};

refs.changeColorBtn.addEventListener('click', () => {
    const colorValue = getRandomHexColor();
    document.body.style.backgroundColor = colorValue;
    refs.textColor.textContent = colorValue;
});

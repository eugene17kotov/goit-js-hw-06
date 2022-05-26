const refs = {
    form: document.querySelector('.login-form'),
    button: document.querySelector('button'),
    inputMail: document.querySelector('input[name="email"]'),
    inputPasw: document.querySelector('input[name="password"]'),
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { email, password } = form.elements;

    if (email.value === '' || password.value === '') {
        return alert('All inputs have to be fill');
    }
    const formData = new FormData(form);

    formData.forEach((inputValue, inputName) => {
        console.log(inputName, inputValue);
    });

    const userData = { email: email.value, password: password.value };

    console.log(userData);

    form.reset();
}

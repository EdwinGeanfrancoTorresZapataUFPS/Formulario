const form = document.forms['loginForm'];

form.addEventListener('submit', function handleFormSubmit(event) {
    event.preventDefault();

    const email = form['email'].value;
    const password = form['password'].value;
});
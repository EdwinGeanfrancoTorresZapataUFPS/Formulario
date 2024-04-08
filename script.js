document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('login-form'); // Obtiene el formulario por su ID
    const emailInput = document.getElementById('email'); // Obtiene el campo de correo electrónico por su ID
    const passwordInput = document.getElementById('password'); // Obtiene el campo de contraseña por su ID

    form.addEventListener('submit', function(event) { // Agrega un evento de escucha para el envío del formulario
        event.preventDefault(); // Evita que el formulario se envíe de inmediato
        
        if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
            // Si la validación es correcta, se envía el formulario
            form.submit();
        } else {
            // Si la validación falla, se muestra un mensaje de error
            alert('Por favor, ingrese un correo electrónico válido y una contraseña con al menos 6 caracteres.');
        }
    });

    function validateEmail(email) {
        // Utiliza una expresión regular simple para validar el formato del correo electrónico
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email); // Retorna true si el correo electrónico es válido, de lo contrario, false
    }

    function validatePassword(password) {
        // Verifica si la contraseña tiene al menos 6 caracteres
        return password.length >= 6; // Retorna true si la contraseña tiene al menos 6 caracteres, de lo contrario, false
    }
});


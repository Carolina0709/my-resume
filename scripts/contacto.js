// Obtener los elementos de entrada del formulario
var nameInput = document.getElementById('input-name');
var emailInput = document.getElementById('input-correo');
var asuntoInput = document.getElementById('input-asunto');
var mensajeInput = document.getElementById('input-mensaje');

var nameError = document.getElementById('name-error-msg');
var emailError = document.getElementById('email-error-msg');
var asuntoError = document.getElementById('asunto-error-msg');
var mensajeError = document.getElementById('mensaje-error-msg');


// Función para validar el nombre
nameInput.addEventListener('input', function() {
    validarCampo(nameInput, nameError, 'Por favor, ingresa tu nombre.', 50, 'El nombre debe tener máximo 50 caracteres.');
    validarFormulario();
});

// Función para validar el correo electrónico
emailInput.addEventListener('input', function() {
    validarCampo(emailInput, emailError, 'Por favor, ingresa tu correo electrónico.', null, null, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Por favor, ingresa un correo electrónico válido.');
    validarFormulario();
});

// Función para validar el asunto
asuntoInput.addEventListener('input', function() {
    validarCampo(asuntoInput, asuntoError, 'Por favor, ingresa el asunto.', 50, 'El asunto debe tener máximo 50 caracteres.');
    validarFormulario();
});

// Función para validar el mensaje
mensajeInput.addEventListener('input', function() {
    validarCampo(mensajeInput, mensajeError, 'Por favor, ingresa tu mensaje.', 300, 'El mensaje debe tener máximo 300 caracteres.');
    validarFormulario();
});


// Función genérica para validar campos de entrada
function validarCampo(inputElement, errorMsgElement, requiredMsg, maxLength, maxLengthMsg, regex, regexMsg) {
    var value = inputElement.value.trim();
    var errorMessage = '';

    if (value === '') {
        errorMessage = requiredMsg;
    } else if (maxLength && value.length > maxLength) {
        errorMessage = maxLengthMsg;
    } else if (regex && !regex.test(value)) {
        errorMessage = regexMsg;
    }

    // Mostrar el mensaje de error correspondiente
    errorMsgElement.innerText = errorMessage;
}


// Agregar event listener para el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Aquí puedes agregar la lógica para enviar el mensaje, por ejemplo:
    alert('Mensaje enviado correctamente');
});


// Función para validar el formulario
function validarFormulario() {
    var submitButton = document.getElementById('submit-btn');

    // Verificar si todos los campos están llenos y cumplen con las condiciones
    var nameValid = validarSubmit(nameInput, 50);
    var emailValid = validarSubmit(emailInput, null, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    var asuntoValid = validarSubmit(asuntoInput, 50);
    var mensajeValid = validarSubmit(mensajeInput, 300);

    // Habilitar el botón de enviar si todos los campos están llenos y válidos
    if (nameValid && emailValid && asuntoValid && mensajeValid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function validarSubmit(inputElement, maxLength, regex) {
    var value = inputElement.value.trim();

    if (value === '') {
        return false; // Devolver false si el campo está vacío
    } else if (maxLength && value.length > maxLength) {
        return false; // Devolver false si excede la longitud máxima
    } else if (regex && !regex.test(value)) {
        return false; // Devolver false si no cumple con la expresión regular
    }

    return true; // Devolver true si todas las condiciones se cumplen
}

validarFormulario();


const form = document.getElementById('form-verificar');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numeroA = parseFloat(document.getElementById('numero-a').value);
    const numeroB = parseFloat(document.getElementById('numero-b').value);

    if (isNaN(numeroA) || isNaN(numeroB)) {
        errorMessage.textContent = 'Por favor, insira números válidos em ambos os campos.';
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    } else if (numeroB > numeroA) {
        successMessage.textContent = 'Formulário válido: Campo B é maior que Campo A.';
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        errorMessage.textContent = 'Formulário inválido: Campo B deve ser maior que Campo A.';
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
});

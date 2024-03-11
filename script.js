document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    const inputs = form.querySelectorAll('input');

    const emailInput = document.getElementById('emailInput');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        inputs.forEach(function (input) {
            const inputGroup = input.closest('.input-group');
            const errorIcon = inputGroup.querySelector('.error-icon');

            if (input.value.trim() === '') {
                input.classList.add('border-color-changed');
                errorIcon.classList.add('show-error');
            } else {
                input.classList.remove('border-color-changed');
                errorIcon.classList.remove('show-error');
            }
            if (input.id === 'emailInput' && !isValidEmail(emailInput.value)) {
                input.classList.add('border-color-changed');
                errorIcon.classList.add('show-error');
            }
        });

        const firstNameInput = document.getElementById('firstNameInput');
        const lastNameInput = document.getElementById('lastNameInput');
        const passwordInput = document.getElementById('passwordInput');

        clearErrorMessage('firstNameError');
        clearErrorMessage('lastNameError');
        clearErrorMessage('emailError');
        clearErrorMessage('passwordError');

        if (firstNameInput.value === '') {
            displayErrorMessage('firstNameError', 'First Name cannot be empty');
        }
        if (lastNameInput.value === '') {
            displayErrorMessage('lastNameError', 'Last Name cannot be empty');
        }
        if (emailInput.value === '') {
            displayErrorMessage('emailError', 'Email cannot be empty');
        } else if (!isValidEmail(emailInput.value)) {
            displayErrorMessage('emailError', 'Please enter a valid email address');
            emailInput.classList.add('invalid-email');
        } else {
            emailInput.classList.remove('invalid-email');
        }
        if (passwordInput.value === '') {
            displayErrorMessage('passwordError', 'Password cannot be empty');
        }
    });

    function displayErrorMessage(elementId, errorMessage) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = errorMessage;
    }

    function clearErrorMessage(elementId) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = '';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

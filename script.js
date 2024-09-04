document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true;
    clearErrors(); 

    const firstname = document.querySelector('input[name="firstname"]').value.trim();
    const lastname = document.querySelector('input[name="lastname"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const query = document.querySelector('input[name="query"]:checked');
    const msg = document.querySelector('textarea[name="msg"]');
    const accept = document.querySelector('input[name="accept"]')

    if (firstname === '') {
        showError('fullName', 'This field is required');
        isValid = false;
    }

    if (lastname === '') {
        showError('username', 'This field is required');
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (!query) {
        showError('query', 'Please select a query type');
        isValid = false;
    }

    if (msg === '') {
        showError('msg', 'This field is required');
        isValid = false;
    }

    if (!accept) {
        showError('query', 'To submit this from, please consent to being contacted');
        isValid = false;
    }

    if (isValid) {
        this.submit();
    }
});

function showError(inputName, message) {
    const input = document.querySelector(`input[name="${inputName}"]`);
    const errorElement = document.getElementById(inputName + 'Error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
    input.classList.add('error');
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => {
        error.classList.remove('show');
        error.textContent = '';
    });

    const inputs = document.querySelectorAll('input.error');
    inputs.forEach(input => {
        input.classList.remove('error');
    });
}

document.getElementById('form').addEventListener('submit', function(event) {
    let valid = true;

    // Fonction pour définir les styles en fonction de la validité
    function setFieldState(input, error, message, isValid) {
        if (!isValid) {
            error.textContent = message;
            input.style.borderColor = 'red';
        } else {
            error.textContent = '';
            input.style.borderColor = 'green';
            input.style.backgroundColor = '#e6ffe6'; // Couleur de fond pour la validation
        }
    }

    // Vérifier le prénom
    const firstName = document.getElementById('firstname');
    const firstNameError = document.getElementById('firstNameError');
    if (firstName.value.trim() === "") {
        setFieldState(firstName, firstNameError, "First name is required", false);
        valid = false;
    } else {
        setFieldState(firstName, firstNameError, "", true);
    }

    // Vérifier le nom de famille
    const lastName = document.getElementById('lastname');
    const lastNameError = document.getElementById('lastNameError');
    if (lastName.value.trim() === "") {
        setFieldState(lastName, lastNameError, "Last name is required", false);
        valid = false;
    } else {
        setFieldState(lastName, lastNameError, "", true);
    }

    // Vérifier l'email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        setFieldState(email, emailError, "Please enter a valid email address", false);
        valid = false;
    } else {
        setFieldState(email, emailError, "", true);
    }

    // Vérifier le type de requête
    const queryError = document.getElementById('queryError');
    const querySelected = document.querySelector('input[name="query"]:checked');
    if (!querySelected) {
        queryError.textContent = "Please select a query type";
        queryError.style.color = 'red';
        valid = false;
    } else {
        queryError.textContent = "";
    }

    // Vérifier le message
    const msg = document.getElementById('msg');
    const msgError = document.getElementById('msgError');
    if (msg.value.trim() === "") {
        setFieldState(msg, msgError, "Message is required", false);
        valid = false;
    } else {
        setFieldState(msg, msgError, "", true);
    }

    // Vérifier l'acceptation
    const accept = document.getElementById('accept');
    const acceptError = document.getElementById('acceptError');
    if (!accept.checked) {
        acceptError.textContent = "You must consent to be contacted";
        acceptError.style.color = 'red';
        valid = false;
    } else {
        acceptError.textContent = "";
    }

    if (!valid) {
        event.preventDefault(); // Empêche la soumission du formulaire si non valide
    }
});

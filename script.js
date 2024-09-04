document.getElementById('form').addEventListener('submit', function(event) {
    let valid = true;

    // Vérifier le prénom
    const firstName = document.getElementById('firstname');
    const firstNameError = document.getElementById('firstNameError');
    if (firstName.value.trim() === "") {
        firstNameError.textContent = "First name is required";
        valid = false;
    } else {
        firstNameError.textContent = "";
    }

    // Vérifier le nom de famille
    const lastName = document.getElementById('lastname');
    const lastNameError = document.getElementById('lastNameError');
    if (lastName.value.trim() === "") {
        lastNameError.textContent = "Last name is required";
        valid = false;
    } else {
        lastNameError.textContent = "";
    }

    // Vérifier l'email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Please enter a valid email address";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Vérifier le type de requête
    const queryError = document.getElementById('queryError');
    const querySelected = document.querySelector('input[name="query"]:checked');
    if (!querySelected) {
        queryError.textContent = "Please select a query type";
        valid = false;
    } else {
        queryError.textContent = "";
    }

    // Vérifier le message
    const msg = document.getElementById('msg');
    const msgError = document.getElementById('msgError');
    if (msg.value.trim() === "") {
        msgError.textContent = "Message is required";
        valid = false;
    } else {
        msgError.textContent = "";
    }

    // Vérifier l'acceptation
    const accept = document.getElementById('accept');
    const acceptError = document.getElementById('acceptError');
    if (!accept.checked) {
        acceptError.textContent = "You must consent to be contacted";
        valid = false;
    } else {
        acceptError.textContent = "";
    }

    if (!valid) {
        event.preventDefault(); // Empêche la soumission du formulaire si non valide
    }
});

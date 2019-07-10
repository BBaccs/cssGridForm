// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit form
function submitForm(e) {
    // Get values
    const contactForm = document.querySelector('#contactForm'),
            nameVal = contactForm.name.value,
            companyVal = contactForm.company.value,
            emailVal = contactForm.email.value,
            phoneVal = contactForm.phone.value,
            messageVal = contactForm.message.value;

    // Regexpressions, form validation
    const phoneValidation = /^([0-9]{3}[\- ]){2}[0-9]{4}$/,
          lettersValidation = /^[a-z]{2}/gi,
          numbersValidation = /[0-9]/;

    //Validate phone #, spaces at the end will be trimmed
    if (!phoneValidation.test(phoneVal.trim())) {
        alert(`If you choose to fill out a number, it can only contain spaces and '-' between numbers and must be propely formatted, 555-555-5555`);
        e.preventDefault();
    }
    // Name must have at least two letters, and cannot contain numbers.
    if (lettersValidation.test(nameVal) & !numbersValidation.test(nameVal)) {
    } else {
        alert('Name must start with at least two letters, and cannot contain numbers.');
        e.preventDefault();
    }

    // console.log(nameVal, companyVal, emailVal, phoneVal, messageVal);
}

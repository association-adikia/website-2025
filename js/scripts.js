document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const concernRadios = form.querySelectorAll('input[name="concern"]');
    const formFieldsToDisable = form.querySelector('.form-fields');
    const messageTextarea = form.querySelector('#message');
    const submitButton = form.querySelector('button[type="submit"]');

    const initialPlaceholder = messageTextarea.placeholder;
    const disabledMessage = "Nous sommes désolés, nous ne pouvons pas répondre à votre demande.";

    function handleConcernChange() {
        const selectedConcern = form.querySelector('input[name="concern"]:checked');
        if (!selectedConcern) return;

        const value = selectedConcern.value;

        if (value === 'autre-placement' || value === 'maltraitance') {
            formFieldsToDisable.classList.add('disabled');
            messageTextarea.placeholder = disabledMessage;
            messageTextarea.value = ""; // Clear any existing text
            submitButton.disabled = true;
        } else {
            formFieldsToDisable.classList.remove('disabled');
            messageTextarea.placeholder = initialPlaceholder;
            submitButton.disabled = false;
        }
    }

    concernRadios.forEach(radio => {
        radio.addEventListener('change', handleConcernChange);
    });

    // Initial check in case of pre-filled form
    handleConcernChange();
});

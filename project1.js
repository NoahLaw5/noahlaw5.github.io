document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.getElementById('contactForm');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting y default
        event.preventDefault();

        // Get the values of the form fields
        var name = document.getElementById('name').value;
        var message = document.getElementById('message').value;

        // validation
        if (name !== '' && message !== '') {
            alert('Form submitted successfully!');
            form.reset(); // Reset form fields
        } else {
            alert('Please fill in all fields.');
        }
    });

    
    var clearButton = document.getElementById('clearButton');

    // Add event listener for the clear button
    clearButton.addEventListener('click', function() {
        form.reset();
        
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.querySelector('.Header-Button-Contact-Us');
    const contactDialog = document.getElementById('contactDialog');
    const closeButton = document.querySelector('.close-button');
    const contactForm = document.getElementById('form'); // Ensure form ID is 'form'
    const result = document.getElementById('result');

    let isMobile = window.innerWidth < 1024; // Initial check for mobile

    // Function to handle form opening
    function handleContactButtonClick() {
        if (isMobile) {
            alert('The Contact Us form is only available on desktop.');
        } else {
            contactDialog.style.display = 'block'; // Show the dialog
            setTimeout(() => {
                contactDialog.classList.add('show'); // Add class for animation
            }, 10); // Slight delay to allow the display change
        }
    }

    // Detect window resize and update isMobile flag
    window.addEventListener('resize', function () {
        isMobile = window.innerWidth < 1024;
    });

    // Attach click listener to the button
    contactButton.addEventListener('click', handleContactButtonClick);

    // Close the dialog when the close button is clicked
    closeButton.addEventListener('click', function () {
        contactDialog.style.display = 'none'; // Hide the dialog
        contactDialog.classList.remove('show'); // Remove animation class
    });

    // Close the dialog when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === contactDialog) {
            contactDialog.style.display = 'none'; // Hide the dialog
            contactDialog.classList.remove('show'); // Remove animation class
        }
    });

    // Handle form submission
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        const formData = new FormData(contactForm); // Create FormData object from the form
        const object = Object.fromEntries(formData);  // Convert form data into an object
        const json = JSON.stringify(object);  // Convert the object to JSON

        result.innerHTML = "Please wait..."; // Show the "Please wait..." message

        // Use fetch to send the form data as JSON to Web3Forms API
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Indicate the body is JSON
                'Accept': 'application/json'         // Expect a JSON response
            },
            body: json  // Send the JSON data as the request body
        })
        .then(async (response) => {
            let jsonResponse = await response.json();  // Parse JSON response
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";  // Show success message
            } else {
                console.log(response);
                result.innerHTML = jsonResponse.message;  // Show error message
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";  // Show generic error message
        })
        .then(function() {
            contactForm.reset();  // Reset the form fields
            setTimeout(() => {
                result.style.display = "none";  // Hide the result message after 3 seconds
            }, 3000);
        });
    });
});

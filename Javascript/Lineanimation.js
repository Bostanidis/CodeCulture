// Example JavaScript to add class dynamically (if needed for other effects)
document.querySelectorAll('.Header-Button-Articles, .Header-Button-About-Us, .Header-Button-Contact-Us')
    .forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.color = 'lightblue'; // Change text color
            button.querySelector('::after').style.backgroundColor = 'lightblue'; // Add underline
        });
        button.addEventListener('mouseleave', () => {
            button.style.color = 'black'; // Reset text color
            button.querySelector('::after').style.backgroundColor = 'transparent'; // Remove underline
        });
    });
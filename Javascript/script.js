// Select the header using class name
const header = document.querySelector('.Header');

// Function to handle scroll events
function handleScroll() {
    if (window.scrollY === 0) {
        // At the very top, show the header
        header.classList.remove('hide');
    } else {
        // When scrolled down, hide the header
        header.classList.add('hide');
    }
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);

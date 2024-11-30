document.addEventListener("DOMContentLoaded", function() {
    // Articles button functionality
    const articlesButton = document.getElementById('Header-Button-Articles');
    if (articlesButton) {
        articlesButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default navigation
            console.log("Articles button clicked, navigating to Articles.html...");
            window.location.href = 'Articles.html'; // Navigate directly to Articles.html
        });
    }

    // About Us button functionality
    const aboutButton = document.getElementById('Header-Button-About-Us');
    if (aboutButton) {
        aboutButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default navigation
            console.log("About Us button clicked, navigating to About-Us.html...");
            window.location.href = 'index.html'; // Navigate directly to About-Us.html
        });
    }

});

    // About Us button functionality
    const aboutButton = document.getElementById('Articles-Thumbnail-Countries-Button');
    if (aboutButton) {
        aboutButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default navigation
            console.log("About Us button clicked, navigating to About-Us.html...");
            window.location.href = 'Countries.html'; // Navigate directly to About-Us.html
        });
    }

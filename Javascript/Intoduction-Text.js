function addLineBreakToH3(maxWidth) {
    // Select the <h3> element
    const h3 = document.querySelector(".Introduction-Text");
  
    if (!h3) return; // Exit if the element is not found
  
    // Save the original text in a data attribute if not already saved
    if (!h3.dataset.originalText) {
      h3.dataset.originalText = h3.textContent.trim();
    }
  
    // Get the original text content
    const originalText = h3.dataset.originalText;
  
    if (window.innerWidth <= maxWidth) {
      // Split the text into two halves
      const words = originalText.split(" ");
      const middle = Math.floor(words.length / 2);
      const firstPart = words.slice(0, middle).join(" ");
      const secondPart = words.slice(middle).join(" ");
  
      // Update the <h3> element with a line break
      h3.innerHTML = `${firstPart} <br> ${secondPart}`;
    } else {
      // Reset the text content to the original text
      h3.textContent = originalText;
    }
  }
  
  // Define the max width
  const MAX_WIDTH = 768;
  
  // Run the function on page load
  addLineBreakToH3(MAX_WIDTH);
  
  // Re-run the function when the window is resized
  window.addEventListener("resize", () => addLineBreakToH3(MAX_WIDTH));
  
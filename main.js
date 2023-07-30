// Get the container element and all the slide images
var slideshowContainer = document.querySelector('.slideshow-container');
var slides = slideshowContainer.querySelectorAll('.slide');

// Set the index of the current slide to 0
var currentSlideIndex = 0;

// Function to display the next slide
function showNextSlide() {
  // Hide the current slide
  slides[currentSlideIndex].style.display = 'none';

  // Increment the slide index
  currentSlideIndex++;

  // If we've reached the end of the slides, start over at the beginning
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  // Display the next slide
  slides[currentSlideIndex].style.display = 'block';
}

// Call the showNextSlide function every 10 seconds
setInterval(showNextSlide, 10000);


// Retrieve the JSON data from a file
fetch('motivation.json')
  .then(response => response.json())
  .then(data => {
    // Get the current date
    const today = new Date();
    // Get the index of the phrase based on the date
    const index = today.getDate() % data.length;
    // Set the text of the element with the ID 'motivation' to the phrase
    document.getElementById('motivation').textContent = data[index];
  })
  .catch(error => console.error(error));







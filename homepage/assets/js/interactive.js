
// Function to add a fade-in effect to elements
function fadeInEffect() {
    const elements = document.querySelectorAll('.image-container img');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = 1;
        element.style.transition = 'opacity 1s ease-in-out';
      }, index * 500);
    });
  }
  
  // Function to change the text color on hover
  function changeTextColorOnHover() {
    const textElements = document.querySelectorAll('.image-container p');
    textElements.forEach(text => {
      text.addEventListener('mouseover', () => {
        text.style.color = '#007bff'; // Change color on hover
      });
      text.addEventListener('mouseout', () => {
        text.style.color = ''; // Reset color
      });
    });
  }
  
  // Function to initialize interactive elements
  function initializeInteractiveElements() {
    fadeInEffect();
    changeTextColorOnHover();
  }
  
  // Wait until the DOM content is loaded before initializing interactive elements
  document.addEventListener('DOMContentLoaded', () => {
    initializeInteractiveElements();
  });
  
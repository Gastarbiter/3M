window.addEventListener("DOMContentLoaded", function() {
    var sliderItems = document.querySelectorAll(".slider-item");
    var sliderButtons = document.querySelectorAll(".slider-button");
    var currentIndex = 0;
  
    function showSliderItem(index) {
      // Hide all slider items
      sliderItems.forEach(function(item) {
        item.classList.remove("active");
      });
  
      // Show the selected slider item
      sliderItems[index].classList.add("active");
  
      // Update active slider button
      sliderButtons.forEach(function(button) {
        button.classList.remove("active");
      });
      sliderButtons[index].classList.add("active");
  
      currentIndex = index;
    }
  
    function handleSliderButtonClick(index) {
      return function() {
        showSliderItem(index);
      };
    }
  
    // Add event listeners to slider buttons
    sliderButtons.forEach(function(button, index) {
      button.addEventListener("click", handleSliderButtonClick(index));
    });
  
    // Auto-rotate the carousel every 5 seconds
    setInterval(function() {
      currentIndex = (currentIndex + 1) % sliderItems.length;
      showSliderItem(currentIndex);
    }, 5000);
  
    // Show the first slider item by default
    showSliderItem(0);
  });
  
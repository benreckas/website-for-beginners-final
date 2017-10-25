// Toggle Read More Button

( function() {
// establish const variables to find button and second paragraph in DOM by ID
const hiddenText = document.getElementById('js-hidden');
const toggleButton = document.getElementById('js-more');
    
    // sets CSS display style for element with ID of js-hidden to 'none' 
    hiddenText.style.display = 'none';
    // sets elements class name to "hidden"
    hiddenText.className = 'hidden'; 
      
    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
    
    // when button is clicked run function
    toggleButton.onclick = function toggleText() {
    // if element has class of hidden, display it, then set class name to empty
    if(hasClass(hiddenText, 'hidden') == 1) {
          hiddenText.style.display = 'block'; 
          hiddenText.className = '';
          toggleButton.innerHTML = "Read less about us"
    } else {
        hiddenText.style.display = 'none'; 
        hiddenText.className = 'hidden'; 
        toggleButton.innerHTML = "Read more about us"
    }
    return false;
    }
}());
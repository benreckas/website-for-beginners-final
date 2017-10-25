// Hamburger Menu Toggle

function menuDrop() {
// establish const variables to find button and second paragraph in DOM by ID
const hiddenText = document.getElementById('hidden');
const toggleButton = document.getElementById('menu');
	
    // sets CSS display style for element with ID of js-hidden to 'none' 
    hiddenText.style.display = 'none';
    // sets elements class name to "hidden"
    hiddenText.className = 'hidden'; 
	
    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
	
    // when button is clicked run function
		
		toggleButton.onclick = function toggleMenu() {
    // if element has class of hidden, display it, then set class name to empty
    if(hasClass(hiddenText, 'hidden') == 1) {
          hiddenText.style.display = 'block'; 
          hiddenText.className = '';
					console.log("I should be showing");
    } else {
        hiddenText.style.display = 'none'; 
        hiddenText.className = 'hidden'; 
				console.log("I'm a ghost");
    }
    return false;
    }
};
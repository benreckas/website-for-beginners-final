// Hamburger Menu Toggle

// When the hamburger icon is clicked run this function to toggle nav menu. 
function menuDrop() {
    // Create variable and assign the nav menu to the variable.
    const hiddenText = document.getElementById('hidden');
    // If the class of nav is exactly "topnav" then add the class of responsive and return function.
    if (hiddenText.className === "topnav") {
        hiddenText.className += " responsive";
    // If class name is not exactly "topnav", then make it "topnav" and return function.
    } else {
        hiddenText.className = "topnav";
    }
}
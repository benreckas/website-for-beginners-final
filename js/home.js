// Hamburger Menu Toggle

// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function menuDrop() {
    const hiddenText = document.getElementById('hidden');
    if (hiddenText.className === "topnav") {
        hiddenText.className += " responsive";
    } else {
        hiddenText.className = "topnav";
    }
}
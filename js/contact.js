// Form Submit Confirmation

// When form submit button is clicked run this fuction that take in a event.
function clicked (event) {
    // Prevent default of page reload.
    event.preventDefault();
    // Log "clicked" to verify button was clicked. 
    console.log('clicked');
    // Create varibles for DOM elements.
    const formConfirm = document.getElementById("form-confirmation");
    const formSubmit = document.getElementById("btn");
    const userName = document.getElementById("first-name").value;
    // Add inner HTML string to empty paragraph.
    formConfirm.innerHTML = "Thanks for your feedback " + userName + "!";
};
// Form Submit Confirmation

function clicked (event) {
    event.preventDefault();
    console.log('clicked');
    const formConfirm = document.getElementById("form-confirmation");
    const formSubmit = document.getElementById("btn");
    const userName = document.getElementById("first-name").value;
    formConfirm.innerHTML = "Thanks for your feedback " + userName + "!";
    console.log(userName);
};
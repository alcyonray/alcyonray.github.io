//RECIPE POP UP MODAL SECTION

//sets up the button that will open the recipe modal
var btns = document.querySelectorAll("input.modal-button");

//Defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

//get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

//When user clicks recipe button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

//<span> x closes the modal
for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

//email validation
document.getElementById('contactForm').addEventListener('submit',
    function (event) {
        //overrides default browser refresh
        event.preventDefault();

        //variables to validate each field is filled out
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        //email pattern check for all symbols, such as @ . 
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //display messages if fields are filled out or thank you
        const valMsg = document.getElementById('validateMsg');

        if (!firstName || !lastName || !phone || !message) {
            //checks if fields have been filled out
            valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>'
        } else if (!emailPattern.test(email)) {
            //checks for valid email
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email</p>';
        } else {
            //if all fields correctly filled, display thank you message
            valMsg.innerHTML = '<p style="color: green;">Thank you for submitting!</p>';
        }

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        };

        //displays user input to the console
        console.log(JSON.stringify(formData));
    }
)
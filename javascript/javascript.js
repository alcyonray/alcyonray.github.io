//const bootstrap = require("bootstrap");

//const bootstrap = require("bootstrap");

//initialize popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

//initialize toast
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))

//Function to display toast with selected options
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    //Display toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show();
}

function buyTickets() {
    displaySelectedMovieOptions();
}

//JQUERY
//Shrinks header size when the document is scrolled by 80 pixels
$(document).on("scroll", function () {
    //When the webpage is scrolled down 50px from the top
    if ($(document).scrollTop() > 50) {
        //once 50px down, nav-shrink class is added
        $("nav").addClass("nav-shrink");
        //adjust position of mobile drop menu
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //if webpage is back within 50px of top of scroll
        $("nav").removeClass("nav-shrink");
        //margin restored to original
        $("div.navbar-collapse").css("margin-top", "14px");
    }

});

//close mobile menu when a navigation link is clicked
$(document).ready(function () {
    //On click when an element contains just thenav-link class and not the dropdown-toggle and then
    //also close when an element with the class .dropdown-item (each movie link) has been clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function () {
        //collapse navbar appropriately
        $(".navbar-collapse").collapse('hide');
    })
})
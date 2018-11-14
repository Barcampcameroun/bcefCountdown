let images = [
    "assets/image/23416519_232605403941345_156817910336061440_n.jpg",
    "assets/image/23416610_375699286177390_4504247050740695040_n.jpg",
    // "assets/image/23417309_139082833328561_7979864341920874496_n.jpg",
    "assets/image/43915186_688084581573248_7078123280328305159_n.jpg",
    "assets/image/23498888_158014178131862_944504836429185024_n.jpg",
];
$(document).ready(function () {
    $('#divID').css("background-image", "url(/myimage.jpg)");
    changeImage();
    setInterval(10000, changeImage);
});

function changeImage() {
    var image = images[Math.floor(Math.random() * images.length)];
    console.log(image);
    document.getElementById("background").style.backgroundImage = 'url(' + image + ')';
    document.getElementById("background2").style.backgroundImage = 'url(' + image + ')';
}

var countDownDate = new Date("Nov 17, 2018 9:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Barcamp ist";
    }
}, 1000);

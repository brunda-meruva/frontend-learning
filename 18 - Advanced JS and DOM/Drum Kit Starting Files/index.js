// document.querySelectorAll("button"),addEventListener("click", handleClick);
// function handleClick() {
//     alert("I got clicked!");
// }
// anonymous function
// document.querySelector(".w"),addEventListener("click", function() {
//     this.alert("I got clicked");
// });

var numDrums = document.querySelectorAll(".drum").length;

for (var i=0; i<numDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var key = this.innerHTML;
        sound(key);
        pressed(key);
    });
}

for (var i=0; i<numDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("keydown", function(e) {
        var key = e.key;
        sound(key);
        pressed(key);
    });
}

function sound(key) {
    switch(key) {
        case "w": 
           var tom1 = new Audio("./sounds/tom-1.mp3");
           tom1.play();
            break;
        case "a": 
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s": 
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d": 
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j": 
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k": 
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l": 
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default: 
            console.log(key);
    }
}

function pressed(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
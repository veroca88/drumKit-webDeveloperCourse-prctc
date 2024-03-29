var drumButtons = document.querySelectorAll(".drum")

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        var buttonHtml = this.innerHTML

        makeSound(buttonHtml);
        addAnimation(buttonHtml);        
});
}

// var sound = new Audio("sounds/tom-1.mp3");
//         sound.play();
//         this.style.color = 'white';


document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    addAnimation(event.key)
})

function makeSound (key) {

    switch (key) {
        case "w":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "a":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "s":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "d":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "l":
            var snare = new Audio("sounds/tom-2.mp3");
            snare.play();
            break;
        default:
            console.log(buttonHtml);
    }
}


function addAnimation (currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

setTimeout(function() {
    activeButton.classList.remove("pressed")
}, 100);
}
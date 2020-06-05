

//play sound from screen
for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
playSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
  });

//plays sound through keyboard
  document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
  });

}

//plays sound
function playSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
default:console.log("press valid key ");
break;

  }

}

function buttonAnimation(currentKey){
  var activeKey = document.querySelector("."+currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed")
  },100);

}

//Keypress===========
for (var i=0; i<19; i++){
    document.getElementsByClassName("white")[i].addEventListener("keypress", keyPress);
}

function keyPress(event){
    alert(event.key);
}
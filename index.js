//Keypress===========
for (var i=0; i<19; i++){
    document.getElementsByClassName("white")[i].addEventListener("click", keyClick);
    document.getElementsByClassName("white")[i].addEventListener("keypress", keyPress);
}

function keyClick(){
    alert("clicked!");
}
function keyPress(event){
    alert(event.key);
}
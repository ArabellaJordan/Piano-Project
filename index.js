//Keypress===========
document.addEventListener("keypress", function(event){
    var pressedKey = event.key;
    this.e
    sound(pressedKey);
});

//click===========
for (var i=0; i<19; i++){
    document.getElementsByClassName("white")[i].addEventListener("click", function(){
        var key = this.innerHTML;
        sound(key);
    });
    document.getElementsByClassName("black")[i].addEventListener("click", function(){
        var key = this.innerHTML;
        sound(key);
    });
}

//Sound=============
function sound(key){
    switch (key){
        case "a":
            var a = new Audio("./sounds/B1.mp3");
            a.play();
            break;
        case "s":
            var a = new Audio("./sounds/C2.mp3");
            a.play();
            break;
        case "d":
            var a = new Audio("./sounds/D2.mp3");
            a.play();
            break;
        case "f":
            var a = new Audio("./sounds/E2.mp3");
            a.play();
            break;
        case "q":
            var a = new Audio("./sounds/F2.mp3");
            a.play();
            break;
        case "w":
            var a = new Audio("./sounds/G2.mp3");
            a.play();
            break;
        case "e":
            var a = new Audio("./sounds/A2.mp3");
            a.play();
            break;
        case "r":
            var a = new Audio("./sounds/B2.mp3");
            a.play();
            break;
        case "t":
            var a = new Audio("./sounds/C3.mp3");
            a.play();
            break;
        case "y":
            var a = new Audio("./sounds/D3.mp3");
            a.play();
            break;
        case "u":
            var a = new Audio("./sounds/E3.mp3");
            a.play();
            break;
        case "i":
            var a = new Audio("./sounds/F3.mp3");
            a.play();
            break;
        case "o":
            var a = new Audio("./sounds/G3.mp3");
            a.play();
            break;
        case "p":
            var a = new Audio("./sounds/A3.mp3");
            a.play();
            break;
        case "[":
            var a = new Audio("./sounds/B3.mp3");
            a.play();
            break;
        case "]":
            var a = new Audio("./sounds/C4.mp3");
            a.play();
            break;
        case "l":
            var a = new Audio("./sounds/D4.mp3");
            a.play();
            break;
        case ";":
            var a = new Audio("./sounds/E4.mp3");
            a.play();
            break;
        case "'":
            var a = new Audio("./sounds/F4.mp3");
            a.play();
            break;
        case "1":
            var a = new Audio("./sounds/Db2.mp3");
            a.play();
            break;
        case "2":
            var a = new Audio("./sounds/Eb2.mp3");
            a.play();
            break;
        case "3":
            var a = new Audio("./sounds/Gb2.mp3");
            a.play();
            break;
        case "4":
            var a = new Audio("./sounds/Ab2.mp3");
            a.play();
            break;
        case "5":
            var a = new Audio("./sounds/Bb2.mp3");
            a.play();
            break;
        case "6":
            var a = new Audio("./sounds/Db3.mp3");
            a.play();
            break;
        case "7":
            var a = new Audio("./sounds/Eb3.mp3");
            a.play();
            break;
        case "8":
            var a = new Audio("./sounds/Gb3.mp3");
            a.play();
            break;
        case "9":
            var a = new Audio("./sounds/Ab3.mp3");
            a.play();
            break;
        case "0":
            var a = new Audio("./sounds/Bb3.mp3");
            a.play();
            break;
        case "-":
            var a = new Audio("./sounds/Db4.mp3");
            a.play();
            break;
        case "=":
            var a = new Audio("./sounds/Eb4.mp3");
            a.play();
            break;
    }
}

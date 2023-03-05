var onOffCounter = 0;

document.getElementById("sun").onmouseover = function() {
    sunShine()
};

document.getElementById("blueBack").onmouseover = function() {
    wavyWaves()
};

function sunShine() {
    if (onOffCounter == 0) {
        setTimeout(() => {
            document.getElementById("sunRay").style.visibility = "visible";
        }, 200);
        setTimeout(() => {
            document.getElementById("sunWhite").style.visibility = "visible";
        }, 400);
        onOffCounter = 1;
    }
    else {
        setTimeout(() => {
            document.getElementById("sunRay").style.visibility = "hidden";
        }, 400);
        setTimeout(() => {
            document.getElementById("sunWhite").style.visibility = "hidden";
        }, 200);
        onOffCounter = 0;
    }

}

function wavyWaves() {
    for (var i = 0; i < 100; i++) {
        setTimeout(() => {
            document.getElementById("ocean").style.backgroundColor = 'darkblue';
            document.getElementById("oceanBack").style.backgroundColor = 'white';
        }, 200);
        setTimeout(() => {
            document.getElementById("ocean").style.backgroundColor = 'white';
            document.getElementById("oceanBack").style.backgroundColor = 'darkblue';
        }, 400);
}

}


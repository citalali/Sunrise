var onOffCounter = 0;
var mouseOnWater = 0;
var visibility = "visible";

document.getElementById("sun").onmouseover = function() {
    sunShine()
};
document.getElementById("sun").onclick = function() {
    sunShine()
};

//document.getElementById("blueBack").onmouseover = function() {
  //  wavyWaves()
//};

//document.getElementById("blueBack").onmouseout = function() {
   // wavesStop();
//};

function sunShine() {

    setTimeout(() => {
        document.getElementById("sunRay").style.visibility = visibility;
    }, 100);
    setTimeout(() => {
        document.getElementById("sunWhite").style.visibility = visibility;
    }, 200);
    setTimeout(() => {
        document.getElementById("sunOuter").style.visibility = visibility;
    }, 300);
    setTimeout(() => {
        document.getElementById("sunOutest").style.visibility = visibility;
    }, 400);

    if (visibility == "visible"){
        visibility = "hidden";
    }
    else {
        visibility = "visible";
    }
}



function wavesStop() {
    mouseOnWater = 0;
}

function wavyWaves() {
    mouseOnWater = 1;
   //while (mouseOnWater == 1) {
        setTimeout(() => {
            document.getElementById("ocean").style.backgroundColor = 'darkblue';
            document.getElementById("oceanBack").style.backgroundColor = 'white';
            document.getElementById("sun").style.backgroundColor = "red";
        }, 200);
        setTimeout(() => {
            document.getElementById("ocean").style.backgroundColor = 'white';
            document.getElementById("oceanBack").style.backgroundColor = 'darkblue';
            document.getElementById("sun").style.backgroundColor = "yellow";
        }, 400);
}

//}


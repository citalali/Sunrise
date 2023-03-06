var onOffCounter = 0;
var mouseOnWater = 0;
var visibility = "hidden";
const sunStates = ["sunRay", "sunWhite", "sunOuter", "sunOutest"];

document.getElementById("sun").onmouseover = function() {
    //onOffCounter = 0;
    sunShine()
};
//document.getElementById("sun").onmouseleave = function() {
  //  onOffCounter = 101;
//};
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
    var i = 0;                  
    function myLoop() {       
      setTimeout(function() {  
        document.getElementById(sunStates[i]).style.visibility = visibility;
        i++;                   
        if (i < 4) {          
          myLoop();           
        }                    
      }, 150)
    }
    if (visibility == "visible"){
        visibility = "hidden";
     }
     else {
         visibility = "visible";
     }
    var i = 0
    myLoop();     
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


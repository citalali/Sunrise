var visibility = "hidden";
const sunStates = ["sunRay", "sunWhite", "sunOuter", "sunOutest"];

document.getElementById("sun").onmouseover = function() {
    sunShine()
};
document.getElementById("sun").onclick = function() {
    sunShine()
};

function sunShine() {
    function myLoop() {       
      setTimeout(function() {  
        document.getElementById(sunStates[i]).style.visibility = visibility;
        i++;                   
        if (i < 4) {          
          myLoop();           
        }                    
      }, 100)
    }
    if (visibility == "visible"){
        visibility = "hidden";
        var i = 0;
        myLoop();
     }
     else {
         visibility = "visible";
         var i = 0
        myLoop();  
     }
}


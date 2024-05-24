function first(){
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("time");
    const demoParagraph = document.getElementById("demo");

    button.addEventListener("click", function() {
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        demoParagraph.textContent = dateTimeString;
    });
});
}

function changeIn1(){
    tap1.addEventListener("click",function(){
        document.getElementById("changeMe").innerHTML="your html content change by javascript ";
        tap1html.addEventListener("click",function(){
            document.getElementById("changeMe").innerHTML="this is writeen by html";
        })
    })
}
function changeIn2(){
    tap2On.addEventListener("click",function(){
        document.getElementById('offBulb').src="https://www.w3schools.com/js/pic_bulbon.gif";
        tap2Off.addEventListener("click",function(){
            document.getElementById('offBulb').src="https://www.w3schools.com/js/pic_bulboff.gif";
        })
    })
}
function changeIn3() {
    document.getElementById("tap3").addEventListener("click", function() {
        document.getElementById("changeCss").style.color = "red";
        document.getElementById("tap3Css").addEventListener("click", function() {
            document.getElementById("changeCss").style.color = "black";
        });
    });
}
function changeIn4() {
    document.getElementById("tap4").addEventListener("click", function() {
        document.getElementById("hide").style.display = "none";
    });

    document.getElementById("tap4Html").addEventListener("click", function() {
        document.getElementById("hide").style.display = "block"; // Change "block" to whatever display style you need
    });
}

function changeIn5(){
    document.getElementById("tap5").addEventListener("click",function(){
        document.getElementById("unhide").style.display="block";
    });
    document.getElementById("tap5Html").addEventListener("click",function(){
        document.getElementById("unhide").style.display="none";
    });
}




first();
changeIn1();
changeIn2();
changeIn3();
changeIn4();
changeIn5();
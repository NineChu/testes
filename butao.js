var vimg1 = false;
var ftime = true;
function Clico1(){
    if(!vimg1 && ftime){
        document.getElementById("oraclo1").style.display="inline";
        document.getElementById("body").style.backgroundColor="rgb(200, 30, 30)";
        document.getElementById("foraclo2").style.display="none";
        vimg1 = true;
        ftime = false
    }else if(!vimg1 && !ftime){
        document.getElementById("oraclo1").style.display="inline";
        document.getElementById("body").style.backgroundColor="rgb(200, 30, 30)";
        document.getElementById("foraclo1").innerHTML="ELE VOLTOU";
        document.getElementById("foraclo2").style.display="none";
        vimg1 = true;
    }else if(vimg1){
        document.getElementById("oraclo1").style.display="none";
        document.getElementById("body").style.backgroundColor="rgb(30, 100, 200)";
        document.getElementById("foraclo2").style.display="";
        document.getElementById("foraclo2").innerHTML="Ele saiu";
        vimg1 = false;
    }
}
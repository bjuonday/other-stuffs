function start() {
    document.body.style.pointerEvents = "none";
    document.getElementById("header1").innerHTML = "Login";
    document.getElementById("header2").innerHTML = "Register";
    document.getElementById("regform").style.display = "none";
    setTimeout(function() {
        document.body.style.pointerEvents = "all";
    }, 1750);   
}
function tile_open() {
    document.getElementById("bigtile").style.display = "flex";
    document.getElementById("bigtile").style.animation = "tileopen_disappear 3s cubic-bezier(.77,0,.18,1)";
    if (document.getElementById("header1").innerHTML == "Register") {
        setTimeout(function() {
            document.getElementById("header1").innerHTML = "Login";
            document.getElementById("header2").innerHTML = "Register";
            document.getElementById("loginform").style.display = "block";
            document.getElementById("regform").style.display = "none";
            }, 2200);
    }
    setTimeout(function() {
        document.getElementById("bigtile").style.display = "none";
    }, 3000);
    if (document.getElementById("header1").innerHTML == "Login") {
        setTimeout(function() {
        document.getElementById("header1").innerHTML = "Register";
        document.getElementById("header2").innerHTML = "Login";
        document.getElementById("loginform").style.display = "none";
        document.getElementById("regform").style.display = "block";
        }, 2200);
    }
}
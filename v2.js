<script>
var nav = false;

function openNav() {
    document.getElementById("mySidenav").style.height = "24px";
    document.getElementById("pre").style.height = "0px";
    document.getElementById("newSidenav").style.height = "0px";
    document.getElementById("newSidenav1").style.height = "0px";
    document.getElementById("newSidenav2").style.height = "0px";
    document.getElementById("newSidenav3").style.height = "0px";
    document.getElementById("newSidenav4").style.height = "0px";

    document.body.style.backgroundColor = "rgb(45,170,237)";
    document.body.style.color = "rgb(237,208,45)";
    nav = true;
}
function closeNav() {
    document.getElementById("pre").style.height = "12px";
    document.getElementById("newSidenav").style.height = "12px";
    document.getElementById("newSidenav1").style.height = "12px";
    document.getElementById("newSidenav2").style.height = "12px";
    document.getElementById("newSidenav3").style.height = "12px";
    document.getElementById("newSidenav4").style.height = "12px";

    document.body.style.backgroundColor = "rgb(237,112,45)";
    document.body.style.color = "rgb(250,250,250)";
    nav = false;
}
function musicPage() {
    document.body.style.backgroundColor = "rgb(254,247,244)";
    document.body.style.color = "rgb(0,0,0)"; 
}
function filmPage() {
    document.body.style.backgroundColor = "rgb(25,10,2)";
    document.body.style.color = "rgb(50,250,250)"; 
}

function toggleNav() {
    nav ? closeNav() : openNav();
}
</script>
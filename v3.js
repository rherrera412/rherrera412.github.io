

function openC(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    if (cityName === "about"){
        document.getElementById(cityName).style.display = "block";
        //evt.currentTarget.className += " active";
        document.getElementById('aboot').style.display = "block";
        evt.currentTarget.className += " active";
    } else if (cityName === "projects") {
        document.getElementById(cityName).style.display = "block";
        //evt.currentTarget.className += " active";
        document.getElementById('projz').style.display = "block";
        evt.currentTarget.className += " active";
    }
    else {
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    
    
}


function openT(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab

        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    
    
    
}


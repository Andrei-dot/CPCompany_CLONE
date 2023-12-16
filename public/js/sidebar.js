function openSidebar() {
    document.getElementById("sidebar").style.width = "18%";
    document.getElementById("sidebar").style.padding = "30px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.padding = "0";
    document.getElementById("main").style.marginRight = "0";
}

/*
window.addEventListener('click', function(e){   
    if (!document.getElementById('sidebar').contains(e.target)){
        closeSidebar();
    } else if (document.getElementById('open').contains(e.target)) {
        openSidebar();
    }
});*/

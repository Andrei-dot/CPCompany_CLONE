const frame = document.getElementById("searchbar");
const isSpawned = false;

var searchbar = document.createElement("search-bar");
searchbar.style.position = "absolute";
searchbar.style.right = "0%";
searchbar.style.top = "-5%";
searchbar.style.marginLeft = "auto";
searchbar.style.height = "100%";
searchbar.style.width = "30%";
searchbar.style.backgroundColor = "white";
searchbar.style.zIndex =  "3";
searchbar.style.border = "0";
searchbar.style.animation = "fadeSearchBar 1s ease-in-out"
searchbar.style.overflow = "hidden";

function spawnFrame() {
    document.getElementById("parent-searchbar").appendChild(searchbar);
    
}

function killFrame() {
    document.getElementById("parent-searchbar").removeChild(searchbar);
}

function popSearchBar() {
    if(isSpawned == false) {
        console.log("Spawned");
        spawnFrame();
    } else {
        console.log("Killed");
        killFrame();
    }
}


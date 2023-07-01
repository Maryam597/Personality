let bw = document.getElementById("bw");
let color = document.getElementById("color");
let description = document.getElementById("description")

bw.addEventListener("click", () =>{

if(getComputedStyle(description).display != "none") {
    description.style.display = "none";
}

else {
    description.style.display = "block";
}
}
)

function togg() {
if(getComputedStyle(color).display != "none") {

    description.style.display = "none" ;
}
else {
    description.style.display = "block" ;
}


};

color.onclick = togg;
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const color = document.getElementsByClassName('color');


console.log();

window.onload = defaut();

function defaut() {
    imen.querySelector(".color").classList.toggle("active");
    imen.style.width = '420px';
}


// function couleur () {
//     if (couleur.getElementsByClassName('color'))
// }

button1.addEventListener('click', ()=> {
    bw1.classList.toggle('active');
    dwayne.classList.toggle('active');
    dwayne.querySelector(".color").classList.toggle("active");
    dwayne.style.width = '420px';
    vin.style.width = '';
    imen.style.width = '';
    zita.style.width = '';
    jessica.style.width = '';
    dwayne.style.transition = "width 1s ease-in-out 0s";
});

image1.addEventListener('click', ()=> {
    bw1.classList.toggle('active');
    dwayne.classList.toggle('active');
    dwayne.querySelector(".color").classList.toggle("active");
    dwayne.style.width = '420px';
    vin.style.width = '';
    imen.style.width = '';
    zita.style.width = '';
    jessica.style.width = '';
    dwayne.style.transition = "width 1s ease-in-out 0s";
});




button2.addEventListener('click', ()=> {
    bw2.classList.toggle('active');
    dwayne.style.width = '';
    imen.style.width = '';
    zita.style.width = '';
    jessica.style.width = '';
    vin.classList.toggle('active');
    vin.querySelector(".color").classList.toggle("active");
    vin.style.width = '420px';
    vin.style.transition = "width 1s ease-in-out 0s";
});

image2.addEventListener('click', ()=> {
    bw2.classList.toggle('active');
    dwayne.style.width = '';
    imen.style.width = '';
    zita.style.width = '';
    jessica.style.width = '';
    vin.classList.toggle('active');
    vin.querySelector(".color").classList.toggle("active");
    vin.style.width = '420px';
    vin.style.transition = "width 1s ease-in-out 0s";
});


button3.addEventListener('click', ()=> {
    bw3.classList.toggle('active');
    dwayne.style.width = '';
    vin.style.width = '';
    zita.style.width = '';
    jessica.style.width = '';
    imen.classList.toggle('active');
    imen.querySelector(".color").classList.toggle("active");
    imen.style.width = '420px';
    imen.style.transition = "width 1s ease-in-out 0s";

});

image3.addEventListener('click', ()=> {
    bw3.classList.toggle('active');
    vin.style.width = '';
    dwayne.style.width = '';
    zita.style.width = '';
    jessica.style.width = '';
    imen.classList.toggle('active');
    imen.querySelector(".color").classList.toggle("active");
    imen.style.width = '420px';
    imen.style.transition = "width 1s ease-in-out 0s";
});


button4.addEventListener('click', ()=> {
    bw4.classList.toggle('active');
    vin.style.width = '';
    dwayne.style.width = '';
    imen.style.width = '';
    zita.style.width = '';
    jessica.classList.toggle('active');
    jessica.querySelector(".color").classList.toggle("active");
    jessica.style.width = '420px';
    jessica.style.transition = "width 1s ease-in-out 0s";    
});

image4.addEventListener('click', ()=> {
    bw4.classList.toggle('active');
    vin.style.width = '';
    dwayne.style.width = '';
    imen.style.width = '';
    zita.style.width = '';
    jessica.classList.toggle('active');
    jessica.querySelector(".color").classList.toggle("active");
    jessica.style.width = '420px';
    jessica.style.transition = "width 1s ease-in-out 0s";
});


button5.addEventListener('click', ()=> {
    bw5.classList.toggle('active');
    zita.classList.toggle('active');
    zita.querySelector(".color").classList.toggle("active");
    zita.style.width = '420px';
    vin.style.width = '';
    dwayne.style.width = '';
    imen.style.width = '';
    jessica.style.width = '';
    zita.style.transition = "width 1s ease-in-out 0s";
});

image5.addEventListener('click', ()=> {
    bw5.classList.toggle('active');
    zita.classList.toggle('active');
    zita.querySelector(".color").classList.toggle("active");
    zita.style.width = '420px';
    vin.style.width = '';
    dwayne.style.width = '';
    imen.style.width = '';
    jessica.style.width = '';
    zita.style.transition = "width 1s ease-in-out 0s";
});
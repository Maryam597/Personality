const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');

const description1 = document.getElementById('description1');
const bw1 = document.getElementById('bw1');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const dwayne = document.getElementById("dwayne");
const color = document.getElementsByClassName('color')

console.log();

button1.addEventListener('click', ()=> {
    bw1.classList.toggle('active');
    dwayne.classList.toggle('active');
    dwayne.querySelector(".color").classList.toggle("active");
    dwayne.style.width = '280px';
    vin.style.width = '';
    imen.style.width = '';
    zita.style.width = '';
    jessica.style.width = '';
});

image1.addEventListener('click', ()=> {
    bw1.classList.toggle('active');
    dwayne.classList.toggle('active');
    dwayne.querySelector(".color").classList.toggle("active");
    dwayne.style.width = '280px';
    vin.style.width = '';
    imen.style.width = '';
    zita.style.width = '';
    jessica.style.width = '';

});







button2.addEventListener('click', ()=> {
    bw2.classList.toggle('active');
    dwayne.style.width = '';
    imen.style.width = '';
    zita.style.width = '';
    jessica.style.width = '';
    vin.classList.toggle('active');
    vin.querySelector(".color").classList.toggle("active");
    vin.style.width = '280px';
});

image2.addEventListener('click', ()=> {
    bw2.classList.toggle('active');
    dwayne.style.width = '';
    imen.style.width = '';
    zita.style.width = '';
    jessica.style.width = '';
    vin.classList.toggle('active');
    vin.querySelector(".color").classList.toggle("active");
    vin.style.width = '280px';
});






button3.addEventListener('click', ()=> {
    bw3.classList.toggle('active');
    dwayne.style.width = '';
    vin.style.width = '';
    zita.style.width = '';
    jessica.style.width = '';
    imen.classList.toggle('active');
    imen.querySelector(".color").classList.toggle("active");
    imen.style.width = '280px';
});

image3.addEventListener('click', ()=> {
    bw3.classList.toggle('active');
    vin.style.width = '';
    dwayne.style.width = '';
    zita.style.width = '';
    jessica.style.width = '';
    imen.classList.toggle('active');
    imen.querySelector(".color").classList.toggle("active");
    imen.style.width = '280px';
});






button4.addEventListener('click', ()=> {
    bw4.classList.toggle('active');
    vin.style.width = '';
    dwayne.style.width = '';
    imen.style.width = '';
    zita.style.width = '';
    jessica.classList.toggle('active');
    jessica.querySelector(".color").classList.toggle("active");
    jessica.style.width = '280px';
    
});

image4.addEventListener('click', ()=> {
    bw4.classList.toggle('active');
    vin.style.width = '';
    dwayne.style.width = '';
    imen.style.width = '';
    zita.style.width = '';
    jessica.classList.toggle('active');
    jessica.querySelector(".color").classList.toggle("active");
    jessica.style.width = '280px';
});


button5.addEventListener('click', ()=> {
    bw5.classList.toggle('active');
    zita.classList.toggle('active');
    zita.querySelector(".color").classList.toggle("active");
    zita.style.width = '280px';
    vin.style.width = '';
    dwayne.style.width = '';
    imen.style.width = '';
    jessica.style.width = '';
});

image5.addEventListener('click', ()=> {
    bw5.classList.toggle('active');
    zita.classList.toggle('active');
    zita.querySelector(".color").classList.toggle("active");
    zita.style.width = '280px';
    vin.style.width = '';
    dwayne.style.width = '';
    imen.style.width = '';
    jessica.style.width = '';
});
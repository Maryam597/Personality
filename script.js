const button = document.getElementById('button');
const description = document.getElementsByClassName('description');
const bw1 = document.getElementById('bw1');
const color = document.getElementsByClassName('color');
const bw = document.getElementsByClassName('bw')

console.log();


button.addEventListener('click', ()=> {
    bw1.classList.toggle('active');


});

bw.addEventListener('click', ()=> {
    bw1.classList.toggle('active');

})


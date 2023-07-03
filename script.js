// const button1 = document.querySelector('button1');
// const description = document.querySelector('#description');

// button1.addEventListener('click', ()=>{   //fonction fléchée 
//     if(description.style.display == 'block'){
//     description.style.display = 'none';
// }
// else {
//     description.style.display = 'block';
// }
// });


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

});
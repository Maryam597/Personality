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
const bw = document.getElementsByClassName('bw');
const color = document.getElementsByClassName('color');

console.log();


button.addEventListener('click', ()=> {
    button.classList.toggle('active');
    // description.classList.toggle('active');
    // color.classList.add('color');
    bw.classList.toggle('bw');



});





const button1 = document.querySelector('button1');
const description = document.querySelector('#description');

button1.addEventListener('click', ()=>{   //fonction fléchée 
    if(description.style.display == 'block'){
    description.style.display = 'none';
}
else {
    description.style.display = 'block';
}
});
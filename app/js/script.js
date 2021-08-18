const toggleBar = document.querySelector('.toggle');
const body = document.querySelector('body');

toggleBar.addEventListener('click', function(){
    toggleBar.classList.toggle('active');
    body.classList.toggle('night');
    
})
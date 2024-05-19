let input = document.querySelector('.input');
let icon = document.querySelector('.icon');
let eye = document.querySelector('.eye');

icon.addEventListener('click' ,() => {
    //alert('ok')
    input.type = "text";
    eye.style.display = "none";
    icon.style.display = "block";
});
eye.addEventListener('click',() => {
    //alert('ok')
    input.type = "password";
    icon.style.display = "none";
    eye.style.display = "block";
})
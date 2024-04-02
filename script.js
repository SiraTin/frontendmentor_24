let text_hide = document.querySelectorAll('.text_hide');
let contain_heading = document.querySelectorAll('.contain_heading');
let plus = document.querySelectorAll('.fa-circle-plus');
let minus = document.querySelectorAll('.fa-circle-minus');

for(let i = 0; i<contain_heading.length; i++){
    contain_heading[i].addEventListener("click", showText);
    function showText(){
        text_hide[i].classList.toggle('show');
        plus[i].classList.toggle('hide');
        minus[i].classList.toggle('show');
    }
}

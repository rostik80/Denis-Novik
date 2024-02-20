let menu = document.querySelector('.menu');
let container__media = document.querySelector('.container__media')

let l1 = document.querySelector('.l1');
let l2 = document.querySelector('.l2');
let l3 = document.querySelector('.l3');

let flag = false;

menu.addEventListener("mousedown", function (event) { 
    if (flag == false) {
        flag = true
        l1.style.transform="rotate(45deg)"
        l2.style.display="none"
        l3.style.transform="rotate(-45deg)"
        l3.style.marginTop="-3px"
        container__media.style.top="0"
        menu.style.justifyContent="center"
    } else if (flag == true) {
        flag = false
        l1.style.transform="rotate(0deg)"
        l2.style.display="flex"
        l3.style.transform="rotate(0deg)"
        container__media.style.top="-150%"
        l3.style.marginTop="4px"
    } 
});
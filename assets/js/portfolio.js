let html = document.querySelector('html');
let body = document.querySelector('body');

let checkbox1 = document.querySelector('#darkModeNav');
let checkbox2 = document.querySelector('#darkModeContainer');
let checkbox3 = document.querySelector('#darkModeMain');

document.addEventListener('click', e => {
    const el = e.target;

    if(el.classList.contains('btnCheck')){
        checkAll()
    }
    if(el.classList.contains('buttonDarkMode')){
        checkAll()
    }
    if(el.classList.contains("buttonDarkMode")){
        mudarBG()
    }
    if(el.classList.contains('btnCheck')){
        mudarBG()
    }

})

function checkAll(){
    checkbox1.checked = !checkbox1.checked;
    checkbox2.checked = !checkbox2.checked;
    checkbox3.checked = !checkbox3.checked;
}
function mudarBG() {
    if(checkbox2.checked){
        html.style.backgroundColor  = "var(--bg-primery-light)"
        body.style.backgroundColor  = "var(--bg-primery-light)"
    }
    if (!checkbox2.checked){
        html.style.backgroundColor  = "var(--bg-primery)"
        body.style.backgroundColor  = "var(--bg-primery)"
    }
}


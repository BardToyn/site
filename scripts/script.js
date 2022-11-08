//modal share

let openModal = document.getElementById('OpenShare');
let modalWrap = document.getElementById('wrapperModal');
let modal = document.getElementById('shareModal');
let closeModal = document.getElementById('closeShare');

openModal.addEventListener('click', function () {
    modalWrap.style.display="flex";
    modal.classList.add('b-show');
})

closeModal.addEventListener('click', function () {
    modalWrap.style.display="none";
})

//copy button

function copyBtn() {
    let copyText = document.getElementById("shareInput");
    copyText.select();
    document.execCommand("copy");
}

//burger menu

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function scrollTo(anchor) {
    element = document.getElementById(anchor);
    element.scrollIntoView();
}
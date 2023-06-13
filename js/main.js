const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-button');
const navBtnImg= document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if(nav.classList.toggle('open')){
        navBtnImg.src = "./img/servises/NAV CLOSE.svg";
    } else {
        navBtnImg.src = "./img/servises/NAV.svg";
    }
}
AOS.init({
    disable: "mobile",
    once: true
});
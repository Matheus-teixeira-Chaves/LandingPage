const btn = document.querySelector('.btnDark');
const container = document.querySelector('.darkMode');

function darkMode (x) {
    x.classList.toggle('active');
    container.classList.toggle('active')
}
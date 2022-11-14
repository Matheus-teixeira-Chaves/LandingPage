const btn = document.querySelector('.btnDark');
const container = document.querySelector('.darkMode');
let darkMenu = true;
let controladorIdNav = true;
let controladorIdHeader = true;

function darkMode (x) {
    x.classList.toggle('active');
    container.classList.toggle('active');

    idMenu();
    idNav();
}

function idMenu () {
    let menu = document.getElementById('menu');

    if (darkMenu) {
        menu.classList.remove("darkModeLista");
        menu.classList.add("lightModeLista");
        darkMenu = false;
        console.log("ativo")
    } else {
        menu.classList.remove("lightModeLista");
        menu.classList.add("darkModeLista");
        darkMenu = true;
        console.log("desativo")
    }
}

function idNav () {
    let nav = document.getElementById('nav');

    if (controladorIdNav) {
        nav.classList.remove("darkModeLista");
        nav.classList.add("lightModeLista");
        controladorIdNav = false;
        console.log("ativo")
    } else {
        nav.classList.remove("lightModeLista");
        nav.classList.add("darkModeLista");
        controladorIdNav = true;
        console.log("desativo")
    }
}

function idHeader () {
    let header = document.getElementById('head');

    if (controladorIdNav) {
        header.classList.remove("darkModeLista");
        header.classList.add("lightModeLista");
        controladorIdHeader = false;
        console.log("ativo")
    } else {
        header.classList.remove("lightModeLista");
        header.classList.add("darkModeLista");
        controladorIdHeader = true;
        console.log("desativo")
    }
}
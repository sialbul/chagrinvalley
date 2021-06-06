//navbar
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');

    const icon = this.querySelector('i');

    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }

});

/*animation*/
AOS.init();

//About us section

let header = document.getElementById("headerAboutUs");
let parargaf = document.getElementById("parargafAboutUs");
let image = document.getElementById('aboutUsInfoPhotos');


function changeImage1() {
    header.innerHTML = "A-Your Kids is Our Future ";
    parargaf.innerHTML = "Cleveries envisions a diverse community in which kids are respected and heard by a collaborative support system of organized and trained adults, who are teachers and friends at the same time and help kids realize their potential."
    image.src = "./images/schoolage.jpg";
}

function changeImage2() {
    header.innerHTML = "1-Your Kids is Our Future ";
    parargaf.innerHTML = "1-Cleveries envisions a diverse community in which kids are respected and heard by a collaborative support system of organized and trained adults, who are teachers and friends at the same time and help kids realize their potential."
    image.src = "./images/schoolage2.jpg";
}

function changeImage3() {
    header.innerHTML = "2-Your Kids is Our Future ";
    parargaf.innerHTML = "2-Cleveries envisions a diverse community in which kids are respected and heard by a collaborative support system of organized and trained adults, who are teachers and friends at the same time and help kids realize their potential."
    image.src = "./images/schoolage3.jpg";
}

function changeImage4() {
    header.innerHTML = "3-Your Kids is Our Future ";
    parargaf.innerHTML = "3-Cleveries envisions a diverse community in which kids are respected and heard by a collaborative support system of organized and trained adults, who are teachers and friends at the same time and help kids realize their potential."
    image.src = "./images/toddler.jpg";
}
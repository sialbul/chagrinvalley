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




//getting info
class MoreAboutUs {
    async getData() {
        try {
            let result = await fetch('data.json');
            let data = await result.json();

            let moreAboutUsAll = data.aboutUsHeaders;
            moreAboutUsAll = moreAboutUsAll.map(aboutUsHeader => {
                const { id, img, header, exp } = aboutUsHeader;
                return { id, img, header, exp }
            })
            return moreAboutUsAll
        } catch (error) {
            console.log(error);
        }
    }
}


function changeImage() {
    const viewAboutUs = `
    <div class="aboutUsInfoParargaf">
    <h2>${aboutUsHeader.exp}</h2>

    <p>Cleveries envisions a diverse community in which kids are respected and heard by a collaborative support system of organized and trained adults, who are teachers and friends at the same time and help kids realize their potential.</p>
    <button class="learnMoreButton2">LEARN MORE</button>
</div>
<div class="aboutUsInfoPicture">
    <img id="aboutUsInfoPhotos" src="./images/schoolage.jpg">
</div>`
    document.getElementById("aboutUsInfo").innerText = viewAboutUs;

};
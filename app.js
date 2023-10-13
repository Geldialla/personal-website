let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

let sideMenu = document.getElementById("side-menu");

const msg = document.getElementById("msg");
let submit = document.getElementsByClassName("submit");

// -------------Icon menu---------------

function openMenu() {
    sideMenu.style.right = "0";
}
function closeMenu() {
    sideMenu.style.right = "-200px";
}

// ------------------About me------------------ 

function openTab() {
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener("click", function (event) {

            for (let j = 0; j < tabLinks.length; j++) {
                tabLinks[j].classList.remove("active-link");
                tabContents[j].classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");

            let tabIndex = Array.from(tabLinks).indexOf(event.currentTarget);

            tabContents[tabIndex].classList.add("active-tab");
        })
    }
};

// -----------------Contact Form-------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbwYlDwU89gBpWDPqLTkwe9I8UN5LJhNCodtnn9nX9VoUqi-2So_JQaS6-tRnSMudpid9w/exec'
const form = document.forms['submit-to-google-sheet']


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML =  `You Submit Is Sent Successfully`
            setTimeout(() => {
                msg.innerHTML = "";
            },5000)
            form.reset();
        })
        .catch(error => {
            msg.innerHTML =  `You Submit Failed`
            msg.style.color = "red"
            setTimeout(() => {
                msg.innerHTML = "";
            },5000)
            form.reset();
        });
})
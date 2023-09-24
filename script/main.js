'use strict';
import '../sass/main.scss';

// ? : Menu qui se ferme après le clic !

const closeNavigation = function ()
{
    document.getElementById('navi-toggle').checked = false;
}

const navigationLinks = document.querySelectorAll('.navigation__link');
console.log(navigationLinks);
for (let i = 0; i < navigationLinks.length; i++)
{
    navigationLinks[i].addEventListener('click', closeNavigation);

}
// ? WIP : PDF Modal Iframe - Orientation
const modal = document.querySelector('.offers__modal');
const overlay = document.getElementById('overlay');
const btnCloseModal = document.querySelector('.offers__modal__close');
// const btnOpenModal = document.querySelectorAll('.offers__item__btn');
const btnOpenModalOrientation = document.getElementById('offersOrientation');
const btnOpenModalChangement = document.getElementById('offersChangement');

const closeModal = function ()
{
    modal.classList.add('u_hidden');
    overlay.classList.add('u_hidden');

    const toRemove = document.querySelector('.modal__iframe');

    toRemove.parentNode.removeChild(toRemove);

}

let modalContent;
const openModalOrientation = function ()
{
    modal.classList.remove('u_hidden');
    overlay.classList.remove('u_hidden');
    modalContent = `<iframe src="pdf/Brochure_Orientation.pdf" class="modal__iframe"></iframe>`;
    console.log(modalContent);
    modal.insertAdjacentHTML('beforeend', modalContent);

}

const openModalChangement = function ()
{
    modal.classList.remove('u_hidden');
    overlay.classList.remove('u_hidden');
    const modalContent = `<iframe src="pdf/Brochure_Changement.pdf" class="modal__iframe"></iframe>`;
    modal.insertAdjacentHTML('beforeend', modalContent);
}

btnOpenModalOrientation.addEventListener('click', openModalOrientation);
btnOpenModalChangement.addEventListener('click', openModalChangement);




btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);



// TODO : Affichage de l'icone du menu onScroll


// ? Cookie Popup
let popUp = document.getElementById("cookiePopup");
//When user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () =>
{
    //Create date object
    let d = new Date();
    //Increment the current time by 1 minute (cookie will expire after 1 minute)
    d.setMinutes(2 + d.getMinutes());
    //Create Cookie withname = myCookieName, value = thisIsMyCookie and expiry time=1 minute
    document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
    //Hide the popup
    popUp.classList.add("cookie-popup--hide");
    popUp.classList.remove("cookie-popup__show");
});
//Check if cookie is already present
const checkCookie = () =>
{
    //Read the cookie and split on "="
    let input = document.cookie.split("=");
    //Check for our cookie
    if (input[0] == "myCookieName")
    {
        //Hide the popup
        popUp.classList.add("cookie-popup--hide");
        popUp.classList.remove("cookie-popup__show");
    } else
    {
        //Show the popup
        popUp.classList.add("cookie-popup__show");
        popUp.classList.remove("cookie-popup--hide");
    }
};
//Check if cookie exists when page loads
window.onload = () =>
{
    setTimeout(() =>
    {
        checkCookie();
    }, 2000);
};

const cookiePopupText = document.getElementById("cookiePopupText");
const paragraph = `Notre site web utilise des cookies essentiels à son fonctionnement. Sans eux, nous ne pouvons pas répondre à vos demandes ou fournir les services nécessaires.<br/>
Avant de continuer à utiliser notre site web, vous devez approuver et accepter notre
<a href="politique-confidentialite.html " target="_blank">politique de confidentialité</a>.
`;
cookiePopupText.insertAdjacentHTML("afterbegin", paragraph);


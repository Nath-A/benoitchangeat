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
// TODO : PDF slider !


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

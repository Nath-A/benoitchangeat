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

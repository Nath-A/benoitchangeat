(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const main = "";
const closeNavigation = function() {
  document.getElementById("navi-toggle").checked = false;
};
const navigationLinks = document.querySelectorAll(".navigation__link");
console.log(navigationLinks);
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", closeNavigation);
}
const modal = document.querySelector(".offers__modal");
const overlay = document.getElementById("overlay");
const btnCloseModal = document.querySelector(".offers__modal__close");
const btnOpenModalOrientation = document.getElementById("offersOrientation");
const btnOpenModalChangement = document.getElementById("offersChangement");
const closeModal = function() {
  modal.classList.add("u_hidden");
  overlay.classList.add("u_hidden");
  const toRemove = document.querySelector(".modal__iframe");
  toRemove.parentNode.removeChild(toRemove);
};
let modalContent;
const openModalOrientation = function() {
  modal.classList.remove("u_hidden");
  overlay.classList.remove("u_hidden");
  modalContent = `<iframe src="pdf/Brochure_Orientation.pdf" class="modal__iframe"></iframe>`;
  console.log(modalContent);
  modal.insertAdjacentHTML("beforeend", modalContent);
};
const openModalChangement = function() {
  modal.classList.remove("u_hidden");
  overlay.classList.remove("u_hidden");
  const modalContent2 = `<iframe src="pdf/Brochure_Changement.pdf" class="modal__iframe"></iframe>`;
  modal.insertAdjacentHTML("beforeend", modalContent2);
};
btnOpenModalOrientation.addEventListener("click", openModalOrientation);
btnOpenModalChangement.addEventListener("click", openModalChangement);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
let popUp = document.getElementById("cookiePopup");
document.getElementById("acceptCookie").addEventListener("click", () => {
  let d = /* @__PURE__ */ new Date();
  d.setMinutes(2 + d.getMinutes());
  document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
  popUp.classList.add("cookie-popup--hide");
  popUp.classList.remove("cookie-popup__show");
});
const checkCookie = () => {
  let input = document.cookie.split("=");
  if (input[0] == "myCookieName") {
    popUp.classList.add("cookie-popup--hide");
    popUp.classList.remove("cookie-popup__show");
  } else {
    popUp.classList.add("cookie-popup__show");
    popUp.classList.remove("cookie-popup--hide");
  }
};
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2e3);
};
const cookiePopupText = document.getElementById("cookiePopupText");
const paragraph = `Notre site web utilise des cookies essentiels à son fonctionnement. Sans eux, nous ne pouvons pas répondre à vos demandes ou fournir les services nécessaires.<br/>
Avant de continuer à utiliser notre site web, vous devez approuver et accepter notre
<a href="politique-confidentialite.html " target="_blank">politique de confidentialité</a>.
`;
cookiePopupText.insertAdjacentHTML("afterbegin", paragraph);

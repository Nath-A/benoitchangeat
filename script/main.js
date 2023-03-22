import '../sass/main.scss';

//JS hack to resolve bad import from vite
import testImg from '../img/01_header-fabio-comparelli-uq2E2V4LhCY-unsplash.jpg';
document.querySelector('header__background-image').style.backgroundImage = `url(${testImg})`;


// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import loadContent from './modules/load-content';
import prizePreload from './modules/prize-preload';
// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
loadContent();
prizePreload();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

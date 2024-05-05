import grapesjs from 'grapesjs';
import loadBlocks from './block';
import loadComponents from './components';
import {
  hNavbarRef
} from './consts';

export default grapesjs.plugins.add('gjs-navbar', (editor, opts = {}) => {
    let options = {
    blocks: [hNavbarRef],
    defaultStyle: 1,
    navbarClsPfx: 'navbar',
    labelNavbar: 'Navbar',
    labelNavbarContainer: 'Navbar Container',
    labelMenu: 'Navbar Menu',
    labelMenuLink: 'Menu link',
    labelBurger: 'Burger',
    labelBurgerLine: 'Burger Line',
    labelNavbarBlock: 'Navbar',
    labelNavbarCategory: 'Extra',
    labelHome: 'Home',
    labelAbout: 'About',
    labelContact: 'Contact',
  };

  // Load defaults
  for (let name in options) {
    if (!(name in opts))
      opts[name] = options[name];
  }

  loadBlocks(editor, options);
  loadComponents(editor, opts);
});
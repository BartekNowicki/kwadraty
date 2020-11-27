import './sass/index.scss';
import BoardMaker from './tools/boardMaker';
import panelMaker from './tools/panelMaker';

panelMaker();
window.onload = () => {
    const board = new BoardMaker();
}



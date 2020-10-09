const panelMaker = () => {

const mainWrapper = document.querySelector('.mainWrap');
const panel = document.createElement('div');
panel.classList.add('panel');
panel.textContent = 'YOUR SCORE';
const nextSquare = document.createElement('div');
nextSquare.classList.add('nextSquare');
mainWrapper.appendChild(panel);
mainWrapper.appendChild(nextSquare);
const playAgainBtn = document.createElement('div');
playAgainBtn.classList.add('playAgainBtn');
mainWrapper.appendChild(playAgainBtn);
}

export default panelMaker;



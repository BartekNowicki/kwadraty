export default class {
  constructor() {
    this.replay = document.querySelector('.playAgainBtn');
    this.mainWrapper = document.querySelector('.mainWrap');
    this.board = document.createElement('div');
    this.panel = document.querySelector('.panel')
    this.board.classList.add('board');
    this.mainWrapper.appendChild(this.board);
    this.squares = [[],[],[],[],[]];
    this.squaresGoingOut = [
      [false, false, false, false,false],
      [false, false, false, false,false],
      [false, false, false, false,false],
      [false, false, false, false,false],
      [false, false, false, false,false]];
    this.cleanSquares = [
      [true, true, true, true,true],
      [true, true, true, true,true],
      [true, true, true, true,true],
      [true, true, true, true,true],
      [true, true, true, true,true]];  
    this.score = 0;
    this.squareColors = ['darkblue', 'darkred', 'yellow','black','green'];     
    // this.squareColors = ['darkblue', 'darkblue', 'darkblue','darkblue','darkblue'];     
    this.nextColor = this.pickColor();
    this.nextColorSquare = document.querySelector('.nextSquare');
    this.gameOver = false;
    this.initSquares();
  }

  resetAll = () => {
    location.reload(); 
  }

  markBuddiesToRemove = () => {
    for (let row=0; row<4; row++) {
      for (let column=0; column<5; column++) {
          if (this.squaresGoingOut[row][column] === true) {
              let color = this.getColor(this.squares[row][column]);
              if (this.getColor(this.squares[row+1][column]) === color) {
                 this.squaresGoingOut[row+1][column] = true;
                 console.log('my lower row buddy goes out too!');
              }
          }
      }
    }
    for (let row=1; row<5; row++) {
      for (let column=0; column<5; column++) {
          if (this.squaresGoingOut[row][column] === true) {
              let color = this.getColor(this.squares[row][column]);
              if (this.getColor(this.squares[row-1][column]) === color) {
                 this.squaresGoingOut[row-1][column] = true;
                 console.log('my higher row buddy goes out too!');
              }
          }
      }
    }
    for (let row=0; row<5; row++) {
      for (let column=0; column<4; column++) {
          if (this.squaresGoingOut[row][column] === true) {
              let color = this.getColor(this.squares[row][column]);
              if (this.getColor(this.squares[row][column+1]) === color) {
                 this.squaresGoingOut[row][column+1] = true;
                 console.log('my right hand side column buddy goes out too!');
              }
          }
      }
    }

    for (let row=0; row<5; row++) {
      for (let column=1; column<5; column++) {
          if (this.squaresGoingOut[row][column] === true) {
              let color = this.getColor(this.squares[row][column]);
              if (this.getColor(this.squares[row][column-1]) === color) {
                 this.squaresGoingOut[row][column-1] = true;
                 console.log('my left hand side column buddy goes out too!');
              }
          }
      }
    }
  }


  markTrios = (row,column, direction) => {
    // console.log('direction: ', direction);
    if (direction === 'horizontally') {
      // console.log(`removing squares: row${row} c${column} c${column+1} c${column+2}`);
      this.squaresGoingOut[row][column] = true;
      this.squaresGoingOut[row][column+1] = true;
      this.squaresGoingOut[row][column+2] = true;
      // console.log(this.squaresGoingOut);
    } else {
      // console.log(`removing squares: column${column} r${row} r${row+1} r${row+2}`);
      this.squaresGoingOut[row][column] = true;
      this.squaresGoingOut[row+1][column] = true;
      this.squaresGoingOut[row+2][column] = true;
    }
  };

  checkIfGameOver = () => {
    if(this.findAvailableSquare([0,1,2,3,4])[0] === 9) return true
    return false
  };


  endGame = () => {
    if (this.checkIfGameOver()){
      this.gameOver = true;
      this.panel.style.backgroundColor = 'red';
      this.panel.textContent = `FINAL SCORE: ${this.score}`;
    }     
  }


  pickColor = () => this.squareColors[Math.floor(Math.random()*this.squareColors.length)];


  getColor = (element) => window.getComputedStyle(element).getPropertyValue('background-color');
  

  areSameColor = (element1, element2, element3) => {
    // console.log(this.getColor(element1), this.getColor(element2));
    if (this.getColor(element1) === 'rgba(0, 0, 0, 0)') return false
    if (this.getColor(element2) === 'rgba(0, 0, 0, 0)') return false
    if (this.getColor(element3) === 'rgba(0, 0, 0, 0)') return false
    return this.getColor(element1) === this.getColor(element2) && this.getColor(element2) === this.getColor(element3);
  };


  tallyAndClear = () => {
    for (let i=0; i<5; i++)
        for (let j=0; j<5; j++){
            if (this.squaresGoingOut[i][j] === true){
            this.score++;
            this.squaresGoingOut[i][j] = false;
            this.cleanSquares[i][j] = true;
            let removedColor = this.getColor(this.squares[i][j]);
            this.emptySquare(this.squares[i][j], removedColor);            
            }
        }
        this.panel.textContent = `${this.score}`;
        // console.log('your score: ', this.score);
        if(this.checkIfGameOver()) {this.endGame()};
  };  


  checkSquaresRemoveAndScore = () =>{
    for (let row=0; row<5; row++) {
      for (let i=0; i<3; i++) {
        if(this.areSameColor(this.squares[row][i], this.squares[row][i+1], this.squares[row][i+2])){ this.markTrios(row,i,'horizontally'); }       
          // console.log(this.areSameColor(this.squares[0][i], this.squares[0][i+1], this.squares[0][i+2]));
      } 
    } 
    for (let column=0; column<5; column++) {
      for (let i=0; i<3; i++) {
        if(this.areSameColor(this.squares[i][column], this.squares[i+1][column], this.squares[i+2][column])){ this.markTrios(i,column, 'vertically'); }       
          // console.log(this.areSameColor(this.squares[0][i], this.squares[0][i+1], this.squares[0][i+2]));
      } 
    } 

    this.markBuddiesToRemove();
    this.tallyAndClear();
  }; 


  displayNextColor = () => {
    // console.log('next: ', this.nextColor);
    this.nextColorSquare.style.backgroundColor = this.nextColor;
    this.nextColorSquare.textContent = '';
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]];
          return array
    }
  }


  findAvailableSquare = (randomNumbers) => {
    // console.log(randomNumbers);
    // console.log('clean squares: ', this.cleanSquares);
    for (let x=0; x<5; x++) {
      for (let y=0; y<5; y++) {
        let randomizedX = randomNumbers[x];
        let randomizedY = randomNumbers[y];
        if (this.cleanSquares[randomizedX][randomizedY] === true) return [randomizedX,randomizedY];
      }
    } 
    return [9,9]; //9 is code for no available squares found anymore
  }; 


  ComputerAddMoreSquares = () => {
    if(this.gameOver) return
    let nextComputerColor = this.pickColor();
    const unshuffled = [0,1,2,3,4];
    const randomNumbers = this.shuffle(unshuffled);
    // console.log('random: ', randomNumbers);
    //wait for animations to complete
    
     const availableSquare = this.findAvailableSquare(randomNumbers);
    //  console.log('available', availableSquare);
     if(availableSquare[0] === 9){
       this.endGame();
       return console.log('KONIEC!!!'); 
     }
     this.cleanSquares[availableSquare[0]][availableSquare[1]] = false;
     this.squares[availableSquare[0]][availableSquare[1]].animate(
      [
        { backgroundColor: 'transparent'},
        { backgroundColor: nextComputerColor },
      ], {
        fill: 'forwards',
        duration: 300,
        iterations: 1
      }
    );
    this.checkSquaresRemoveAndScore();
    if (this.checkIfGameOver()) this.endGame();
}


  fillSquare = (event) => {
    if (this.gameOver) return
    const row = event.target.dataset.row;
    const column = event.target.dataset.column;
    const clickedSquare = this.squares[row][column];
    // console.log(clickedSquare);    

    if (this.getColor(clickedSquare) !== 'rgba(0, 0, 0, 0)') return
    this.cleanSquares[row][column] = false;
    clickedSquare.animate(
      [
        { backgroundColor: 'transparent'},
        { backgroundColor: this.nextColor},
      ], {
        fill: 'forwards',
        duration: 300,
        iterations: 1
      }
    );
    // need to wait 1s for all animations to finish
    this.checkSquaresRemoveAndScore();
    this.nextColor = this.pickColor();
    this.displayNextColor();
    setTimeout(()=>{this.ComputerAddMoreSquares();},700);    
  }
  

  emptySquare = (element, removedColor) => {
    element.animate(
      [
        { backgroundColor: removedColor},
        { backgroundColor: 'transparent'},
        { backgroundColor: removedColor},
        { backgroundColor: 'transparent'},
        { backgroundColor: removedColor},
        { backgroundColor: 'transparent'},
        { backgroundColor: removedColor},
        { backgroundColor: 'transparent'},
        { backgroundColor: removedColor},
        { backgroundColor: 'transparent'},
        { backgroundColor: removedColor},
        { backgroundColor: 'transparent'},
        { backgroundColor: removedColor},
        { backgroundColor: 'transparent'},
        { backgroundColor: removedColor},
        { backgroundColor: 'transparent'},
      ], {
        fill: 'forwards',
        duration: 500,
        iterations: 1
      }
    );
  }


  initSquares = () => {
   
    for (let row = 0; row<5; row++) {
      for (let column = 0; column<5; column++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.setAttribute('data-row', `${row}`);
      square.setAttribute('data-column', `${column}`);
      square.addEventListener('click', (e) => this.fillSquare(e));
      this.board.appendChild(square);
      // console.log(row,column);
      this.squares[row][column] = square;
      this.replay.addEventListener('click', () => this.resetAll());
    }
  }
  }
  
}

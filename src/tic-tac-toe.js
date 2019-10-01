class TicTacToe {
    constructor() {
        this.field = [[0,0,0],[0,0,0],[0,0,0]];
        this.currentPlayer = 'x';
        this.turnsCount = 0;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field [rowIndex][columnIndex] == 0 ) {
        this.turnsCount++;
        this.field [rowIndex][columnIndex] = this.currentPlayer;
        
        for(let i = 0; i < 3; i++){
            if(this.field[rowIndex][i] != this.currentPlayer) {
                break;
            }    
            if(i == 2){
                this.winner = this.currentPlayer;
            }
        }
        for(let i = 0; i < 3; i++) {
            if(this.field[i][columnIndex] != this.currentPlayer) {
                break;
            }
            if(i == 2) {
                this.winner = this.currentPlayer;
            }
        }
        if(rowIndex == columnIndex) {
            for(let i = 0; i < 3; i++) {
                if(this.field[i][i] != this.currentPlayer) {
                    break;
                }
                if(i == 2) {
                    this.winner = this.currentPlayer;
                }
            }
        }  
        if(rowIndex + columnIndex == 2) {
            for(let i = 0; i < 3; i++) {
                if(this.field[i][2-i] != this.currentPlayer) {
                    break;
                }
                if(i == 2) {
                    this.winner = this.currentPlayer;
                }
            }
        } 
        if (this.currentPlayer == 'x') {
            this.currentPlayer = 'o';
        } else {
            this.currentPlayer = 'x';
        }
       
    }
    }

    isFinished() {
        return (this.winner != null || this.isDraw()) ? true : false;
    }

    getWinner() {
      return this.winner;
    }

    noMoreTurns() {
      return this.turnsCount == 9 ? true : false;
    }

    isDraw() {
      return (this.turnsCount == 9 && this.winner == null ) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.field[rowIndex][colIndex] == 0) {
            return null;
        } else { return this.field[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;

class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.nextPlayer = 'o';
        this.field = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        this.moves = 0;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!(this.field[rowIndex][columnIndex] == 'o' || this.field[rowIndex][columnIndex] == 'x')) {
            this.field[rowIndex][columnIndex] = this.currentPlayer;
            [this.currentPlayer, this.nextPlayer] = [this.nextPlayer, this.currentPlayer];
            this.moves++;
        }
    }

    isFinished() {
        if(this.isDraw() || this.getWinner() != null) return true;
        return false;
        // return (this.isDraw() || this.getWinner())
    }

    getWinner() {
        if ((this.field[0][0] == this.field[0][1] && this.field[0][1] == this.field[0][2]) || (this.field[1][0] == this.field[1][1] && this.field[1][1] == this.field[1][2])
            || (this.field[2][0] == this.field[2][1] && this.field[2][1] == this.field[2][2]) || (this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2])
            || (this.field[0][2] == this.field[1][1] && this.field[1][1] == this.field[2][0]) || (this.field[0][0] == this.field[1][0] && this.field[1][0] == this.field[2][0])
            || (this.field[0][1] == this.field[1][1] && this.field[1][1] == this.field[2][1]) || (this.field[0][2] == this.field[1][2] && this.field[1][2] == this.field[2][2])) {
            return this.nextPlayer;
        } else return null
    }

    noMoreTurns() {
        return this.moves == 9;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.field[rowIndex][colIndex] == 'o' || this.field[rowIndex][colIndex] == 'x') return this.field[rowIndex][colIndex]
        else return null;
    }
}

module.exports = TicTacToe;

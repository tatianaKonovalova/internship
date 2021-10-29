// Tic-Tac-Toe Checker
let board = [ [0, 0, 1], 
            [1, 0, 2], 
            [2, 1, 0]];

function checkBoard(board) {
    
    let result = null;

    function getBoardOfColumns(board) {
        let board2 = [];
        const getColumn = (arr, item) => arr.map(column => column[item]);
        const columnOne = getColumn(board, 0);
        const columnTwo = getColumn(board, 1);
        const columnThree = getColumn(board, 2);
        board2.push(columnOne, columnTwo, columnThree);
        return board2;
    }

    function checkHorizontalValues(value) {
        for (let i = 0; i < board.length; i++) {
            if(board[i].every(el => el === value)) {
                return true;
            } else {
                return false;
            }
        }
    }

    function checkVerticalValues(value) {
        const boardOfColumns = getBoardOfColumns(board);
        for (let i = 0; i < boardOfColumns.length; i++) {
            if(boardOfColumns[i].every(el => el === value)) {
                return true;
            } else {
                return false;
            }
        }
    }

    function checkDiagonalValues(value) {
        let diagonalOne = [];
        let diagonalTwo = [];
        for (let i = 0, k = board.length - 1; i < board.length, k >= 0; i++, k--) {
            diagonalOne.push(board[i][i]);
            diagonalTwo.push(board[i][k]);
        }
        let boardOfDiagonals = [];
        boardOfDiagonals.push(diagonalOne, diagonalTwo);
        for (let i = 0; i < boardOfDiagonals.length; i++) {
            if(boardOfDiagonals[i].every(el => el === value)) {
                return true;
            } else {
                return false;
            }
        }
    }

    function checkIsEmpty(board) {
        for (let i = 0; i < board.length; i++) {
            if(board[i].some(el => el === 0)) {
                return true;
            } 
        }
    }

    function getWinner() {
        if (checkHorizontalValues(1) || checkVerticalValues(1) || checkDiagonalValues(1)) {
            result = 1;
        } else if (checkHorizontalValues(2) || checkVerticalValues(2) || checkDiagonalValues(2)) {
            result = 2;
        } else if (checkIsEmpty(board)) {
            result = -1;
        } else {
            result = 0;
        }
        return result;
    }
    return getWinner();
}
console.log(checkBoard(board));
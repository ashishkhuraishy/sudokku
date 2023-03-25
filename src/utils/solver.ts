import { shuffledArray } from "./helper";

export function solveGrid(board: (number | null)[][], row: number, col: number): any {
    if (row == 8 && col == 9) {
        return true;
    }

    if (col == 9) {
        row++;
        col = 0;
    }

    if (board[row][col] !== null) {
        return solveGrid(board, row, col + 1);
    }

    var numbers = shuffledArray();
    for (let i = 0; i < 9; i++) {
        let num = numbers[i];
        if (isValid(row, col, num, board)) {
            board[row][col] = num;

            // console.log(row, col, num); 
            if (solveGrid(board, row, col + 1)) {
                return true;
            }
        }

        board[row][col] = null;
    }
    return false;
}

export function isValid(row: number, col: number, value: number, board: any[][]) {
    // check if value is present in row
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === value) {
            return false;
        }
    }

    // check if value is present in column
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === value) {
            return false;
        }
    }

    // check if value is present in box
    const rowStart = Math.floor(row / 3) * 3;
    const colStart = Math.floor(col / 3) * 3;
    for (let i = rowStart; i < rowStart + 3; i++) {
        for (let j = colStart; j < colStart + 3; j++) {
            if (board[i][j] === value) {
                return false;
            }
        }
    }

    return true;
}

import { isValid, solveGrid } from "./solver";

export function generateEmptyArray() {
    var board = Array.from(Array(9), () => Array(9).fill(null));

    // fill three columns with random numbers which
    // obeys the rules of sudokku, then solve the 
    // board so that we will have a valid sudokku
    // board in our hand which is random
    for (let row = 2; row < 8; row+=2) {
        for (let col = 0; col < 9; col++) {
            let numbers = shuffledArray();
            for (let index = 0; index < numbers.length; index++) {
                const value = numbers[index];
                if (isValid(row, col, value, board)) {
                    board[row][col] = value;
                    break;
                }
            }
        }
        
        // in some cases if the row is not valid or incomplete
        // the that means we can't find valid solution for this
        // board, so update the row to a new list
        var values = new Set(board[row])
        if (values.has(null)) {
            board[row] = Array(9).fill(null);
            row = row - 2;
        }
    } 

    solveGrid(board, 0, 0);
    
    var min = 20, max = 40;
    var clueCount = Math.floor(Math.random() * (max - min + 1) + min)

    var clueList = shuffle(Array.from({length: 81}, (_, i) => i <= clueCount))
    for (let i = 0; i < clueList.length; i++) {
        const isVisible = clueList[i];
        if (isVisible) continue;

        let row = Math.floor(i / 9);
        let col = i % 9;
        board[row][col] = null;
    }


    return board;
}


export function shuffledArray() {
    var data = Array.from({length: 9}, (_, i) => i + 1);
    return shuffle(data); 
}

function shuffle(data: any[]) {
    return data.sort(() => Math.random() - 0.5);
}
export function generateEmptyArray() {
    // return Array.from(Array(9), () => Array(9).fill(null));

    return [
        [5, 3, null, null, 7, null, null, null, null],
        [6, null, null, 1, 9, 5, null, null, null],
        [null, 9, 8, null, null, null, null, 6, null],
        [8, null, null, null, 6, null, null, null, 3],
        [4, null, null, 8, null, 3, null, null, 1],
        [7, null, null, null, 2, null, null, null, 6],
        [null, 6, null, null, null, null, 2, 8, null],
        [null, null, null, 4, 1, 9, null, null, 5],
        [null, null, null, null, 8, null, null, 7, 9],
    ];
}


export function shuffledArray() {
    var data = Array.from({length: 9}, (_, i) => i + 1);
    return data.sort(() => Math.random() - 0.5)
}
// check if any number is repeating in a row
export const validateBoard = (numbers: any[][]) => {
    const invalidRowColPairs: string[] = [];
    
    // finding invalid rows
    numbers.map((row, index) => {
        // remove null from row
        const filteredRow: number[] = row.filter((num) => num !== null);
        const set = new Set(filteredRow);
        if(set.size == filteredRow.length){
            return;
        }
        
        for (let i = 0; i < 9; i++) {
            invalidRowColPairs.push(`${index},${i}`);
        }

        return;
    });

    // find invalid columns
    for (let index = 0; index < 9; index++) {
        const column = numbers.map((row) => row[index]);
        const filteredColumn = column.filter((num) => num !== null);
        const set = new Set(filteredColumn);
        if (set.size === filteredColumn.length) {
            continue;
        }

        for (let i = 0; i < 9; i++) {
            invalidRowColPairs.push(`${i},${index}`);
        }
    } 

    // find invalid boxes
    for (let index = 0; index < 9; index++) {
        const box = [];
        const rowStart = Math.floor(index / 3) * 3;
        const colStart = (index % 3) * 3;
        for (let i = rowStart; i < rowStart + 3; i++) {
            for (let j = colStart; j < colStart + 3; j++) {
                box.push(numbers[i][j]);
            }
        }
        const filteredBox = box.filter((num) => num !== null);
        const set = new Set(filteredBox);
        if (set.size === filteredBox.length) {
            continue;
        }

        for (let i = rowStart; i < rowStart + 3; i++) {
            for (let j = colStart; j < colStart + 3; j++) {
                invalidRowColPairs.push(`${i},${j}`);
            }
        }
    }

    return new Set(invalidRowColPairs);
}

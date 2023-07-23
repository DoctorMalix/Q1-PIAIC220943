"use strict";
function findMissingIndex(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] + 1 != (numbers[i + 1])) {
            console.log(`Missing @ Index=${i} Value=${numbers[i]}`);
        }
    }
}
findMissingIndex([0, 1, 2, 6, 8]);

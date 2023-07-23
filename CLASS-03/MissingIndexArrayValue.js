function findMissingIndex(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] + 1 != (numbers[i + 1])) {
            console.log("Missing @ Index=".concat(i, " Value=").concat(numbers[i]));
        }
    }
}
findMissingIndex([0, 1, 2, 6, 8]);

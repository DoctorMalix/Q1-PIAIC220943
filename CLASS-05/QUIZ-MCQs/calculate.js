export default function calcFunc(score, totalQs) {
    let percent = ((score * 100) / totalQs);
    let wrong = totalQs - score;
    return {
        percent: percent,
        wrong: wrong,
    };
}

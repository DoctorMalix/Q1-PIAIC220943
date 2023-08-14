export default function calcFunc(score:number, totalQs:number){

  let percent = ((score * 100) / totalQs);
  let wrong = totalQs - score;
  
  return {
    percent: percent,
    wrong: wrong,
  };
}

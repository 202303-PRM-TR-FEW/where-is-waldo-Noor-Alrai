const example = [
  ["A", "A", "A"],
  ["A", "B", "A"],
  ["A", "A", "A"],
];

const whereIsWaldo = (matrix) => {
 let waldo;
 let countWaldo={};
 for (let row=0 ; row< matrix.length ; row++){
  for(let col = 0 ; col < matrix[row].length ; col++){
   waldo = matrix[row][col];
    if(countWaldo[waldo]){
      countWaldo[waldo]++
    }
    else{
      countWaldo[waldo]=1
    }
  }
 }
 for(let row = 0 ; row < matrix.length; row++)
 for (let col=0 ; col< matrix[row].length ; col++){
 waldo = matrix[row][col]
 if(countWaldo[waldo] === 1){

  return [row + 1, col + 1]
 }
 }
return null}
;
console.log(whereIsWaldo(example))
const result = whereIsWaldo(example)
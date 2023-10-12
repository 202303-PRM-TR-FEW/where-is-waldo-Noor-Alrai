const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"],
];

const whereIsWaldo = (matrix) => {
  let uniqueElement;
  let uniqueElementRow;
  let uniqueElementCol;
  // Count the occurrences of each element
  const elementCounts = {};

  for (let row = 1; row <= matrix.length - 1; row++) {
    for (let col = 1; col <= matrix[row].length - 1; col++) {
      const element = matrix[row][col];
      if (elementCounts[element] === undefined) {
        elementCounts[element] = 1;
      } else {
        elementCounts[element]++;
      }
    }
  }

  for (const element in elementCounts) {
    if (elementCounts[element] === 1) {
      uniqueElement = element;
      break;
    }
  }

  for (let row = 1; row <= matrix.length - 1; row++) {
    for (let col = 1; col <= matrix[row].length - 1; col++) {
      if (matrix[row][col] === uniqueElement) {
        uniqueElementRow = row + 1;
        uniqueElementCol = col + 1;
        break;
      }
    }
  }

  return [uniqueElementRow, uniqueElementCol];
};

console.log(whereIsWaldo(example));

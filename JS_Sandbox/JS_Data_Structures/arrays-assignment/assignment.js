// 1st

const maNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredNumbers = maNumbers.filter(num => num > 5);

const mappedNumbers = maNumbers.map(number => ({ num: number }));

const multiplyArrNums = maNumbers.reduce(
  (prevValue, currentValue) => prevValue * currentValue,
  1
);

console.log(maNumbers);
console.log(filteredNumbers);
console.log(mappedNumbers);
console.log(multiplyArrNums);

// 2nd and 3rd

const findMax = (...args) => {
  const minNum = Math.min(...args);
  const maxNum = Math.max(...args);
  // could have been done with for of loop as well
  return [minNum, maxNum];
};

const [minNumber, maxNumber] = findMax(...maNumbers);
console.log(minNumber, maxNumber);

// 4th

const noDublicatesList = new Set([1, 2, 3, 4]);
noDublicatesList.add(2);
noDublicatesList.add(5);

console.log(noDublicatesList);

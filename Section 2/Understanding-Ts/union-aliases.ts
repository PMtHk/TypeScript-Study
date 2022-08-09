type Combinable = number | string;
// type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: number | string,
  input2: Combinable,
  resultConversion: string
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-text'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result; // or parseFloat(result);
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 25);
console.log(combinedAges);

const combinedNames = combine('Max', 'zooby');
console.log(combinedNames);

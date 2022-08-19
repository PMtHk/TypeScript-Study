//  generic functions

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
} // intersection T, U

const mergedObj = merge({ name: 'Max', age: 25 }, {});

console.log(mergedObj);
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 0) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['sports', 'cooking']));

// keyof

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'zooby' }, 'name'));

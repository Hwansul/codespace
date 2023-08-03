const binarySearch = (arr, item) => {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const guess = arr[mid];
    if (guess === item) return mid;
    if (guess > item) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
};

binarySearch([1, 2, 3, 4, 5], 1); // 0
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1

const bubbleSort = arr => {
  let swapped = false;
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    swapped = false;
    for (let j = 0; j < a.length - i; j++) {
      if (a[j + 1] < a[j]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) return a;
  }
  return a;
};

bubbleSort([2, 1, 4, 3]); // [1, 2, 3, 4]

const bucketSort = (arr, size = 5) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const buckets = Array.from(
    { length: Math.floor((max - min) / size) + 1 },
    () => []
  );
  arr.forEach(val => {
    buckets[Math.floor((val - min) / size)].push(val);
  });
  return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
};

bucketSort([6, 3, 4, 1]); // [1, 3, 4, 6]

const caesarCipher = (str, shift, decrypt = false) => {
  const s = decrypt ? (26 - shift) % 26 : shift;
  const n = s > 0 ? s : 26 + (s % 26);
  return [...str]
    .map((l, i) => {
      const c = str.charCodeAt(i);
      if (c >= 65 && c <= 90)
        return String.fromCharCode(((c - 65 + n) % 26) + 65);
      if (c >= 97 && c <= 122)
        return String.fromCharCode(((c - 97 + n) % 26) + 97);
      return l;
    })
    .join('');
};

caesarCipher('Hello World!', -3); // 'Ebiil Tloia!'
caesarCipher('Ebiil Tloia!', 23, true); // 'Hello World!'

const heapsort = arr => {
  const a = [...arr];
  let l = a.length;

  const heapify = (a, i) => {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;
    if (left < l && a[left] > a[max]) max = left;
    if (right < l && a[right] > a[max]) max = right;
    if (max !== i) {
      [a[max], a[i]] = [a[i], a[max]];
      heapify(a, max);
    }
  };

  for (let i = Math.floor(l / 2); i >= 0; i -= 1) heapify(a, i);
  for (i = a.length - 1; i > 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    l--;
    heapify(a, 0);
  }
  return a;
};

heapsort([6, 3, 4, 1]); // [1, 3, 4, 6]

const insertionSort = arr =>
  arr.reduce((acc, x) => {
    if (!acc.length) return [x];
    acc.some((y, j) => {
      if (x <= y) {
        acc.splice(j, 0, x);
        return true;
      }
      if (x > y && j === acc.length - 1) {
        acc.splice(j + 1, 0, x);
        return true;
      }
      return false;
    });
    return acc;
  }, []);

insertionSort([6, 3, 4, 1]); // [1, 3, 4, 6]

const kMeans = (data, k = 1) => {
  const centroids = data.slice(0, k);
  const distances = Array.from({ length: data.length }, () =>
    Array.from({ length: k }, () => 0)
  );
  const classes = Array.from({ length: data.length }, () => -1);
  let itr = true;

  while (itr) {
    itr = false;

    for (let d in data) {
      for (let c = 0; c < k; c++) {
        distances[d][c] = Math.hypot(
          ...Object.keys(data[0]).map(key => data[d][key] - centroids[c][key])
        );
      }
      const m = distances[d].indexOf(Math.min(...distances[d]));
      if (classes[d] !== m) itr = true;
      classes[d] = m;
    }

    for (let c = 0; c < k; c++) {
      centroids[c] = Array.from({ length: data[0].length }, () => 0);
      const size = data.reduce((acc, _, d) => {
        if (classes[d] === c) {
          acc++;
          for (let i in data[0]) centroids[c][i] += data[d][i];
        }
        return acc;
      }, 0);
      for (let i in data[0]) {
        centroids[c][i] = parseFloat(Number(centroids[c][i] / size).toFixed(2));
      }
    }
  }

  return classes;
};

kMeans([[0, 0], [0, 1], [1, 3], [2, 0]], 2); // [0, 1, 1, 0]

const kNearestNeighbors = (data, labels, point, k = 3) => {
  const kNearest = data
    .map((el, i) => ({
      dist: Math.hypot(...Object.keys(el).map(key => point[key] - el[key])),
      label: labels[i]
    }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, k);

  return kNearest.reduce(
    (acc, { label }, i) => {
      acc.classCounts[label] =
        Object.keys(acc.classCounts).indexOf(label) !== -1
          ? acc.classCounts[label] + 1
          : 1;
      if (acc.classCounts[label] > acc.topClassCount) {
        acc.topClassCount = acc.classCounts[label];
        acc.topClass = label;
      }
      return acc;
    },
    {
      classCounts: {},
      topClass: kNearest[0].label,
      topClassCount: 0
    }
  ).topClass;
};

const data = [[0, 0], [0, 1], [1, 3], [2, 0]];
const labels = [0, 1, 1, 0];

kNearestNeighbors(data, labels, [1, 2], 2); // 1
kNearestNeighbors(data, labels, [1, 0], 2); // 0

const linearSearch = (arr, item) => {
  for (const i in arr) {
    if (arr[i] === item) return +i;
  }
  return -1;
};

linearSearch([2, 9, 9], 9); // 1
linearSearch([2, 9, 9], 7); // -1

const maxSubarray = (...arr) => {
  let maxSum = -Infinity,
    sum = 0;
  let sMax = 0,
    eMax = arr.length - 1,
    s = 0;

  arr.forEach((n, i) => {
    sum += n;
    if (maxSum < sum) {
      maxSum = sum;
      sMax = s;
      eMax = i;
    }

    if (sum < 0) {
      sum = 0;
      s = i + 1;
    }
  });

  return arr.slice(sMax, eMax + 1);
};


maxSubarray(-2, 1, -3, 4, -1, 2, 1, -5, 4); // [4, -1, 2, 1]

const mergeSort = arr => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const l = mergeSort(arr.slice(0, mid));
  const r = mergeSort(arr.slice(mid, arr.length));
  return Array.from({ length: l.length + r.length }, () => {
    if (!l.length) return r.shift();
    else if (!r.length) return l.shift();
    else return l[0] > r[0] ? r.shift() : l.shift();
  });
};

mergeSort([5, 1, 4, 2, 3]); // [1, 2, 3, 4, 5]

const quickSort = arr => {
  const a = [...arr];
  if (a.length < 2) return a;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = a[pivotIndex];
  const [lo, hi] = a.reduce(
    (acc, val, i) => {
      if (val < pivot || (val === pivot && i != pivotIndex)) {
        acc[0].push(val);
      } else if (val > pivot) {
        acc[1].push(val);
      }
      return acc;
    },
    [[], []]
  );
  return [...quickSort(lo), pivot, ...quickSort(hi)];
};

quickSort([1, 6, 1, 5, 3, 2, 1, 4]); // [1, 1, 1, 2, 3, 4, 5, 6]

const selectionSort = arr => {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    const min = a
      .slice(i + 1)
      .reduce((acc, val, j) => (val < a[acc] ? j + i + 1 : acc), i);
    if (min !== i) [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
};

selectionSort([5, 1, 4, 2, 3]); // [1, 2, 3, 4, 5]

const arr = [1, 2, 3];
const double = x => x * 2;
arr.map(double); // [2, 4, 6]

const arr = [1, 2, 3];
const isOdd = x => x % 2 === 1;
arr.filter(isOdd); // [1, 3]

const arr = [1, 2, 3];

const sum = (x, y) => x + y;
arr.reduce(sum, 0); // 6

const increment = (x, y) => [...x, x[x.length - 1] + y];
arr.reduce(increment, [0]); // [0, 1, 3, 6]

const arr = [1, 2, 3];
const isOdd = x => x % 2 === 1;
arr.find(isOdd); // 1

const none = (arr, fn = Boolean) => !arr.some(fn);

none([0, 1, 3, 0], x => x == 2); // true
none([0, 0, 0]); // true

const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true

const any = (arr, fn = Boolean) => arr.some(fn);

any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true

const arr = ['a', 'b', 'c'];
arr.push('d', 'e'); // Returns 5 (new length after appending 2 elements)
// arr = ['a', 'b', 'c', 'd', 'e']

const arr = ['a', 'b', 'c'];
arr.unshift('d', 'e'); // Returns 5 (new length after appending 2 elements)
// arr = ['d', 'e', 'a', 'b', 'c']

const arr = ['a', 'b', 'c'];
arr.splice(1, 0, 'd', 'e');
// arr = ['a', 'd', 'e', 'b', 'c']

const arr = ['a', 'b', 'c'];
arr[arr.length] = 'd';
// arr = ['a', 'b', 'c', 'd']

const arr = ['a', 'b', 'c'];
const arr2 = arr.concat('d', 'e');
// arr = ['a', 'b', 'c'], arr2 = ['a', 'b', 'c', 'd', 'e']
const arr3 = ['d', 'e'].concat(...arr);
// arr = ['a', 'b', 'c'], arr3 = ['d', 'e', 'a', 'b', 'c']

const arr = ['a', 'b', 'c'];
const arr2 = [...arr, 'd', 'e'];
// arr = ['a', 'b', 'c'], arr2 = ['a', 'b', 'c', 'd', 'e']
const arr3 = ['d', 'e', ...arr];
// arr = ['a', 'b', 'c'], arr3 = ['d', 'e', 'a', 'b', 'c']
```---
title: How do I compare two arrays in JavaScript?
shortTitle: JavaScript array comparison
type: question
language: javascript
tags: [array,comparison]
author: chalarangelo
cover: coconuts
excerpt: Learn how you can compare two arrays in JavaScript using various different techniques.
dateModified: 2021-09-27T16:36:32+03:00
---

### Equality comparison

Comparing two arrays in JavaScript using either the loose or strict equality operators (`==` or `===`) will most often result in `false`, even if the two arrays contain the same elements in the same order. This is due to the fact that arrays and objects are compared by reference and not by value in JavaScript, which means this solution does not produce the desired result:

```js
const a = [1, 2, 3];
const b = [1, 2, 3];

a === b; // false

const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const a = [1, 2, 3];
const b = [1, 2, 3];

equals(a, b); // true

const str = 'a';
const strObj = new String('a');
str === strObj; // false
equals([str], [strObj]); // true, should be false

null === undefined; // false
equals([null], [undefined]); // true, should be false

const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

const a = [1, 2, 3];
const b = [1, 2, 3];
const str = 'a';
const strObj = new String('a');

equals(a, b); // true
equals([str], [strObj]); // false
equals([null], [undefined]); // false

const equalsIgnoreOrder = (a, b) => {
  if (a.length !== b.length) return false;
  const uniqueValues = new Set([...a, ...b]);
  for (const v of uniqueValues) {
    const aCount = a.filter(e => e === v).length;
    const bCount = b.filter(e => e === v).length;
    if (aCount !== bCount) return false;
  }
  return true;
}

const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3, 3], [1, 2, 4]); // [3, 3]

const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```---
title: Check if all array elements are unique
type: snippet
language: javascript
tags: [array]
cover: strawberries
dateModified: 2021-01-08T00:23:44+02:00
---

Checks if all elements in an array are unique.

- Create a new `Set` from the mapped values to keep only unique occurrences.
- Use `Array.prototype.length` and `Set.prototype.size` to compare the length of the unique values to the original array.

```js
const allUnique = arr => arr.length === new Set(arr).size;

allUnique([1, 2, 3, 4]); // true
allUnique([1, 1, 2, 3]); // false
```---
title: JavaScript array filtering tips
shortTitle: Array filtering tips
type: story
language: javascript
tags: [array]
author: chalarangelo
cover: rocky-beach-waves
excerpt: A few tips and tricks to help you filter arrays in JavaScript more efficiently.
dateModified: 2022-09-28T05:00:00-04:00
---

While `Array.prototype.filter()` is a very convenient method, its performance often leaves something to be desired. This is exaggerated due to the fact that it has become the go-to method for many operations that can be performed using different alternatives. Let's look at a couple of common scenarios and see how we can improve their performance.

### Find a single value

If you are looking for a single result in an array, you can use `Array.prototype.find()` instead. This will return the first element that satisfies the condition, or `undefined` if no such element exists. It's much faster than `Array.prototype.filter()`, as it will stop iterating as soon as it finds the first matching element.

```js
const arr = [1, 2, 3, 4, 5];

arr.find(x => x > 3); // 4

const arr = [1, 2, 3, 4, 5];

arr.indexOf(3); // 2

const arr = [1, 2, 3, 4, 5];

const index = arr.findIndex(x => x === 3);
const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)];
// [1, 2, 4, 5]

const arr = [1, 2, 3, 4, 5];

const index = arr.findIndex(x => x === 3);
arr.splice(index, 1); // [1, 2, 4, 5]

const hasDuplicates = arr => new Set(arr).size !== arr.length;

hasDuplicates([0, 1, 1, 2]); // true
hasDuplicates([0, 1, 2, 3]); // false

const hasMany = (arr, fn) => arr.filter(fn).length > 1;

hasMany([1, 3], x => x % 2); // true
hasMany([1, 2], x => x % 2); // false
```---
title: Check if array has only one match
type: snippet
language: javascript
tags: [array]
author: chalarangelo
cover: interior-10
dateModified: 2021-07-04T05:00:00-04:00
---

Checks if an array has only one value matching the given function.

- Use `Array.prototype.filter()` in combination with `fn` to find all matching array elements.
- Use `Array.prototype.length` to check if only one element matches `fn`.

```js
const hasOne = (arr, fn) => arr.filter(fn).length === 1;

hasOne([1, 2], x => x % 2); // true
hasOne([1, 3], x => x % 2); // false
```---
title: Head of array
type: snippet
language: javascript
tags: [array]
cover: clay-pot-horizon
dateModified: 2020-10-19T22:49:51+03:00
---

Returns the head of an array.

- Check if `arr` is truthy and has a `length` property.
- Use `arr[0]` if possible to return the first element, otherwise return `undefined`.

```js
const head = arr => (arr && arr.length ? arr[0] : undefined);

head([1, 2, 3]); // 1
head([]); // undefined
head(null); // undefined
head(undefined); // undefined
```---
title: Check if array includes all values
type: snippet
language: javascript
tags: [array]
cover: tomatoes
dateModified: 2020-10-20T23:02:01+03:00
---

Checks if all the elements in `values` are included in `arr`.

- Use `Array.prototype.every()` and `Array.prototype.includes()` to check if all elements of `values` are included in `arr`.

```js
const includesAll = (arr, values) => values.every(v => arr.includes(v));

includesAll([1, 2, 3, 4], [1, 4]); // true
includesAll([1, 2, 3, 4], [1, 5]); // false

const includesAny = (arr, values) => values.some(v => arr.includes(v));

includesAny([1, 2, 3, 4], [2, 9]); // true
includesAny([1, 2, 3, 4], [8, 9]); // false
```---
title: How can I check if a JavaScript array includes a specific value?
shortTitle: JavaScript array includes value
type: question
language: javascript
tags: [array]
author: chalarangelo
cover: bridge-drop
excerpt: Checking if an array includes a specific value is pretty straightforward, except when it comes to objects.
dateModified: 2022-09-18T05:00:00-04:00
---

### Primitive values

You can use `Array.prototype.includes()` to check if an array contains a primitive value. This is the most convenient option when working with strings, numbers, booleans, symbols, `null` or `undefined`. You can even specify an index as a secondary parameter to start searching from.

```js
const array = [1, 2, 3, 4, 5];

array.includes(3); // true
array.includes(6); // false
array.includes(3, 3); // false

const array = [{ a: 1 }, { a: 2 }, { a: 3 }];

const equals = (a, b) => Object.keys(a).every(key => a[key] === b[key]);

array.some(item => equals(item, { a: 2 })); // true
array.some(item => equals(item, { a: 4 })); // false
```---
title: The many ways to initialize a JavaScript Array
shortTitle: Array Initialization
type: story
language: javascript
tags: [array]
author: chalarangelo
cover: red-mountain-range
excerpt: Discover the inner workings of JavaScript arrays and learn about the different ways to initialize them.
dateModified: 2023-06-18T05:00:00-04:00
---

Initializing arrays in JavaScript is a crucial task, with many techniques to choose from and performance considerations to keep in mind. While there might not be a one-size-fits-all solution, there are a few options you might want to consider.

### Array() constructor

The first thing you'd reach for would probably be the `Array()` constructor. Counterintuitively, this is probably the most problematic option to use on its own. While it works for any number of arguments to create an array with the given values, it falls short pretty much everywhere else. Most of its problems stem from **holes or "empty" values** with which the resulting array is populated and how these are handled elsewhere.

```js
const arr = Array(3); // [ , , ] - 3 empty slots
arr.map(() => 1); // [ , , ] - map() skips empty slots
arr.map((_, i) => i); // [ , , ] - map() skips empty slots
arr[0]; // undefined - actually, it is an empty slot

const arr = Array.from({ length: 3 }); // [undefined, undefined, undefined]
arr.map(() => 1); // [1, 1, 1]
arr.map((_, i) => i); // [0, 1, 2]
const staticArr = Array.from({ length: 3 }, () => 1); // [1, 1, 1]
const indexArr = Array.from({ length: 3 }, (_, i) => i); // [0, 1, 2]

const nullArr = new Array(3).fill(null); // [null, null, null]
const staticArr = Array.from({ length: 3 }).fill(1); // [1, 1, 1]
const indexArr = Array(3).fill(null).map((_, i) => i); // [0, 1, 2]

const arr = Array(3).map(() => 1); // [ , , ] - map() skips empty slots
const staticArr = Array.from({ length: 3 }).map(() => 1); // [1, 1, 1]
const indexArr = Array.from({ length: 3 }).map((_, i) => i); // [0, 1, 2]
const fractionArr =
  Array.from({ length: 3 }).map((_, i, a) => i / a.length); // [0, 0.5, 1]

const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);
const initializeMappedArray = (n, mapFn = (_, i) => i) =>
  Array(n).fill(null).map(mapFn);

initializeArrayWithValues(4, 2); // [2, 2, 2, 2]
initializeMappedArray(4, (_, i) => i * 2); // [0, 2, 4, 6]

const intersection = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```---
title: Array is contained in other array
type: snippet
language: javascript
tags: [array]
author: chalarangelo
cover: island-corridor
dateModified: 2020-10-22T20:23:47+03:00
---

Checks if the elements of the first array are contained in the second one regardless of order.

- Use a `for...of` loop over a `Set` created from the first array.
- Use `Array.prototype.some()` to check if all distinct values are contained in the second array.
- Use `Array.prototype.filter()` to compare the number of occurrences of each distinct value in both arrays.
- Return `false` if the count of any element is greater in the first array than the second one, `true` otherwise.

```js
const isContainedIn = (a, b) => {
  for (const v of new Set(a)) {
    if (
      !b.some(e => e === v) ||
      a.filter(e => e === v).length > b.filter(e => e === v).length
    )
      return false;
  }
  return true;
};

isContainedIn([1, 4], [2, 4, 1]); // true
```---
title: Array is sorted
type: snippet
language: javascript
tags: [array]
cover: italian-horizon
dateModified: 2020-10-20T23:02:01+03:00
---

Checks if a numeric array is sorted.

- Calculate the ordering `direction` for the first pair of adjacent array elements.
- Return `0` if the given array is empty, only has one element or the `direction` changes for any pair of adjacent array elements.
- Use `Math.sign()` to covert the final value of `direction` to `-1` (descending order) or `1` (ascending order).

```js
const isSorted = arr => {
  if (arr.length <= 1) return 0;
  const direction = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if ((arr[i] - arr[i - 1]) * direction < 0) return 0;
  }
  return Math.sign(direction);
};

isSorted([0, 1, 2, 2]); // 1
isSorted([4, 3, 2]); // -1
isSorted([4, 3, 5]); // 0
isSorted([4]); // 0

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num * 2));
// No return value, output: 2, 4, 6, 8, 10

const doubledNumbers = numbers.map(num => num * 2);
// Returns a new array: [2, 4, 6, 8, 10]

const nums = [2, 4, 6, 8, 1, 3, 5, 7];

Math.max(...nums); // 8
Math.min(...nums); // 1

const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};

permutations([1, 33, 5]);
// [ [1, 33, 5], [1, 5, 33], [33, 1, 5], [33, 5, 1], [5, 1, 33], [5, 33, 1] ]

const ranking = (arr, compFn) =>
  arr.map(a => arr.filter(b => compFn(a, b)).length + 1);

ranking([8, 6, 9, 5], (a, b) => a < b);
// [2, 3, 1, 4]
ranking(['c', 'a', 'b', 'd'], (a, b) => a.localeCompare(b) > 0);
// [3, 1, 2, 4]
```---
title: Random element in array
type: snippet
language: javascript
tags: [array,string,random]
cover: paper-card
dateModified: 2020-10-22T20:24:30+03:00
---

Gets a random element from an array.

- Use `Math.random()` to generate a random number.
- Multiply it by `Array.prototype.length` and round it off to the nearest whole number using `Math.floor()`.
- This method also works with strings.

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```---
title: Array similarity
type: snippet
language: javascript
tags: [array,math]
cover: dark-leaves-5
dateModified: 2020-10-22T20:24:30+03:00
---

Returns an array of elements that appear in both arrays.

- Use `Array.prototype.includes()` to determine values that are not part of `values`.
- Use `Array.prototype.filter()` to remove them.

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v));

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```---
title: "Tip: JavaScript array sorting shorthand"
shortTitle: Array sorting shorthand
type: tip
language: javascript
tags: [array]
cover: apples
excerpt: Learn how to quickly write code to sort JavaScript arrays with this handy one-liner.
dateModified: 2021-06-12T19:30:41+03:00
---

When sorting an array of primitive values (e.g. strings or numbers), you'll often see a lot of code that looks like this:

```js
const arr = [8, 2, 1, 4, 5, 0];
// Sort in ascending order
arr.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1
  return 0;
}); // [0, 1, 2, 4, 5, 8]

const arr = [8, 2, 1, 4, 5, 0];
// Sort in ascending order
arr.sort((a, b) => a - b); // [0, 1, 2, 4, 5, 8]
// Sort in descending order
arr.sort((a, b) => b - a); // [8, 5, 4, 2, 1, 0]

const s = ['Hi', 'Hola', 'Hello'];
// Sort in ascending order
arr.sort((a, b) => a.localeCompare(b)); // ['Hello', 'Hi', 'Hola']
// Sort in descending order
arr.sort((a, b) => b.localeCompare(a)); // ['Hola', 'Hi', 'Hello']
```---
title: Array symmetric difference
type: snippet
language: javascript
tags: [array,math]
cover: rocky-mountains-2
dateModified: 2020-10-22T20:24:30+03:00
---

Returns the symmetric difference between two arrays, without filtering out duplicate values.

- Create a `Set` from each array to get the unique values of each one.
- Use `Array.prototype.filter()` on each of them to only keep values not contained in the other.

```js
const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};

symmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]
symmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 2, 3]
```---
title: Array tail
type: snippet
language: javascript
tags: [array]
cover: chubby-squirrel
dateModified: 2020-10-22T20:24:30+03:00
---

Returns all elements in an array except for the first one.

- Use `Array.prototype.slice()`to return the array without the first element if `Array.prototype.length` is more than `1`.
- Otherwise, return the whole array.

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2, 3]
tail([1]); // [1]
```---
title: Array to CSV
type: snippet
language: javascript
tags: [array,string]
cover: tropical-bike
dateModified: 2020-11-03T21:55:08+02:00
---

Converts a 2D array to a comma-separated values (CSV) string.

- Use `Array.prototype.map()` and `Array.prototype.join()` to combine individual 1D arrays (rows) into strings, using the provided `delimiter`.
- Use `Array.prototype.join()` to combine all rows into a CSV string, separating each row with a newline (`\n`).
- Omit the second argument, `delimiter`, to use a default delimiter of `,`.

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map(v =>
      v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter)
    )
    .join('\n');

arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
arrayToCSV([['a', '"b" great'], ['c', 3.1415]]);
// '"a","""b"" great"\n"c",3.1415'
```---
title: Array to HTML list
type: snippet
language: javascript
tags: [browser,array]
cover: rocky-beach-waves
dateModified: 2020-10-20T11:46:23+03:00
---

Converts the given array elements into `<li>` tags and appends them to the list of the given id.

- Use `Array.prototype.map()` and `Document.querySelector()` to create a list of html tags.

```js
const arrayToHTMLList = (arr, listID) =>
  document.querySelector(`#${listID}`).innerHTML += arr
    .map(item => `<li>${item}</li>`)
    .join('');

arrayToHTMLList(['item 1', 'item 2'], 'myListID');
```---
title: Convert array to identity object
type: snippet
language: javascript
tags: [array]
author: chalarangelo
cover: rain-shopping
dateModified: 2023-04-16T05:00:00-04:00
---

Converts an array of values into an object with the same values as keys and values.

- Use `Array.prototype.map()` to map each value to an array of key-value pairs.
- Use `Object.fromEntries()` to convert the array of key-value pairs into an object.

```js
const toIdentityObject = arr => Object.fromEntries(arr.map(v => [v, v]));

toIdentityObject(['a', 'b']); // { a: 'a', b: 'b' }
```---
title: Array to object based on key
type: snippet
language: javascript
tags: [array,object]
author: chalarangelo
cover: lavender-shelf
dateModified: 2021-06-27T05:00:00-04:00
---

Creates an object from an array, using the specified key and excluding it from each value.

- Use `Array.prototype.reduce()` to create an object from `arr`.
- Use object destructuring to get the value of the given `key` and the associated `data` and add the key-value pair to the object.

```js
const indexOn = (arr, key) =>
  arr.reduce((obj, v) => {
    const { [key]: id, ...data } = v;
    obj[id] = data;
    return obj;
  }, {});

indexOn([
  { id: 10, name: 'apple' },
  { id: 20, name: 'orange' }
], 'id');
// { '10': { name: 'apple' }, '20': { name: 'orange' } }
```---
title: Array union
type: snippet
language: javascript
tags: [array]
cover: yellow-white-mug-2
dateModified: 2020-10-22T20:24:44+03:00
---

Returns every element that exists in any of the two arrays at least once.

- Create a `Set` with all values of `a` and `b` and convert it to an array.

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1, 2, 3, 4]
```---
title: Array unique symmetric difference
type: snippet
language: javascript
tags: [array,math]
cover: paper-card
dateModified: 2020-10-22T20:24:44+03:00
---

Returns the unique symmetric difference between two arrays, not containing duplicate values from either array.

- Use `Array.prototype.filter()` and `Array.prototype.includes()` on each array to remove values contained in the other.
- Create a `Set` from the results, removing duplicate values.

```js
const uniqueSymmetricDifference = (a, b) => [
  ...new Set([
    ...a.filter(v => !b.includes(v)),
    ...b.filter(v => !a.includes(v)),
  ]),
];

uniqueSymmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]
uniqueSymmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 3]
```---
title: Array without last element
type: snippet
language: javascript
tags: [array]
cover: red-light
dateModified: 2020-11-03T21:46:13+02:00
---

Returns all the elements of an array except the last one.

- Use `Array.prototype.slice()` to return all but the last element of the array.

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1, 2]
```---
title: Check if arrays have same contents
type: snippet
language: javascript
tags: [array]
author: chalarangelo
cover: interior-15
dateModified: 2020-10-19T22:49:51+03:00
---

Checks if two arrays contain the same elements regardless of order.

- Use a `for...of` loop over a `Set` created from the values of both arrays.
- Use `Array.prototype.filter()` to compare the amount of occurrences of each distinct value in both arrays.
- Return `false` if the counts do not match for any element, `true` otherwise.

```js
const haveSameContents = (a, b) => {
  for (const v of new Set([...a, ...b]))
    if (a.filter(e => e === v).length !== b.filter(e => e === v).length)
      return false;
  return true;
};

haveSameContents([1, 2, 4], [2, 4, 1]); // true
```---
title: Check if two arrays intersect
type: snippet
language: javascript
tags: [array]
author: chalarangelo
cover: interior-5
dateModified: 2023-02-17T05:00:00-04:00
---

Determines if two arrays have a common item.

- Create a `Set` from `b` to get the unique values in `b`.
- Use `Array.prototype.some()` on `a` to check if any of its values are contained in `b`, using `Set.prototype.has()`.

```js
const intersects = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].some(x => s.has(x));
};

intersects(['a', 'b'], ['b', 'c']); // true
intersects(['a', 'b'], ['c', 'd']); // false
``` ---
title: Arrays of consecutive elements
type: snippet
language: javascript
tags: [array]
author: chalarangelo
cover: colorful-pots
dateModified: 2022-04-06T05:00:00-04:00
---

Finds all arrays of consecutive elements.

- Use `Array.prototype.slice()` to create an array with `n - 1` elements removed from the start.
- Use `Array.prototype.map()` and `Array.prototype.slice()` to map each element to an array of `n` consecutive elements.

```js
const findConsecutive = (arr, n) =>
  arr.slice(n - 1).map((v, i) => arr.slice(i, i + n));

findConsecutive([1, 2, 3, 4, 5], 2);
// [[1, 2], [2, 3], [3, 4], [4, 5]]
```---
title: Asynchronous array loops in JavaScript
shortTitle: Asynchronous array loops
type: story
language: javascript
tags: [array,function,promise]
author: chalarangelo
cover: sunflowers
excerpt: Asynchronously looping over arrays in JavaScript comes with a few caveats you should watch out for.
dateModified: 2021-06-12T19:30:41+03:00
---

Asynchronous operations seem to trip up a lot of developers. This is especially true when combined with looping over arrays, as there are some caveats that come with each option available.

### For loops

Combining `async` with a `for` (or a `for...of`) loop is possibly the most straightforward option when performing asynchronous operations over array elements. Using `await` inside a `for` loop will cause the code to stop and wait for the asynchronous operation to complete before continuing. This means that all promises will be run sequentially.

```js
const asyncUppercase = item =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(item.toUpperCase()),
      Math.floor(Math.random() * 1000)
    )
  );

const uppercaseItems = async () => {
  const items = ['a', 'b', 'c'];
  for (item of items) {
    const uppercaseItem = await asyncUppercase(item);
    console.log(uppercaseItem);
  }

  console.log('Items processed');
};

uppercaseItems();
// LOGS: 'A', 'B', 'C', 'Items processed'

const asyncUppercase = item =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(item.toUpperCase()),
      Math.floor(Math.random() * 1000)
    )
  );

const uppercaseItems = () => {
  const items = ['a', 'b', 'c'];
  return Promise.all(
    items.map(async item => {
      const uppercaseItem = await asyncUppercase(item);
      console.log(uppercaseItem);
    })
  ).then(() => {
    console.log('Items processed');
  });
};
// LOGS: 'A', 'C', 'B', 'Items processed'

const asyncUppercase = item =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(item.toUpperCase()),
      Math.floor(Math.random() * 1000)
    )
  );

const uppercaseItems = async () => {
  const items = ['a', 'b', 'c'];
  await items.forEach(async item => {
    const uppercaseItem = await asyncUppercase(item);
    console.log(uppercaseItem);
  });

  console.log('Items processed');
};

uppercaseItems();
// LOGS: ''Items processed', 'B', 'A', 'C'

const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [
    [],
    [],
  ]);

bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b');
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```---
title: Bifurcate array based on values
type: snippet
language: javascript
tags: [array]
cover: sunrise-over-mountains
dateModified: 2020-11-01T20:50:57+02:00
---

Splits values into two groups, based on the result of the given `filter` array.

- Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on `filter`.
- If `filter` has a truthy value for any element, add it to the first group, otherwise add it to the second group.

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
    [],
    [],
  ]);

bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]);
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```---
title: Code Anatomy - For loops, array reduce and method chaining
shortTitle: For loops, array reduce and method chaining
type: story
language: javascript
tags: [array,iterator]
author: chalarangelo
cover: case-study
excerpt: There are many ways to iterate and transform array data in JavaScript. Learn how each one works and where you should use them.
dateModified: 2021-06-12T19:30:41+03:00
---

### For loops

```js
const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
let filePaths = [];

for (let file of files) {
  const fileName = file.trim();
  if(fileName) {
    const filePath = `~/cool_app/${fileName}`;
    filePaths.push(filePath);
  }
}

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']

const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
const filePaths = files.reduce((acc, file) => {
  const fileName = file.trim();
  if(fileName) {
    const filePath = `~/cool_app/${fileName}`;
    acc.push(filePath);
  }
  return acc;
}, []);

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']

const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
const filePaths = files
  .map(file => file.trim())
  .filter(Boolean)
  .map(fileName => `~/cool_app/${fileName}`);

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']

const combine = (a, b, prop) =>
  Object.values(
    [...a, ...b].reduce((acc, v) => {
      if (v[prop])
        acc[v[prop]] = acc[v[prop]]
          ? { ...acc[v[prop]], ...v }
          : { ...v };
      return acc;
    }, {})
  );

const x = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Maria' }
];
const y = [
  { id: 1, age: 28 },
  { id: 3, age: 26 },
  { age: 3}
];
combine(x, y, 'id');
// [
//  { id: 1, name: 'John', age: 28 },
//  { id: 2, name: 'Maria' },
//  { id: 3, age: 26 }
// ]

const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
// [ 1, 2, 3, 'a', 's', 34 ]

const compactJoin = (arr, delim = ',') => arr.filter(Boolean).join(delim);

compactJoin(['a', '', 'b', 'c']); // 'a,b,c'

const aperture = (n, arr) =>
  n > arr.length
    ? []
    : arr.slice(n - 1).map((v, i) => arr.slice(i, i + n));

aperture(2, [1, 2, 3, 4]); // [[1, 2], [2, 3], [3, 4]]
aperture(3, [1, 2, 3, 4]); // [[1, 2, 3], [2, 3, 4]]
aperture(5, [1, 2, 3, 4]); // []

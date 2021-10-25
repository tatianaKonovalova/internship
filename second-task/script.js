let arr = [1, 2];
let arr3 = [5, 6];

// CONCAT METHOD
function concatMethod(...args) {
    let arr = [];
    for (let i = 0; i < args.length; i++) {
        if(Array.isArray(args[i])) {
            arr = [...arr, ...args[i]];
        } else {
            arr = [...arr, args[i]];
        }
    }
    return arr;
}
console.log('concat method', concatMethod(arr, arr3, [8, 9, 5], 89));

// UNSHIFT METHOD
function unshiftMethod(arr, ...values) {
    let newElems = values;
    let newArr = [];
    for (let i = 0; i < newElems.length; i += 1) {
        newArr.push(newElems[i]);
    }
    arr = [...newArr, ...arr];
    return arr;
}
console.log('unshift method', unshiftMethod(arr, 5, 6, 7, 89));

//SHIFT METHOD
function shiftMethod() {
    let b = [];
    for (let i = 1; i < arr.length; i++) {
        b[i-1] = arr[i];
    }
    arr = b;
    return arr;
}
console.log('shift method', shiftMethod(arr));

//POP METHOD
function popMethod(arr) {
    let b = [];
    for (let i = 0; i < arr.length - 1; i++) {
        b[i] = arr[i];
    }
    arr = b;
    return arr;
}
console.log('pop method', popMethod(arr));

//PUSH METHOD
function pushMethod(arr, ...values) {
    let newElems = values;
    for (let i = 0; i < newElems.length; i += 1) {
        if (Array.isArray(newElems[i])) {
            arr = [...arr, ...newElems[i]];
        } else {
            arr[arr.length] = newElems[i];
        }
    }
    return arr;
}
console.log('Push Method', pushMethod(arr, arr3, [7, 8], 9, 10));

//map => reduce
let fruits = ['Яблоко', 'Банан', 'Ананас'];

const firstLetters = fruits.reduce( function(acc, el) {
    acc.push(el[0]);
    return acc;
}, []);
console.log(firstLetters);

//filter => reduce
const firstLetterA = fruits.reduce( function(acc, el) {
    if (el[0].toLowerCase() == 'а') { 
        acc.push(el);
    }
    return acc;
}, []);
console.log(firstLetterA);

//forEach => reduce
const list = fruits.reduce(function(acc, el, i) {
    console.log(`${i+1}: ${el};`);
}, '');


let arr = [1, 2, 3, 4];
arr.reverse();

console.log(arr); // [4, 3, 2, 1]

let arr1 = [5, 2, 4, 1, 3];
arr1.sort((a, b) => a - b);

console.log(arr); // [1, 2, 3, 4, 5]

let arr2 = [1, 2, 2, 3, 3, 4];

for (let i = 0; i < arr2.length; i++) {

    console.log("Index", arr2.indexOf(arr2[i]));

    if (arr2.indexOf(arr2[i]) !== i) {
        arr2.splice(i, 1);
        i--;
    }
}

console.log(arr2);

let arr3 = [10, 20, 30, 40];

arr3[0] = 100;

console.log(arr3); // [100, 20, 30, 40]
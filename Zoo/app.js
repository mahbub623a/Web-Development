Array.prototype.sum = (arr) => {
    let sum = 0;
    for (a of arr) {
        sum += a;
    }
    console.log("Sum of the array is:", sum);
}

let arr = [1, 2, 3, 4, 5];
arr.sum(arr);
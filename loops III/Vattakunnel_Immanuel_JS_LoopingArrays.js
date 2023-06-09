// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

// 1. Write a for loop that will traverse through an array of numbers, and print each number.
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        
    }
    
}

//2. Write a for loop that will traverse through an array of numbers, 
//and print the sum of the number and the index of the number in the array.
function printArraySumAndIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        sum = i + arr[i];
        console.log("Sum of",i, "+", arr[i], "is:", sum);        
    }
    
}

//3. Write a for loop that will traverse through an array of numbers, 
//and print only the numbers greater than 5.

function printGreaterThanFive(arr){

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 5){
            console.log(arr[i]);
        }else{
            arr[i] = "No dice";
        }
    }
    
}


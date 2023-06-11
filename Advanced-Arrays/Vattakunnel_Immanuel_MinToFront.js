/* Given an array of comparable values, 
move the lowest element to array’s front, shifting backward any elements 
previously ahead of it. Do not otherwise change the array’s order.

*/
const arr1 = [5, 93, 22, 4];   // 4, 5, 93, 22
const arr2 = [3, 4, 2, 1, 5];  // 1, 3, 4, 2, 5

function minToFront(arr) {
    //initializing min to first element
    let min = arr[0];
    //let firstElementArr = arr[0];
    let indexMin;
    //to find the min value
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] <min){
            min = arr[i]
            //setting indexmin to the lowest index that contains the element
            indexMin = i;
        }
    }
    //for loop to shift array to the right
    for( let j = indexMin; j>0; j--){
        arr[j] = arr[j-1];
        //arr[j-1] = min;
    }
    //setting value in arr[0] to min value found
    arr[0] = min;
    return arr;
}



console.log(arr2);
console.log(minToFront(arr2));
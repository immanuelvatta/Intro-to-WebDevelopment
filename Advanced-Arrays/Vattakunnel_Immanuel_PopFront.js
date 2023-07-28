function popFront(arr) {
    let first = arr[0];
    //let firstElementArr = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== first){
            arr[index] = arr[i];
            index++;
        }
    }
    //arr.length = index;
    arr.pop();
    console.log('new array:', arr)
    return `popped value is ${first}`;
}

const arr1 = [5, 93, 22, 4];   // 4, 5, 93, 22
const arr2 = [3, 4, 2, 1, 5];  // 1, 3, 4, 2, 5

console.log(arr2);
console.log(popFront(arr2));
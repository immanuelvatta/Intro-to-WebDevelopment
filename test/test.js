const arr1 = [5, 93, 22, 4];   // 4, 5, 93, 22
const arr2 = [3, 4, 2, 1, 5];  // 1, 3, 4, 2, 5



// function minToFront2(arr) {
//     let min = arr[0];
//     let firstElementArr = arr[0];
//     let indexMin;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (arr[i] < arr[j]) {
//                 min = arr[i];
//                 arr[i]= arr[j];//
//                 arr[j]=min;//
                
//             }
//             break;
//         }
//     }
//     // console.log(indexMin);
//     // console.log(firstElementArr);
//     // console.log(min);
//     return arr
// }   

//console.log(minToFront1(arr2));

function minToFront1(arr) {
    let min = arr[0];
    let firstElementArr = arr[0];
    let indexMin;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] <min){
            min = arr[i]
            indexMin = i;
        }
    }
    for( let j = indexMin; j>0; j--){
        arr[j] = arr[j-1];
        //arr[j-1] = min;
    }
    arr[0] = min;
    return arr;
}
console.log(arr2);
console.log(delFront(arr2));


function delFront(arr) {
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
    return arr;
}

// [5, 93, 22, 4]; => 93,22,4

// const elements = [1, 5, 5, 3, 5, 2, 4];
// const remove = elements[0]

// i = 0

// for(let j = 0; j < elements.length; j++){
//   if (elements[j] !== remove) {
//     elements[i] = elements[j]
//     i++
//   }
// }
// elements.length = i
// console.log(elements);
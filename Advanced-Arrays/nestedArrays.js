//similar to manhattan problem but here we're doing it if we have 4 coordinates and we're trying to find
//where to park on these 4 coordinates that'll be the shortest distance to travel from other co-ordinates


const customerArr = [[1, 3], [0, 0], [2, 1], [4, 2]];
const parkArr =[];

console.log(nestedArrays(customerArr))


// find the distance of [2,-2] from [0,0] = |2-0| + |-2 - 0| = 4

function nestedArrays(x){
    //console.log("arr1")
    //console.log(x);
    let minDistance = Infinity;
    //console.log(minDistance);
    let minIndex = 0;
    let sum = 0;

    for (let i = 0; i < x.length; i++){
        for(let j = i+1; j < x.length; j++){
            sum = (Math.abs(x[i][0] - x[j][0]) + Math.abs(x[i][1] - x[j][1]));
            if(sum < minDistance){
                minDistance = sum;
                minIndex = i;
                console.log(minDistance, x[minIndex])
            }
        }
        

    }
    return x[minIndex];
}


// Function to calculate the Manhattan distance between two points
// Manhattan distance: a distance measure that is calculated by taking the sum of distances between the x and y coordinates. The Manhattan distance is also known as Manhattan length. In other words, it is the distance between two points measured along axes at right angles.
// function calculateDistance(point1, point2) {
//     //Code Goes Here
//   }
  
//   // Function to find the optimal truck location based on customer coordinates
//   function findOptimalTruckLocation(customerCoordinates) {
//     //Code Goes Here
//   }
  
//   // Example usage:
//   //const customerCoordinates = [[0, 0], [1, 3], [2, 1], [4, 2]]; // Array of customer coordinates
//   const optimalLocation = findOptimalTruckLocation(customerCoordinates); // Find optimal truck location
  
//   console.log('Optimal Truck Location:', optimalLocation); // Output the optimal truck location
  


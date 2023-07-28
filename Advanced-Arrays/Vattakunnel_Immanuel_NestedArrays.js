function getDistance(ci,cj){
    return Math.abs(ci[0] - cj[0]) + Math.abs(ci[1] - cj[1]);
}

// Function to find the optimal truck location based on customer coordinates
function getClosest(custArr){
    // Initialize optimal truck location as null
    let closestPoint = null;
    // Initialize minimum total distance to Infinity
    let minDist = Infinity;
    for(let i = 0; i < custArr.length; i++){
        // Initialize total distance for the current customer
        let totalDist = 0; 
        // Calculate the distance between the current customer and all other customers
        for(let j = 0; j < custArr.length; j++){
             if (i==j){
                 continue;
             }
            totalDist += getDistance(custArr[i], custArr[j]);
        }
        // Check if the total distance is smaller than the current minimum total distance
        if(totalDist<minDist){
            minDist = totalDist;
            closestPoint = custArr[i]
        }
    }
    // Return the optimal truck location
    return closestPoint;
}

const customerCoordinates = [[0, 0], [1, 3], [2, 1], [4, 2]];
const optimalLocation = getClosest(customerCoordinates);
console.log('Optimal Truck Location:', optimalLocation);
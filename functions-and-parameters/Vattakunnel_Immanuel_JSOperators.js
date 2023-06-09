/*
    I want a function called howMuchLeftOverCake that passes two variables numberOfPieces
    and numberOfPeople into it and figures out the remaining pieces of cake.
*/
function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
    var leftovers = numberOfPieces % numberOfPeople;

    //"No leftovers for you!" if there aren't any leftovers
    if(leftovers == 0){
        console.log("Leftovers from cake", leftovers);
        console.log("No leftovers for you!");
    //"You have some leftovers" if there are 2 pieces of cake or less    
    }else if (leftovers <=2) {
        console.log("Leftovers from cake=", leftovers);
        console.log("You have some leftovers");
    //"You have leftovers to share" if there are 3 - 5 pieces of cake left over
    }else if (leftovers >=3 && leftovers <= 5){
        console.log("Leftovers from cake=", leftovers);
        console.log("You have leftovers to share");
    //"Hold another party!" if there are more than 5 pieces of cake left over.
    }else{
        console.log("Leftovers from cake=", leftovers);
        console.log("Hold another party!");
    }
}
//how much left over cake if there is 12 pieces and 5 people
howMuchLeftOverCake(12,5);




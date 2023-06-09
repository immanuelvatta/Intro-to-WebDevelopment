//the rider's minimum height specified is 42 inches
var height = 42;
// the rider's minimum age is 10 years
var age = 10;    

//if kid > 10 && height > 42 ==> get on that ride kiddo!
// else ==> Sorry kiddo. Maybe next year!
if(height >=42){
    console.log("Get on that ride, kiddo!");
}
else{
    console.log("Sorry kiddo. Maybe next year.");
}

//stretch feature 1
//both condition must be met
if(age >=10 && height >= 42){
    console.log("Get on that ride, kiddo!");
}
else{
    console.log("Sorry kiddo. Maybe next year.");
}

//stretch feature 2
//only one condition needs to be met
if(age >=10 || height >=42){
    console.log("Get on that ride, kiddo!");
}
else{
    console.log("Sorry kiddo. Maybe next year.");
}
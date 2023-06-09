/*device that pops out a candy every time runner reaches 2 miles on treadmill 
//and stops giving out candy at mile 6
*/ 

var candy = 0;
var speed = 5.6;
for(var i = 0; i <=6; i++){
    if (i % 2 === 0 && i != 0 && speed > 5.5){
        candy++;
        console.log("At", i , "miles, you get a total of", candy ,"candy");
    }
}


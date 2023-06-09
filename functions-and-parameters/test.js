function findIndexOfX(){
	var array = [13, 15, -18, 29, 6, -4, -9, -10, 3, -7];
	var x = 6;
	for(var i =0;i<array.length; i++){
	    if(array[i] == x){
	        return i;
	    }
	}
	return -1//your code here
}

console.log(findIndexOfX());
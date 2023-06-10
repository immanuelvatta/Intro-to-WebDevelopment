//I want a latte if it's before 10 am
//I want a hot chocolate it's between 10 am and 4 pm
//I want ice cream between 4 pm - 10 pm.
//If it's after 10 pm, I don't want anything other than sleep!

//feature1
//Building off the MVP, if I'm up for ice cream, I want strawberry - 
//but only if it's Wednesday. Otherwise, I want vanilla.

//time goes from 0 - 23

//I want a latte if it's before 10 am
function myReward(time){
    if (time <10){
        return "I want a latte";
    //I want a hot chocolate it's between 10 am and 3 pm
    }else if (time >= 10 && time < 15){
        return "I want a hot chocolate" ;
    //if the time is between 3 pm - 6 pm, I want to have it pick either 
    //ice cream or hot chocolate depending on if the time is even or odd
    //Building off Feature 2, I want my options for the 3 pm - 6 pm slot to be a 
    //random selection: if the time is even, I want my selections to be 
    //ice cream, cookies, or candy. If the time is odd, 
    //I want my selections to be hot chocolate, tea, or cake.
    }else if (time >=15 && time < 18){
        if(time %2 == 0){
            var evenSelection = ['ice cream','cookies','candy'];
            return "I want " + evenSelection[Math.floor(Math.random() * evenSelection.length)];
            //return "I want ice cream";// feature 2
        }else{
            //return "I want hot chocolate"; //feature 2
            var oddSelection = ['hot chocolate','tea','cake'];
            return "I want " + oddSelection[Math.floor(Math.random() * oddSelection.length)];
            
        }
    // I want ice cream between 6 pm - 10 pm.
    }else if (time >=18 && time <= 22){
        return "I want ice cream";
    //If it's after 10 pm, I don't want anything other than sleep!
    }else{
        return "I don't want anything other than sleep";
    }
}

const now = new Date();
//let time = now.getHours();
let time = 16;
console.log(myReward(time));
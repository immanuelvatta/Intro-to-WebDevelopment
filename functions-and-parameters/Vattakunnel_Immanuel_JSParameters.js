/*
Using what you've learned about functions and parameters, 
create a function that, given a name, will say "good day" to that person by name.
*/

//function takes two arguments, person = name of person; time = time of day
function greet(person,time) {

    if (person == "Count Dooku")
    {
        console.log("I'm coming for you, Dooku!")
    }else{
        //console.log("Good",time+",",person+"!");
        console.log('Good %s, %s', time, person);
    }
    
}
greet("Anakin", "morning");
greet("Count Dooku");
greet("Tony", "evening");
/*let age = 20

if (age >= 18){
    console.log("you are an adult")
}

let marks = 90
if(marks >= 50){
    console.log("Congratulations! you have passed")
}
else{
    console.log("Sorry you have failed")
}*/

let age = 20
if (age <=18){
    console.log("you are eligible to vote")
}
else{
    console.log("you are not eligible to vote")
}

let marks = 67
if (marks >= 80){
    console.log("Excellent")
}
else if ( marks >= 70 && marks < 80){
    console.log("Very good")
}
else if ( marks >= 60 && marks < 70){
    console.log("Good")
}
else if ( marks >= 50 && marks < 60){
    console.log("Fair")
}
else { 
console.log("Needs improvement")
}

let isLoggedIn = true

if(!isLoggedIn){
    console.log("please log in first")
}

let choice = 2;
switch(choice){
    case 1:
        console.log("opening students registration...");
        break;
    case 2:
        console.log("opening student records...");
        break;
    case 3:
        console.log("opening examination results")
        break;
    default:
        console.log("invalid menu option.")
}


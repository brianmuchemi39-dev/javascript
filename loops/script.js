let goal = 5000;
let month = 1;
let saving = 100;
let total = 0;

while (total < goal){
    total = total + saving;
    if(saving > 500){
        console.log("Big month! ")
    }
    month = month + 1
    saving = saving + 50
    console.log(`Month ${month}: saved KES ${saving}`.)
    console.log(total);
    
}
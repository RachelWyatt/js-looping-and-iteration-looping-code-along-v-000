// Code your solutions in this file
function printBadges(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Welcome ${names[i]}! You are employee number ${[i]}!`);
    }
 
    return names;
}

function tailsNeverFails() {
    return Math.random() >= 0.5;
    
}
 
while (tailsNeverFails()) {
  
    console.log('You got X tails in a row!');
}
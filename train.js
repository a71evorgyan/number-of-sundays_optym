// Lesson 3 Homework
// We need a function that calculates the number of Sundays after a specific day for a given period(send via codepen).

// Example

// For n = 9 and startDay = "Saturday", the output should be
// howManySundays(n, startDay) = 2;
// For n = 7 and startDay = "Sunday", the output should be
// howManySundays(n, startDay) = 1

console.log("sMdkasdj");s

function howManySundays(n, startDay){
    let counter;
    let countOfSundays = 0;
    const indexOfStartDay = arrOfWeeks.indexOf(startDay);
    const arrOfWeeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"];
    if(arrOfWeeks.indexOf(startDay) == -1){
        return `${startDay} element doesn't Week day`;
    }
    for (let i = indexOfStartDay; i < arrOfWeeks.length; i++) {
        while(counter != n){
            if(arrOfWeeks[i] === "Sunday"){
                countOfSundays++;
            }
            counter++;
            console.log(`counter-> ${counter}`);
        }     
    }
    return `Count of Sundays is ${countOfSundays}`;
}

console.log(howManySundays(9, "Saturday"));
// module.exports = howManySundays();

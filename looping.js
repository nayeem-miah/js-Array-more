/**
 * Looping Techique 
 * 1.for loop 
 * 2.while loop
 * 3.Do-while loop >>>>ingore
 * 4.for in loop--------> it's used to: objects loop koer jonno
 * 5.for of loop ------>it's used to : array loop korer jonno
 * 
 */

const friends =['Elom','Bill', 'Mark', 'waren'];
for (const friend of friends){
    // console.log(friend);

}


// for loop used kora:
for(let i=0; i<friends.length; i++){
    console.log(i);
    console.log(friends[i]);
}

const number =[44, 55, 66, 77, 88, 99];
for(let i=0;i<number.length;i++){
    // console.log(number[i]);
}
let i=0;
while(i<number.length){
    console.log(number[i]);
    i++;
}



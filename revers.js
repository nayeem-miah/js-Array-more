// [8,7,6,5,4,3,1]
const number=[1,3,4,5,6,7,8];
// console.log(number);
// number.reverse();
// console.log(number);



// -----------for of ------>
// const rev_number=[];
// for(const num of number){
//     // console.log(num);
//     rev_number.unshift(num);
// }
// console.log(rev_number);

//---------- normal for loop use kobe>>>>>>>>>>>>>>
// const reversed=[];
// for(let i=0; i<number.length;i++){
//     console.log(number[i]);
//     reversed.unshift(number[i]);
    
    
//     console.log(reversed);
// }


// for loop use kore------------->
const rev =[];
for(let i=number.length-1;i>=0; i--){
    const num=number[i];
    console.log(num);
    rev.push(num);
    console.log(rev);
}


const revs=[];
const friends =['Elom','Bill', 'Mark', 'waren'];
for (const friend of friends){
    // console.log(friend);
    // revs.unshift(friend);
    // console.log(revs);

}
friends.reverse();
console.log(friends);
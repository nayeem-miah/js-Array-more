//  sort------>
const number =[6,4,3,8,9];
number.sort();
console.log(number);



const person=['rakib', 'sakib', 'tanvir'];
const sort=person.sort();
console.log(sort);

const person1=['rakib', 'sakib', 'tanvir','Rakib','anis','Anis'];//case sencative so CAPTAL OR smammler different this case ASCII number binary neyom mentain kora
console.log(person1.sort());


// sorting >>>type of sorting:
// 1.Ascending --------->smaller to larger:[1,2,4,5,6,7];
// 2.Descending --------> larger to smaller :[7,6,5,4,3,2,1];
// console.log(number) =value change

// 1.Ascending ------>>
let num=[6,4,3,8,9,4,54];//alfabatic sorting operation
// let num_asc=num.sort(); not working 
let num_asc=[...num].sort(function (a,b){return a-b});
let num_dsc=[...num].sort(function(a,b){return b-a})
console.log(num_asc);
console.log(num_dsc);





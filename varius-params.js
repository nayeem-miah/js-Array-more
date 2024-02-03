/**
 * for given string tell me wather it has even numbers or characters or not
 */
function evenSizedStrings(str){
    const size=str.length;
    console.log(str,size);
    if(size%2===0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}
// evenSizedStrings("Dhaka");
// evenSizedStrings('faka');


function doubleOrTriple(number,doDouble){
    if(doDouble===true)
    {
        const result=number*2;
        return result;

    }
    else{
        const result=number*3;
        return result;
    }
}
// console.log(doubleOrTriple(5,true));
// console.log(doubleOrTriple(5,false));

function numberOfElement(number){
    const len=number.length;
    return len;
}
// let num= numberOfElement([12,34,56,67,887,89]) ;
// console.log(num);

function getAge(person){
    const age=person.age;
    return age;
}
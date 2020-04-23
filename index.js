// add solution here
function theBeatlesPlay(musicians,instruments){
let array = [];
  for(let i = 0; i <musicians.length; i++){
   array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(array){
let newArray = [];
let i = 0
  while(newArray.length < array.length ){
    newArray.push(array[i] + '!!!');
    i++;
  }
  return newArray;
}

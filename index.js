// add solution here
function theBeatlesPlay(musicians,instruments){
  let results = [];
  for(let i = 0; i <musicians.length; i++){
    results += `${musicians} plays the ${instruments}`
  }
  return results;
}

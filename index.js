// add solution here
function theBeatlesPlay(musicians,instruments){
results = [;]
  for(let i = 0; i <musicians.length; i++){
   results.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return results;
}

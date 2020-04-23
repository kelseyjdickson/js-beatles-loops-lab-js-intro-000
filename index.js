// add solution here
function theBeatlesPlay(musicians,instruments){

  for(let i = 0; i <musicians.length; i++){
    let results +=`${musicians[i]} plays ${instruments[i]}, `
  }
  return results;
}
'John Lennon plays Guitar, Paul McCartney plays Bass Guitar, George Harrison plays Lead Guitar
, Ringo Starr plays Drums,

'John Lennon plays Guitar', 'Paul McCartney plays Bass Guitar', 'George Har
rison plays Lead Guitar', 'Ringo Starr plays Drums'

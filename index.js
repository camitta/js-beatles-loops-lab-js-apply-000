// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for (let i = 0; i < musicians.length; i++) {
    let currentString = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(currentString);
  }
  return arr;
}

function johnLennonFacts(facts) {
  let i = 0;
  while(i < facts.length) {
    facts.splice([i], 1, `${facts[i]}!!!`; 
    i++;
  }
  return facts;
}
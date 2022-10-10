let word = prompt("Please enter your scrabbled word for calculation of your score:  ",);
const score = (word) => {
  let oneScore = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T", "a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
  let twoScore = ["D", "G", "d", "g"];
  let threeScore = ["B", "C", "M", "P", "b", "c", "m", "p"];
  let fourScore = ["F", "H", "V", "W", "Y", "f", "h", "v", "w", "y"];
  let fiveScore = ["K", "k"];
  let eightScore = ["J", "X", "j", "x"];
  let tenScore = ["Q", "Z", "q", "z"];
  let score = 0;
  const charInWord = [];
  for(let ch of word){
    charInWord.push(ch)
  }
  // console.log(charInWord);
  
  const countedcharInWord = charInWord.reduce((allcharInWord, name) => { 
  const currCount = allcharInWord[name] ?? 0;
  return {
    ...allcharInWord,
    [name] : currCount + 1,
  };
}, []);
// console.log(countedcharInWord)
  for (const [key, value] of Object.entries(countedcharInWord)) {
    const found1 = oneScore.find(element => element == key);
    const found2 = twoScore.find(element => element == key);
    const found3 = threeScore.find(element => element == key);
    const found4 = fourScore.find(element => element == key);
    const found5 = fiveScore.find(element => element == key);
    const found6 = eightScore.find(element => element == key);
    const found7 = tenScore.find(element => element == key);
    if(key === found1){
      score = score + (value *1 )
    } else if (key === found2){
      score = score + (value * 2);
    } else if (key === found3){
      score = score + (value * 3);
    } else if (key === found4){
      score = score + (value * 4);
    } else if (key === found5){
      score = score + (value * 5);
    } else if (key === found6){
      score = score + (value * 8);
    } else if (key === found7){
      score = score + (value * 10);
    }

  }
  return (score)
    };
score(word)
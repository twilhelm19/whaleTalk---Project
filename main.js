//Project: Whale Talk 

var input = "turpentine and turtles"

const vowels = ['a', 'e', 'i', 'o', 'u']; 

var resultArray = []; 

for (let i = 0; i < input.length; i++) {
    var letter = input[i].toLowerCase(); 
     if(letter === 'e') {
        resultArray.push(letter); 
    }
    if (letter === 'u') {
        resultArray.push(letter); 
    }
    for (let j = 0; j < vowels.length; j++) {
        var whaleVowel = vowels[j];  
        if(letter === whaleVowel) {
            resultArray.push(whaleVowel); 
        }
    }
}

console.log(resultArray); 

var resultString = resultArray.join('').toUpperCase();

console.log(resultString); 

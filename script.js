//fetch wordlist
fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
  headers: {
    "X-Rapidapi-Key": "d7df31f2fbmsh700ac593d4561f6p16fd74jsn950f1e69cca8"
  }
}).then(function (result) {
    return result.json();
}).then(function(json){
    console.log(json);
    hangMan(json);
}) 



function hangMan(word){
    // Get random word
    var word = word.word;
    
    
    // get length of word
    var length = word.length;
    
    for(var i = 0; i < length; i++){
        var wordContainer = document.getElementById("word");
        var letterContainer = document.createElement("div");
        var letter = word[i];
        
        letterContainer.innerHTML = letter;
        letterContainer.setAttribute("class", "letters");
        
        //make html
        wordContainer.appendChild(letterContainer);
    } // END FOR LOOP  
    
    
}

    

// get user Input
document.getElementById("guessBtn").addEventListener("click", guessLetter);

function guessLetter(){
    var guessed = document.getElementById("guess").value;
        console.log(guessed);
}


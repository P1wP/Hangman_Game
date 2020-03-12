// WORDS CHNAGE TO API IN FUTURE
var words = ["COOL", "nice", "JavaScript", "Express", "victory"];

// WORD API
/*fetch wordlist
fetch("https://xkubist-random-word-v1.p.rapidapi.com/run.cgi", {
  headers: {
      "X-RapidAPI-Host": "xkubist-random-word-v1.p.rapidapi.com",
      "X-Rapidapi-Key": "d7df31f2fbmsh700ac593d4561f6p16fd74jsn950f1e69cca8"
  }
}).then(function (result) {
    return result.json();
}).then(function(json){
    console.log(json);
    
})
*/

//fetch wordlist


//DOM ELEMENTS
var domWord = document.getElementById("word");
var btn = document.getElementById("btn");
var wrong = document.getElementById("wrong");
var life = document.getElementById("lives");
var keyboard = document.getElementById("keyboard");


//CORRECT LETTERS
var correct = [];
//LIFE COUNT
var count = 5;


/*//CLICK EVENTS
btn.addEventListener("click", guessLetter);
*/

// TEST KEYBOARD LETTER
var letter = "";

// GET KEY FROM ANDROID KEYBOARD
if( /Android|iPad|iPhone|iPod /i.test(navigator.userAgent) ) {
    //Show keyboard
    keyboard.style.display = "block";
    
    var buttons = document.querySelectorAll(".letter");
    for (var i = 0; i < buttons.length; i++) {
        var self = buttons[i];

        self.addEventListener('click', function (event) {  
            // prevent browser's default action
            event.preventDefault();

            // call your awesome function here
            MyAwesomeFunction(this); // 'this' refers to the current button on for loop
        }, false);
    }
}
else{
    keyboard.style.display = "none";
}// END ANDROIND KEYPRESS


function MyAwesomeFunction(a){
    console.log(a.id);
    var keyPressedM = a.id.toUpperCase();
    letter = keyPressedM;
    guessLetter();
}

// GET PRESSED KEY
document.addEventListener('keypress', logKey);

function logKey(e) {
    console.log(e);
    var aToZ = /[a-zA-Z]/;
    var keyPressed = e.key.toUpperCase();
    console.log(keyPressed);
    
    if (aToZ.test(keyPressed)){
        if(correct.includes(keyPressed)){
            alert("You have tried this letter before");
            return;
        }
        else{
            letter = keyPressed;
        }
        
        guessLetter();
    }
    
}

//RANDOM WORD
var theWord = "";
var word = Math.floor(Math.random() * words.length);
function randomWord(){
    theWord = words[word].toUpperCase();
    console.log(theWord); // TO BE REMOVED
    
    for ( var i = 0; i < theWord.length; i++){
        domWord.innerHTML += "<span id=" + '"letter_' + i + '">_ </span>';
    }
    var count = 5;
    life.innerHTML = "lives: " + count;
}

//GUESSED LETTER
var allGuessed = "";
function guessLetter(){
    allGuessed += letter;
    //guessed.innerHTML = "Guessed letters: " + allGuessed;
    correctLetter();
    //letter = "";
}


var wrongGuess = ""; 
//CHECK CORRECT letter
function correctLetter(){
    // CORRECT LETTER
    if(theWord.includes(letter)){
        for (var i = 0; i < theWord.length; i++){
            if(theWord[i] === letter){
                domWord.children[i].innerText = letter;
                correct += letter;
                wrongGuess = "";
            } 
        }
    }
    // WRONG LETTER
    else if(!theWord.includes(letter)){
        wrongGuess += letter;
        // LOSE A LIFE
        lives();
    }
    // SHOW WRONG GUESSES
    wrong.innerHTML += wrongGuess.slice(- theWord.length + theWord.length - 1);
    
    // CHECK WIN
    win();
}


// LOSE A LIFE
function lives(){
    count--;
    console.log(count);
    life.innerHTML = "lives: " + count;
    if(count === 0){
        alert("YOU ARE DEAD!")
        //REMOVE CURRENT WORD
        
        
        // START NEW GAME
        location.reload();
        
    }
   
}

// CHECK WIN
function win(){
 
    var ar1 = correct.split("").sort();
    console.log("correct: "+ar1);
    var ar2 = theWord.split("").sort();
    console.log("WORD: "+ar2);

    if(ar1.length === ar2.length){
        alert("WINNING");
        // START NEW GAME
        location.reload();
    }
}



//START GAME
randomWord();

/* 

IMPLEMENT VISUAL GRAPHICS
IMAGES FOR HANGMAN

-------------------LOSS---------------

https://www.shutterstock.com/image-vector/masked-executioner-crossed-axes-logo-hangman-1016391820?id=1016391820&irgwc=1&utm_medium=Affiliate&utm_campaign=Freepik+Company%2C+S.L.&utm_source=39422&utm_term=5d13c805da08f.5d13c805da090

----------------LIVES----------------

https://www.shutterstock.com/image-vector/punishment-torture-justice-death-sentence-execution-104159774?id=104159774&irgwc=1&utm_medium=Affiliate&utm_campaign=Freepik+Company%2C+S.L.&utm_source=39422&utm_term=5d13c805da04f.5d13c805da050

------------------WIN------------------
https://www.shutterstock.com/image-vector/celebration-poses-gestures-artwork-depicts-people-657883912

*/


//https://www.flaticon.com/free-icon/man-on-a-chair-before-suicide-with-a-hanging-rope_44003#term=hangman&page=1&position=1

//https://www.flaticon.com/free-icon/hangman_43980#term=hangman&page=1&position=3




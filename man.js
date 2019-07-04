// WORDS CHNAGE TO API IN FUTURE
var words = ["COOL", "nice", "asshole", "Express", "victory"];

//DOM ELEMENTS
var domWord = document.getElementById("word");
//var letter = document.getElementById("letter");
var btn = document.getElementById("btn");
var wrong = document.getElementById("wrong");
var life = document.getElementById("lives");

//CORRECT LETTERS
var correct = [];
//LIFE COUNT
var count = 5;


/*//CLICK EVENTS
btn.addEventListener("click", guessLetter);
*/

// TEST KEYBOARD LETTER
var letter = "";

document.addEventListener('keypress', logKey);

function logKey(e) {
    var aToZ = /[a-zA-Z]/;
    var keyPressed = e.key.toUpperCase();
    console.log(keyPressed);
    if (aToZ.test(keyPressed)){
        letter = keyPressed;
        guessLetter();
    }
    
}

//FUNCTIONS

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
    wrong.innerHTML += wrongGuess.slice(-theWord.length + theWord.length - 1);
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
    /*
    TO DO !!!!!!!!!
    
    splitt correct and word into array
    sort array in alphabaeticorder
    comapre arrays to see if they match
    */
    let ar1 = correct.split("");
    let ar2 = theWord.split("");
    if(ar1.sort === ar2.sort && ar1.length === ar2.length){
        alert("WINNING");
        // START NEW GAME
        location.reload();
    }
}


//RUN FUNCTION
randomWord();

/* 
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




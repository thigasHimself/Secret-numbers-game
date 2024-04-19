let blacklist = [];
let limit = 10;
let secretNumber=generateRandomNumber();
let attempts = 1;

function exhibitText(tag,text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
    responsiveVoice.speak(text, 'UK English Male', {rate:1.2});
}

exhibitInitMessage();

function verifyGuess() {
    let guess=document.querySelector('input').value;
    let attemptWord = attempts==1?`attempt`:`attempts`;
    if(guess==secretNumber){
        exhibitText(`h1`, `You guessed it! 🎉`);
        let congratulations=`Congratulations! You took ${attempts} ${attemptWord}!`;
        exhibitText(`p`,congratulations);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        clearCampo()
        attempts++;
        let compare;
        if (guess>secretNumber){
            compare=`smaller`;
        } else {compare=`greater`;}
        exhibitText(`h1`, `Not quite!`);
        let tryAgain=`The number is ${compare} than that. Try again!`;
        exhibitText(`p`,tryAgain);
    }
}

function generateRandomNumber() {
    let result = parseInt (Math.random()*limit+1);
    if (blacklist.length == limit) {
        blacklist = [];
    }
    if (blacklist.includes(result)) {
        return generateRandomNumber(limit);
    } else {
        blacklist.push(result);
        console.log(blacklist);
        return result;
    }
}

function clearCampo(){
    guess = document.querySelector(`input`);
    guess.value = '';
}

function newGame(){
    secretNumber = generateRandomNumber();
    attempts = 1;
    console.log(secretNumber);
    exhibitInitMessage();    
    clearCampo();
    document.getElementById(`reiniciar`).setAttribute(`disabled`,true)
}

function exhibitInitMessage() {
    exhibitText('h1',`Secret Numbers Game`);
    exhibitText('p',`Choose a number between 1 and ${limit}`);
}

//EXERCISES------------------------------------

//3.1
// function fok(){
//     let height = prompt(`What's your height in m?`);
//     let weight = prompt(`What's your weight in kg?`);
//     let result = weight/(height*height);
//     console.log(result)
//     return result
// }


//3.2
// function fok(){
//     let number = prompt(`Choose a number to get a factorial for:`);
//     let result = 1;
//     while (number>1){
//         result = result * number;
//         number--;
//     }
//     console.log(result);
//     return result;
// }

//3.3
// function fok(){
//     let value = prompt(`Value:`);
//     let result = value*4.8;
//     console.log(result);
//     return result;
// }

//3.4
// function fok(){
//     let height = prompt(`Insert height:`);
//     let width = prompt(`Insert width:`);
//     let result = height * width;
//     console.log(result);
//     return result;
// }

//3.5
// function fok(){
//     let radius = prompt(`Insert radius:`);
//     let area = radius * radius * 3.14;
//     let perimeter = 6.28 * radius;
//     let result = `The area of the circle is ${area}u^2 and the perimeter is ${perimeter}u`;
//     console.log(result);
//     return result;
// }

//3.6
// function fok(){
//     let value = prompt(`Value:`);
//     let count = 1
//     let answer = value
//     while (count<10) {
//         count++
//         let result = value * count
//         answer = `${answer}, ${result}`
//     }
//     console.log(answer);
//     return answer;
// }
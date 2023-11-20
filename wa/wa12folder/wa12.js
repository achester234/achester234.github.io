const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

const questionTxt = document.querySelector('#js-quote-text');
let answerTxt = document.querySelector('#js-answer-text');

let answer = '';


const endpoint = 'https://official-joke-api.appspot.com/random_joke';

async function getQuote() {
   
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);

        
        }
        const json = await response.json();

        console.log(json)
        
        displayQuote(json['setup']);
        answer = json['punchline'];
        answerTxt.textContent = '';
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question) {
    questionTxt.textContent = question;
}

function displayAnswer() {
    answerTxt.textContent = answer;
}

getQuote();


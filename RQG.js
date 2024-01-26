// varaible

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '“In three words I can sum up everything I have learned about life: it goes on.”',
    person: 'Robert Frost'
}, {
    quote: '“We accept the love we think we deserve.”',
    person: 'Stephen Chbosky'
}, {
    quote: '"insanity is doing the same thing, over and over again, but expecting different results.”',
    person: 'Narcotics Anonymous'
}, {
    quote: '“Be yourself; everyone else is already taken.”',
    person: 'Oscar Wilde'
}, {
    quote: '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
    person: 'Albert Einstein'
}, {
    quote: '“In three words I can sum up everything I have learned about life: it goes on.”',
    person: ' Robert Frost'
}, {
    quote: '“If you tell the truth, you do not have to remember anything.”',
    person: 'Mark Twain'
}, {
    quote: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
    person: 'Mahatma Gandhi'
}, {
    quote: '“It is better to be hated for what you are than to be loved for what you are not.”',
    person: ' Andre Gide'
}, {
    quote: '“Knowledge itself is power!”',
    person: 'Sir Frances Bacon'
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.lenght);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
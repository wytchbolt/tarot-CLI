#!/usr/bin/env node

import inquirer from 'inquirer';

const deck = [
  { name: 'The Fool' },
  { name: 'The Magician' },
  { name: 'The High Priestess' },
  { name: 'The Empress' },
  { name: 'The Emperor' },
  { name: 'The Hierophant' },
  { name: 'The Lovers' },
  { name: 'The Chariot' },
  { name: 'Strength' },
  { name: 'The Hermit' },
  { name: 'Wheel of Fortune' },
  { name: 'Justice' },
  { name: 'The Hanged Man' },
  { name: 'Death' },
  { name: 'Temperance' },
  { name: 'The Devil' },
  { name: 'The Tower' },
  { name: 'The Star' },
  { name: 'The Moon' },
  { name: 'The Sun' },
  { name: 'Judgement' },
  { name: 'The World' },
  { name: 'Ace of Wands' },
  { name: 'Two of Wands' },
  { name: 'Three of Wands' },
  { name: 'Four of Wands' },
  { name: 'Five of Wands' },
  { name: 'Six of Wands' },
  { name: 'Seven of Wands' },
  { name: 'Eight of Wands' },
  { name: 'Nine of Wands' },
  { name: 'Ten of Wands' },
  { name: 'Page of Wands' },
  { name: 'Knight of Wands' },
  { name: 'Queen of Wands' },
  { name: 'King of Wands' },
  { name: 'Ace of Cups' },
  { name: 'Two of Cups' },
  { name: 'Three of Cups' },
  { name: 'Four of Cups' },
  { name: 'Five of Cups' },
  { name: 'Six of Cups' },
  { name: 'Seven of Cups' },
  { name: 'Eight of Cups' },
  { name: 'Nine of Cups' },
  { name: 'Ten of Cups' },
  { name: 'Page of Cups' },
  { name: 'Knight of Cups' },
  { name: 'Queen of Cups' },
  { name: 'King of Cups' },
  { name: 'Ace of Swords' },
  { name: 'Two of Swords' },
  { name: 'Three of Swords' },
  { name: 'Four of Swords' },
  { name: 'Five of Swords' },
  { name: 'Six of Swords' },
  { name: 'Seven of Swords' },
  { name: 'Eight of Swords' },
  { name: 'Nine of Swords' },
  { name: 'Ten of Swords' },
  { name: 'Page of Swords' },
  { name: 'Knight of Swords' },
  { name: 'Queen of Swords' },
  { name: 'King of Swords' },
  { name: 'Ace of Pentacles' },
  { name: 'Two of Pentacles' },
  { name: 'Three of Pentacles' },
  { name: 'Four of Pentacles' },
  { name: 'Five of Pentacles' },
  { name: 'Six of Pentacles' },
  { name: 'Seven of Pentacles' },
  { name: 'Eight of Pentacles' },
  { name: 'Nine of Pentacles' },
  { name: 'Ten of Pentacles' },
  { name: 'Page of Pentacles' },
  { name: 'Knight of Pentacles' },
  { name: 'Queen of Pentacles' },
  { name: 'King of Pentacles' },
  { name: 'The Fool Reversed' },
  { name: 'The Magician Reversed' },
  { name: 'The High Priestess Reversed' },
  { name: 'The Empress Reversed' },
  { name: 'The Emperor Reversed' },
  { name: 'The Hierophant Reversed' },
  { name: 'The Lovers Reversed' },
  { name: 'The Chariot Reversed' },
  { name: 'Strength Reversed' },
  { name: 'The Hermit Reversed' },
  { name: 'Wheel of Fortune Reversed' },
  { name: 'Justice Reversed' },
  { name: 'The Hanged Man Reversed' },
  { name: 'Death Reversed' },
  { name: 'Temperance Reversed' },
  { name: 'The Devil Reversed' },
  { name: 'The Tower Reversed' },
  { name: 'The Star Reversed' },
  { name: 'The Moon Reversed' },
  { name: 'The Sun Reversed' },
  { name: 'Judgement Reversed' },
  { name: 'The World Reversed' },
  { name: 'Ace of Wands Reversed' },
  { name: 'Two of Wands Reversed' },
  { name: 'Three of Wands Reversed' },
  { name: 'Four of Wands Reversed' },
  { name: 'Five of Wands Reversed' },
  { name: 'Six of Wands Reversed' },
  { name: 'Seven of Wands Reversed' },
  { name: 'Eight of Wands Reversed' },
  { name: 'Nine of Wands Reversed' },
  { name: 'Ten of Wands Reversed' },
  { name: 'Page of Wands Reversed' },
  { name: 'Knight of Wands Reversed' },
  { name: 'Queen of Wands Reversed' },
  { name: 'King of Wands Reversed' },
  { name: 'Ace of Cups Reversed' },
  { name: 'Two of Cups Reversed' },
  { name: 'Three of Cups Reversed' },
  { name: 'Four of Cups Reversed' },
  { name: 'Five of Cups Reversed' },
  { name: 'Six of Cups Reversed' },
  { name: 'Seven of Cups Reversed' },
  { name: 'Eight of Cups Reversed' },
  { name: 'Nine of Cups Reversed' },
  { name: 'Ten of Cups Reversed' },
  { name: 'Page of Cups Reversed' },
  { name: 'Knight of Cups Reversed' },
  { name: 'Queen of Cups Reversed' },
  { name: 'King of Cups Reversed' },
  { name: 'Ace of Swords Reversed' },
  { name: 'Two of Swords Reversed' },
  { name: 'Three of Swords Reversed' },
  { name: 'Four of Swords Reversed' },
  { name: 'Five of Swords Reversed' },
  { name: 'Six of Swords Reversed' },
  { name: 'Seven of Swords Reversed' },
  { name: 'Eight of Swords Reversed' },
  { name: 'Nine of Swords Reversed' },
  { name: 'Ten of Swords Reversed' },
  { name: 'Page of Swords Reversed' },
  { name: 'Knight of Swords Reversed' },
  { name: 'Queen of Swords Reversed' },
  { name: 'King of Swords Reversed' },
  { name: 'Ace of Pentacles Reversed' },
  { name: 'Two of Pentacles Reversed' },
  { name: 'Three of Pentacles Reversed' },
  { name: 'Four of Pentacles Reversed' },
  { name: 'Five of Pentacles Reversed' },
  { name: 'Six of Pentacles Reversed' },
  { name: 'Seven of Pentacles Reversed' },
  { name: 'Eight of Pentacles Reversed' },
  { name: 'Nine of Pentacles Reversed' },
  { name: 'Ten of Pentacles Reversed' },
  { name: 'Page of Pentacles Reversed' },
  { name: 'Knight of Pentacles Reversed' },
  { name: 'Queen of Pentacles Reversed' },
  { name: 'King of Pentacles Reversed' },
];

const welcome = `How will you change the course of Fate today?`;

console.log(welcome);

const chooseSpread = [
  {
    type: 'list',
    name: 'spread',
    message: 'Choose your spread:',
    choices: ['Daily card', 'One card', 'Three cards', 'Past/Present/Future', 'Celtic Cross'],
    filter: function(val) {
      return val;
    }
  }
]

function displayCard(x) {
  console.log(deck[x].name);
}

function dealCard(message) {
  setTimeout(function() {
    console.log(message);
    setTimeout(function() {
      const dealtCard = ~~(Math.random() * (78));
      displayCard(dealtCard);
    }, 1000);
  }, 1000);
}

function displaySpread(type) {
  console.log(type);
  switch (type) {
    case 'One card':
      dealCard('Your card is:');
      setTimeout(() => {
        end();
      }, 3000);
      return;
    case 'Daily card':
      dealCard('Your card of the day is:');
      setTimeout(() => {
        end();
      }, 3000);
      return;
    case 'Three cards':
      dealCard('First card:');
      setTimeout(function() {
        dealCard('Second card:');
      }, 2000);
      setTimeout(function() {
        dealCard('Third card:');
      }, 4000);
      setTimeout(() => {
        end();
      }, 7000);
      return;
    case 'Past/Present/Future':
      dealCard('Past:');
      setTimeout(function() {
        dealCard('Present:');
      }, 2000);
      setTimeout(function() {
        dealCard('Future:');
      }, 4000);
      setTimeout(() => {
        end();
      }, 7000);
      return;
    case 'Celtic Cross':
      dealCard('The Self:');
      setTimeout(function() {
        dealCard('The Problem:');
      }, 2000);
      setTimeout(function() {
        dealCard('The Past:');
      }, 4000);
      setTimeout(function() {
        dealCard('The Future:');
      }, 6000);
      setTimeout(function() {
        dealCard('As Above:');
      }, 8000);
      setTimeout(function() {
        dealCard('So Below:');
      }, 10000);
      setTimeout(function() {
        dealCard('Internal influences:');
      }, 12000);
      setTimeout(function() {
        dealCard('External influences:');
      }, 14000);
      setTimeout(function() {
        dealCard('Hopes & Fears:');
      }, 16000);
      setTimeout(function() {
        dealCard('The Outcome:');
      }, 18000)
      setTimeout(() => {
        end();
      }, 21000);
      return;
  }
}

function run() {
  inquirer.prompt(chooseSpread).then(answer => {
    const type = answer.spread;
    displaySpread(type);
  });
}

const exit = [
  {
    type: 'confirm',
    name: 'exit',
    message: 'Finished for now?',
    default: true
  }
]

function end() {
  inquirer.prompt(exit).then(answer => {
    if (answer.exit) {
      setTimeout(function() {
        console.log('Farewell.');
      }, 1000);
      return;
    } else {
      run();
    }
  });
}

run();

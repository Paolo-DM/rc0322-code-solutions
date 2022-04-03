const players = [];

class Deck {
  constructor() {
    this.deck = [];
    const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (const suit of suits) {
      for (const rank of ranks) {
        this.deck.push(new Card(rank, suit));
      }
    }
  }

  shuffleDeck() {
    this.deck = _.shuffle(this.deck);
  }

  dealCards(num) {
    const drawedCards = _.takeRight(this.deck, num);
    this.deck = _.dropRight(this.deck, num);
    return drawedCards;
  }
}

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  getCardValue() {
    if (this.rank === 'Ace') {
      return 11;
    } else if (
      this.rank === 'Jack' ||
      this.rank === 'Queen' ||
      this.rank === 'King'
    ) {
      return 10;
    } else {
      return this.rank;
    }
  }
}

class Player {
  constructor(name, hand) {
    this.name = name;
    this.hand = hand;
  }

  getHandScore() {
    let score = 0;
    for (const card of this.hand) {
      score += card.getCardValue();
    }
    return score;
  }

  printHand() {
    let handString = '';
    for (let i = 0; i < this.hand.length; i++) {
      handString += `${this.hand[i].rank} of ${this.hand[i].suit}`;
      if (i !== this.hand.length - 1) {
        handString += ', ';
      }
    }
    return handString;
  }
}

function runGame(players, cardsInHand) {
  const deck = new Deck();
  deck.shuffleDeck();
  players.push(
    new Player('John', deck.dealCards(cardsInHand)),
    new Player('Alice', deck.dealCards(cardsInHand)),
    new Player('Luca', deck.dealCards(cardsInHand)),
    new Player('Maria', deck.dealCards(cardsInHand))
  );
  const winner = getWinner(players);
  console.log(
    `The winner is ${winner.name} with the hand: ${winner.printHand()}`
  );
}

function getWinner(players) {
  let winner = players[0];
  for (const player of players) {
    if (player.getHandScore() > winner) {
      winner = player;
    }
  }
  return winner;
}

runGame(players, 3);

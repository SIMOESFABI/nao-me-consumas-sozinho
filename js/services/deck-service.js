const DECK = [
    {cardCode:"AH",cardMessage:"Choose someone to drink with."
    },
    {
      cardCode:"2H",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"3H",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"4H",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"5H",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"6H",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"7H",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"8H",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"9H",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"10H",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"JH",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"QH",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"KH",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"AS",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"2S",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"3S",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"4S",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"5S",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"6S",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"7S",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"8S",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode:"9S",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "10S",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "JS",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "QS",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "KS",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "AD",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "2D",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "3D",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "4D",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "5D",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "6D",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "7D",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "8D",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "9D",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "10D",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "JD",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "QD",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "KD",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "AC",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "2C",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "3C",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "4C",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "5C",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "6C",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "7C",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "8C",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "9C",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "10C",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "JC",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "QC",
      cardMessage: "Choose someone to drink with."
    },
    {
      cardCode: "KC",
      cardMessage: "Choose someone to drink with."
    }
  ];

let cardAvailable = ["AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH","AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS","AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD","AC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC"];
let usedCards = [];

function getCard(cb){

    const cardIndex = Math.floor(Math.random() * cardAvailable.length);
    if(cardAvailable.length == 1){
        resetDeck();
    }

    let code = cardAvailable[cardIndex];
    let card;
    
    
    card = DECK.find(function(entry){
        return entry.cardCode == code});

    cb(card);

    usedCards.push(cardAvailable.splice(cardIndex,1)[0])
}

function cardsLeft(){
    return cardAvailable.length;
}

function resetDeck(){
    alert("Deck used.\nWe will reset the deck!")
    usedCards.forEach(element => {
        cardAvailable.push(element)
    });
    usedCards = [];
}

export { getCard, cardsLeft };

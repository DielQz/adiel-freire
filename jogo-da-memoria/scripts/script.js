
'use strict';

const front = 'card_front';
const back = 'card_back';
const CARD = 'card';
const ICON = 'icon';

startGame();

function startGame() {
    initializeCards(game.createCardsFromTechs());
}

function initializeCards() {
    let gameBoard = document.getElementById('gameBoard');
    game.cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function createCardContent(card, cardElement) {
    createCardFace(front, card, cardElement);
    createCardFace(back, card, cardElement);
}

function createCardFace(face, card, element) {
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);

    if (face === front) {
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = './images/' + card.icon + '.png';
        cardElementFace.appendChild(iconElement);
    } else {
        cardElementFace.innerHTML = '&lt/&gt';
    }

    element.appendChild(cardElementFace);
}

function flipCard() {
    if (game.setCard(this.id)) {
        this.classList.add('flip');

        if (game.secondCard) {
            if (game.checkMatch()) {
                game.firstCard.flipped = true;
                game.secondCard.flipped = true;
                game.clearCards();

                if (game.checkGameOver()) {
                    document.getElementById('gameOver').style.display = 'flex';
                }

            } else {
                setTimeout(() => {
                    let firstCardView = document.getElementById(game.firstCard.id);
                    let secondCardView = document.getElementById(game.secondCard.id);

                    firstCardView.classList.remove('flip');
                    secondCardView.classList.remove('flip');

                    game.clearCards();
                }, 1000);
            }
        }
    }
}

function restart() {
    game.clearCards();
    document.getElementById('gameBoard').innerHTML = '';
    startGame();
    document.getElementById('gameOver').style.display = 'none';
}

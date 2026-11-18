// PEGAR TODAS AS CARTAS

const cards = document.querySelectorAll('.memory-card');




let hasFlippedCard = false;
let lockBoard = false;

let firstCard = null;
let secondCard = null;




function flipCard() {

    if (lockBoard) {
        return;
    }


    if (this === firstCard) {
        return;
    }


    this.classList.add('flip');

    if (!hasFlippedCard) {

        hasFlippedCard = true;

        firstCard = this;

        return;
    }


    secondCard = this;

    lockBoard = true;



    checkForMatch();
}



function checkForMatch() {


    let isMatch =
        firstCard.dataset.framework ===
        secondCard.dataset.framework;



    isMatch ? disableCards() : unflipCards();
}



function disableCards() {


    firstCard.removeEventListener('click', flipCard);



    secondCard.removeEventListener('click', flipCard);



    resetBoard();
}


function unflipCards() {


    setTimeout(() => {

        firstCard.classList.remove('flip');

        secondCard.classList.remove('flip');



        resetBoard();

    }, 1500);
}


// RESETAR O TABULEIRO

function resetBoard() {


    hasFlippedCard = false;

    lockBoard = false;


    firstCard = null;

    secondCard = null;
}


(function shuffle() {

    cards.forEach(card => {



        let randomPos =
            Math.floor(Math.random() * 12);



        card.style.order = randomPos;

    });

})();


cards.forEach(card => {

    card.addEventListener('click', flipCard);

});
document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
    {
        name: 'shield',
        img: 'images/shield.jpg'
    },
    {
        name: 'shield',
        img: 'images/shield.jpg'
    },
    {
        name: 'navi',
        img: 'images/navi.jpg'
    },
    {
        name: 'navi',
        img: 'images/navi.jpg'
    },
    {
        name: 'rupee',
        img: 'images/rupee.jpg'
    },
    {
        name: 'rupee',
        img: 'images/rupee.jpg'
    },
    {
        name: 'newheart',
        img: 'images/newheart.jpg'
    },
    {
        name: 'newheart',
        img: 'images/newheart.jpg'
    },
    {
        name: 'dekunuts',
        img: 'images/dekunuts.jpg'
    },
    {
        name: 'dekunuts',
        img: 'images/dekunuts.jpg'
    },
    {
        name: 'slingshot',
        img: 'images/slingshot.jpg'
    },
    {
        name: 'slingshot',
        img: 'images/slingshot.jpg'
    },
    {
        name: 'bomb',
        img: 'images/bomb.jpg'
    },
    {
        name: 'bomb',
        img: 'images/bomb.jpg'
    },
    // {
    //     name: 'potion',
    //     img: 'images/potion.jpg'
    // },
    // {
    //     name: 'boomerang',
    //     img: 'images/boomerang.jpg'
    // },
    // {
    //     name: 'bombchu',
    //     img: 'images/bombchu.jpg'
    // },
    // {
    //     name: 'gem',
    //     img: 'images/gem.jpg'
    // },
    // {
    //     name: 'heal',
    //     img: 'images/heal.jpg'
    // },
   
    // {
    //     name: 'magicbean',
    //     img: 'images/magicbean.jpg'
    // },
    // {
    //     name: 'halfheart',
    //     img: 'images/halfheart.jpg'
    // },
    {
        name: 'triforce',
        img: 'images/triforce.jpg'
    },
    {
        name: 'blank',
        img: 'images/blank.jpg'
    },
]

console.log(cardArray.length)

const grid = document.querySelector('.grid')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {        
        let card = document.createElement('img')        
        card.setAttribute('src', './images/triforce.jpg')       
        card.setAttribute('data-id', i)       
        card.addEventListener('click', flipcard)        
        grid.appendChild(card)
    }
}

function checkForMatch() {

    let cards = document.querySelectorAll('img')
    const firstCardId = cardsChosenId[0]
    const secondCardId = cardsChosenId[1]

    if (cardsChosen[0] === cardsChosen [1]) {
        console.log("match!", cards, firstCardId, secondCardId)
        cards[firstCardId].setAttribute('src', './images/blank.jpg')
        cards[secondCardId].setAttribute('src', './images/blank.jpg')
       
    } else {
        console.log("nope", cardsChosen, cardsChosenId);
        cards[firstCardId].setAttribute('src', './images/triforce.jpg')
        cards[secondCardId].setAttribute('src', './images/triforce.jpg')
        cardsWon.push(cardsChosen)         
    }
    cardsChosen = []
    cardsChosenId = []
}

function flipcard() {       
    let cardId = this.getAttribute('data-id')
    console.log(this.getAttribute('data-id'), cardId)   

    cardsChosen.push(cardArray[cardId].name)        
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        //checkForMatch function
        setTimeout(checkForMatch, 500)
        console.log(cardsChosen);
    }
}

createBoard()


})

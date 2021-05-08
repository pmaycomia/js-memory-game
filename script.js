document.addEventListener('DOMContentLoaded', () => {

const cardsArray = [
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
    // {
    //     name: 'bomb',
    //     img: 'images/bomb.jpg'
    // },
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

console.log(cardsArray.length)

const grid = document.querySelector('.grid')

function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {        
        let card = document.createElement('img')        
        card.setAttribute('src', './images/triforce.jpg')       
        card.setAttribute('data-img', i)       
        card.addEventListener('click', flipcard)        
        grid.appendChild(card)
    }
}

function flipcard() {

}

createBoard()


})

/*
var blackjackgame={
    'you':{'scorespan':'your-blackjack-result', 'div':'your-box','score':0},
    'dealer':{'scorespan':'dealer-blackjack-result', 'div':'dealer-box','score':0 }
}

const YOU = blackjackgame['you']
console.log(YOU)


function blackjackhit() {
    let cardimage=document.createElement('img')
    cardimage.src='static/images/q.png'
    m=YOU['div']
    var div=document.getElementById(m)
    m.appendChild(cardimage)
    console.log(m)
} 
*/

var blackjackgame={
    'you':{'scorespan':'your-blackjack-result', 'div':'your-box','score':0},
    'dealer':{'scorespan':'dealer-blackjack-result', 'div':'dealer-box','score':0 }
}

const YOU = blackjackgame['you']
const DEALER=blackjackgame['dealer']

const hitsound=new Audio('static/sounds/swish.m4a')
/*
var el=document.getElementById('blackjack-hit-button')
el.addEventListener('click',blackjackhit);
*/
document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit)
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackdeal)
function blackjackhit() {
    showcard(YOU)
}

function showcard(activeplayer) {
    let cardimage=document.createElement('img')
    cardimage.src='static/images/queen.png'
    document.querySelector('#'+activeplayer['div']).appendChild(cardimage)
    hitsound.play()
}

function blackjackdeal() {
    let yourimages=document.querySelector('#your-box').querySelectorAll('img')
    let dealerimages=document.querySelector('#dealer-box').querySelectorAll('img')

    console.log(yourimages)
    for(i=0;i<yourimages.length;i++) {
    yourimages[i].remove()}
    for(i=0;i<dealerimages.length;i++) {
        dealerimages[i].remove()}
} 
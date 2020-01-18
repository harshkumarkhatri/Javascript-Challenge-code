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
    'dealer':{'scorespan':'dealer-blackjack-result', 'div':'dealer-box','score':0 },
    'cards':['2','3','4','5','6','7','8','9','10','A','J','K','queen'],
    'cardsmap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'queen':10,'J':10,'A':[1,11] }
}

const YOU = blackjackgame['you']
const DEALER=blackjackgame['dealer']

const hitsound=new Audio('static/sounds/swish.m4a')
const winsound=new Audio('static/sounds/cash.mp3')
const lostsound=new Audio('static/sounds/aww.mp3')

/*
var el=document.getElementById('blackjack-hit-button')
el.addEventListener('click',blackjackhit);
*/
document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit)
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerlogic)

document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackdeal)
function blackjackhit() {
    let card=randomcard()
    console.log(card)
    showcard(YOU,card)
    updatescore(YOU,card)
    showscore(YOU)
    console.log(YOU['score'])
}

function randomcard() {
    let randomindex=Math.floor(Math.random()*13)
    return blackjackgame['cards'][randomindex]
}

function showcard(activeplayer,card) {
    //bust logic says if the score will be below 21 it will display card and score 
    //and if the score goes above 21 it will display bust.
    if (activeplayer['score']<=21) {
        let cardimage=document.createElement('img')
        cardimage.src=`static/images/${card}.png`
        document.querySelector('#'+activeplayer['div']).appendChild(cardimage)
        hitsound.play()
    }
}

function blackjackdeal() {
    showresult(computewinner())
    let yourimages=document.querySelector('#your-box').querySelectorAll('img')
    let dealerimages=document.querySelector('#dealer-box').querySelectorAll('img')

    console.log(yourimages)
    for(i=0;i<yourimages.length;i++) {
    yourimages[i].remove()}
    for(i=0;i<dealerimages.length;i++) {
        dealerimages[i].remove()}

    YOU['score']=0
    DEALER['score']=0
    document.querySelector('#your-blackjack-result').textContent=0
    document.querySelector('#your-blackjack-result').style.color='white'
    document.querySelector('#dealer-blackjack-result').textContent=0
    document.querySelector('#dealer-blackjack-result').style.color='white'

} 

function updatescore(activeplayer,card) {
    //if adding 11 keeps us under 21 then add 11 else add 1
    if (card==='A'){
        if (activeplayer['score']+blackjackgame['cardsmap'][card][1]<=21) {
            activeplayer['score'] += blackjackgame['cardsmap'][card][1]

        } else{
            activeplayer['score'] += blackjackgame['cardsmap'][card][0]
        }
    } else {
    activeplayer['score'] +=blackjackgame['cardsmap'][card]
    }
}

function showscore(activeplayer) {
    if (activeplayer['score']>21) {
        document.querySelector('#'+activeplayer['scorespan']).textContent='BUST!!'
        document.querySelector('#'+activeplayer['scorespan']).style.color='red'
    } else {
        document.querySelector('#'+activeplayer['scorespan']).textContent=activeplayer['score']
    }
}

function dealerlogic(){
    let card=randomcard()
    showcard(DEALER,card)
    updatescore(DEALER,card)
    showscore(DEALER)
}

//gwtting who the winner is
function computewinner() {
    let winner
    if (YOU['score']<=21){
        //conditionwhen higher scoe then dealer or dealer bust but you are under 21 or under
        if (YOU['score']>DEALER['score'] || (DEALER['score']>21) ) {
            console.log('you win')
            winner=YOU
        } else if (YOU['score']<DEALER['score'])  {
            console.log('you lost')
            winner=DEALER
        } else if(YOU['score']===DEALER['score']) {
            console.log("YOU DRAW")
        }
        //condition when user bust but dealer doesn't
    } else if (YOU['score']>21 && DEALER['score']<=21) {
        console.log('You lost')
        winner=DEALER

        //Condition when both bust
    } else if (YOU['score']>21 && DEALER['score']>21){
        console.log('you draw')
    }
    console.log('winner is',winner)
    return winner
}

function showresult(winner) {
    let message, messagecolor;
    if (winner===YOU) {
        message='YOU WIN'
        messagecolor='green'
        winsound.play()
    } else if(winner===DEALER) {
        message='YOU LOST'
        messagecolor='red'
        lostsound.play()
    } else {
        message='you drew'
        messagecolor='black'
    }
    document.querySelector('#blackjack-result').textContent=message
    document.querySelector('#blackjack-result').style.color=messagecolor
}
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
    'cardsmap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'queen':10,'J':10,'A':[1,11] },
    'wins':0,
    'losses':0,
    'draws':0,
    'isstand':false,
    'turnsover':false,
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
    if (blackjackgame['isstand']===false){
        let card=randomcard()
        showcard(YOU,card)
        updatescore(YOU,card)
        showscore(YOU)
    }
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
    if (blackjackgame['turnsover']===true){
        blackjackgame['isstand']=false
        
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
        document.querySelector('#blackjack-result').textContent="Lets's Play" 
        document.querySelector('#blackjack-result').style.color='black'
        blackjackgame['turnsover']=true
    }
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
    blackjackgame['isstand']=true
    let card=randomcard()
    showcard(DEALER,card)
    updatescore(DEALER,card)
    showscore(DEALER)

    if  (DEALER['score'] > 15) {
        blackjackgame['turnsover']=true
        let winner = computewinner()
        showresult(winner)
        console.log(blackjackgame['turnsover'])
    }
}

//gwtting who the winner is
function computewinner() {
    let winner
    if (YOU['score']<=21){
        //conditionwhen higher scoe then dealer or dealer bust but you are under 21 or under
        if (YOU['score']>DEALER['score'] || (DEALER['score']>21) ) {
            blackjackgame['wins']+=1
            winner=YOU
        } else if (YOU['score']<DEALER['score'])  {
            blackjackgame['losses']+=1
            winner=DEALER
        } else if(YOU['score']===DEALER['score']) {
            blackjackgame['draws']+=1 
        }
        //condition when user bust but dealer doesn't
    } else if (YOU['score']>21 && DEALER['score']<=21) {
        blackjackgame['losses']+=1
        winner=DEALER

        //Condition when both bust
    } else if (YOU['score']>21 && DEALER['score']>21){
        blackjackgame['draws']+=1
    }
    console.log(blackjackgame)
    return winner
}

function showresult(winner) {
    let message, messagecolor;

        if (blackjackgame['turnsover']===true){

        if (winner===YOU) {
            document.querySelector('#wins').textContent=blackjackgame['wins']
            message='YOU WIN'
            messagecolor='green'
            winsound.play()
        } else if(winner===DEALER) {
            document.querySelector('#losses').textContent=blackjackgame['losses']
            message='YOU LOST'
            messagecolor='red'
            lostsound.play()
        } else {
            document.querySelector('#draw').textContent=blackjackgame['draws']
            message='you drew'
            messagecolor='black'
        }
        document.querySelector('#blackjack-result').textContent=message
        document.querySelector('#blackjack-result').style.color=messagecolor
    }
}
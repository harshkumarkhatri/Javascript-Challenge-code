//First we have created the directory for the things which are we specifying inside this object.
//We will access the things directly from our object. 
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

//These are made so that the accessing of desired result from the objects is easy.
const YOU = blackjackgame['you']
const DEALER=blackjackgame['dealer']

//These are the sounds which will be played down once the action of winning, lossing or hitting takes place.
const hitsound=new Audio('static/sounds/swish.m4a')
const winsound=new Audio('static/sounds/cash.mp3')
const lostsound=new Audio('static/sounds/aww.mp3')

//By the below 3 we get the query of the specified id being triggered by an action and 
//a corresponding function being executed simultaneously with the help of the eventlistener.
document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit)
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerlogic)
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackdeal)

//It is the function which gets triggered when our chance button is clicked.
function blackjackhit() {
    //if statement is used to stop the our chance button from being clicked once the bot chance 
    //button is clicked which is done by setting the isstand key of our object to true.
    if (blackjackgame['isstand']===false){
        //randomcard function gets a random no. for which the card is obtained from the object.
        //The card obtained from random card is passed into card varibale and that varibale is passed in various different functions.
        let card=randomcard()
        //it is used to show the card in the div
        showcard(YOU,card)
        //it is used to update the score
        updatescore(YOU,card)
        //it is used to display the updated score.
        showscore(YOU)
    }
}

//used to generate arandom no. by the help of which random cards are obtained.
function randomcard() {
    let randomindex=Math.floor(Math.random()*13)
    return blackjackgame['cards'][randomindex]
}

//used to show the card in the div
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

//it is the function which sets the values back to original i.e. reseting the game for us to play it again.
function blackjackdeal() {
    //if statement checks the condition of the card being displayed by the bot and executes the rest of the code if the condition is true.
    if (blackjackgame['turnsover']===true){
        //it sets the our chace button trigger variable back to normal
        blackjackgame['isstand']=false
        
        //gets all the images which are present in both the div's
        let yourimages=document.querySelector('#your-box').querySelectorAll('img')
        let dealerimages=document.querySelector('#dealer-box').querySelectorAll('img')

        //removes the images present in the div's
        for(i=0;i<yourimages.length;i++) {
        yourimages[i].remove()}
        for(i=0;i<dealerimages.length;i++) {
            dealerimages[i].remove()}

        //sets the scores back to ero 
        YOU['score']=0
        DEALER['score']=0

        //sets rest of the neccessary things back to normal.
        document.querySelector('#your-blackjack-result').textContent=0
        document.querySelector('#your-blackjack-result').style.color='white'
        document.querySelector('#dealer-blackjack-result').textContent=0
        document.querySelector('#dealer-blackjack-result').style.color='white'
        document.querySelector('#blackjack-result').textContent="Lets's Play" 
        document.querySelector('#blackjack-result').style.color='black'
        blackjackgame['turnsover']=true
    }
} 

//it updates the score of the active player(either us or dealer) which is passed in it.
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

//shows the score obtained in the desired position i.e. scorespan
function showscore(activeplayer) {
    if (activeplayer['score']>21) {
        document.querySelector('#'+activeplayer['scorespan']).textContent='BUST!!'
        document.querySelector('#'+activeplayer['scorespan']).style.color='red'
    } else {
        document.querySelector('#'+activeplayer['scorespan']).textContent=activeplayer['score']
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function dealerlogic(){
    blackjackgame['isstand']=true

    while(DEALER['score']<16 && blackjackgame['isstand']===true){
        let card=randomcard()
        showcard(DEALER,card)
        updatescore(DEALER,card)
        showscore(DEALER)
        await sleep(1000)
    }
    blackjackgame['turnsover']=true
    let winner = computewinner()
    showresult(winner)    
}

//getting who the winner is
function computewinner() {
    let winner
    if (YOU['score']<=21){
        //condition when higher score then dealer or dealer bust but you are under 21 or under
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

//It displays the winner with the colour which we have passed and the message we want
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
function rpsgame(yourchoice){
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
    //it tell what our choice is

    botchoice=nummbertochoice(randomtorpsint())
    //calls a function which is used to determine the bot 
    //choice randomly with the help of random numbers
    
    results=decidewinner(humanchoice,botchoice)
    //Calls another function which is used in deciding who the winner is.
    
    message=finalmessage(results); //{'message':'youw won','color':green}
    //in this we have used arrays storing the two values in 
    //which we will assign the things fro win or lose.
    
    rpsfrontend(humanchoice,botchoice,message);
    //Calls the final function handeling the frontend part of the event
    //occuring after we choose our part
}

//It provides with a random no from 0,1,2 which is passed to numbertochoice function.
function randomtorpsint(){
    return Math.floor(Math.random()*3)
}

//The no. is used to select from the list pre made hwlpful i selecting bot choice
function nummbertochoice(number){
    return ['rock','paper','scissors'][number]
}

//With the help of pre made directories in it we decide the winner by accepting the inputs.
function decidewinner(humanchoice,botchoice) {
    var rpsdatabase={
        'rock': {'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    }
    var yourscore=rpsdatabase[humanchoice][botchoice]
    var computerscore=rpsdatabase[botchoice][humanchoice]
    return [yourscore,computerscore]
}

//It has the message which is to be printed once the results have been decided.
//It takes a list in it which has the list of scores.
function finalmessage([yourscore,computerscore]) {
    if (yourscore===0) {
        return {'message':'You lost!!','color':'red'}
    } else if (yourscore===0.5) {
        return {'message':'You tied!!' ,'color':'yellow'}
    } else {
        return {'message':'You Won!!','color':'green'}
    }
}

//Deals with the front-end part of the code related to removing of the images 
//after our selection being made and displaying the selected images and the 
//final result as the product
function rpsfrontend(humanimagechoice,botimagechoice,finalmessage) {
    var imagesdatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    //lets remove the images!!
    document.getElementById('rock').remove(),
    document.getElementById('paper').remove(),
    document.getElementById('scissors').remove()

    var humandiv = document.createElement('div')
    var botdiv=document.createElement('div')
    var messagediv=document.createElement('div')

    humandiv.innerHTML =( "<img src='" + imagesdatabase[humanimagechoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px orange;'>")
    messagediv.innerHTML=("<h1 style:color; "+ finalmessage['color']) + "font-size:60px; padding: 30px'>" + finalmessage['message']+ "</h1>"
    botdiv.innerHTML = ("<img src='" + imagesdatabase[botimagechoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px red;'>")
    
    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
    
}

//It will reset the images again for another round.
function reset() {
    document.location.reload(true)
}
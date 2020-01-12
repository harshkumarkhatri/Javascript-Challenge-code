function rpsgame(yourchoice){
    console.log(yourchoice);
    var humanchoice,botchoice;
    //humanchoice=yourchoice.id;
    botchoic=randomtorps
    //results=decidewinner(humanchoice,botchoice)
    //in this we have used arrays storing the two values in which we will assign the things fro win or lose.
    //message=finalmessage(result); //{'message':'youw won','color':green}
    rpsfronted(yourchoice.id,botchoice,message);
}
function randomtorps(){
    return Math.floor(Math.random()*3)
}

function nummbertochoice(number){
    return ['rock','paper','scissors'][number]
}
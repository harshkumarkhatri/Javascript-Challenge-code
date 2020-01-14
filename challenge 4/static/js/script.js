//Changing the colors of buttons

//getting all the button data to perform operation on them
var all_buttons=document.getElementsByTagName('button')
console.log(all_buttons)

//Saving the retrived data into anothe variable list which will be used in one of our operation
var copyallbbuttons=[];
for ( let i=0;i<all_buttons.length;i++){
    copyallbbuttons.push(all_buttons[i].classList[1])
}

//Main function which will call the sub-functions depending upon the selection id
//selection id:-The color in which we want our buttons to be  
function buttoncolorchange(buttonthingy){
    if (buttonthingy.value==='red') {
        buttonred();
    } else if (buttonthingy.value==='green') {
        buttongreen();
    } else if (buttonthingy.value==='reset') {
        buttoncolorreset();
    } else if (buttonthingy.value==='random') {
        randomcolor();
    }
}

//It turn the color of all buttons to red
function buttonred(){
    for (let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger')
    }
}

//It turn the color of all buttons to green
function buttongreen(){
    for (let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success')
    }
}

//It resets the color of all buttons 
function buttoncolorreset(){
    for (let i=0;i<all_buttons.length;i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyallbbuttons[i])
    }
}

//It sets the color to random color[blue,green,yellow,red]
function randomcolor() {
    var choices=['btn-primary','btn-danger','btn-success','btn-warning']
    for (let i=0;i<all_buttons.length; i++) {
        var randomchoice=Math.floor(Math.random() *4)
        all_buttons[i].classList.remove(all_buttons[i].classList[i])
        all_buttons[i].classList.add(choices[randomchoice]);
        console.log(randomchoice)
    }
}
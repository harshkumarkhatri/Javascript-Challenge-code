//challenge 1 Your age in days
function ageindays() {
    var age=prompt("WHat year were you bprn?");
    var ageindayss=(2019-age)*365;
    var h1=document.createElement('h1');
    var textans=document.createTextNode('You are' + ageindayss + 'days');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textans);
    console.log(ageindayss);
    document.getElementById('flex-box-result').appendChild(h1);
    
}

function reset(){
    document.getElementById('ageindays').remove()
}
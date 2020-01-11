//console.log('hello');
//alert('This is harsh khatri////');

//this is a comment we write in js
/*Anothe multi
line comment we use 
here*/

//var hello="Harsh kesa hai tu";
//console.log(hello);

//var number=45;
//console.log(number);
/*
//Changing code on html page by taking its id.
document.getElementById('some').innerHTML=number;

//asing user for input and storing it
var age=prompt('Whats your age');
console.log(age);

//taking input from user and displaying it on screen
var agee=prompt('Whats you current age?');
documnet.getElementById('somee').innerHTML=5*10;

//Numbers in javascript
var num=5;
console.log(5*10);


//functions
// 1 create a funtion
// 2 call a function
function fun(){
    console.log('This is a function')
}
fun()

//Creating a function taking name and returning "Hello name"
// String concatenation is also used
function greetin(){
    name=prompt('What is your name?')
    var result='Hello' +''+name;
    console.log(result)
}
greetin()


//Passing arguments in functions
// eg 1
function greeting(name){
    var name=name
    console.log(name)
}
greeting('harsh')

// eg 2
var name=prompt("What is your name?")
function greet(name){
    var result='hello'+ name
    console.log(result)
}
greet(name)


// LOOPS
// While loop
var num=0
while (num<100){
    console.log(num)
    num+=1
}

// For loop
for(let x=1;x<100;x++){
    console.log("x="+x)
}

// DATATYPES
var number=18;
var string='Harsh';
var object={first: 'harsh',age: 18};
var boolean=true;
var list=['apple','banana']
var m; //undefined
var nothing=null;


//Stings in js
let fruit='apple'
let name='bananan'
console.log(fruit.length)
console.log(fruit.indexOf('a')) //finding the index of particular slphabet
console.log(fruit.slice(2,6)) //start slicing from 2 to 3 alphabets amore
console.log(fruit.replace('pp','567'))
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit.split(''))  //in it it split by characters
console.log(fruit.split(','))  //split by commas


//Arrays in js
let fruits=['banana','apple','pineapple']
let fruitss=new Array('banana','apple','pineapple')
//accessing values
console.log(fruits[1])
console.log(fruitss[0])
fruits[0]='pears';
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
//converting srray to string ,opposite of split
console.log(fruits.toString())
//joining the items with  '-'
console.log(fruits.join('-'))
//popping items
console.log(fruits.pop())
//pushing an item
console.log(fruits.push('grapes'))
//removing first elemets
fruits.shift()
//adding elemets at the first of array.
fruits.unshift('tommy')
//concatenating two strings
let allfruits=fruits.concat(fruitss)
console.log(allfruits)
//reversing the order of strings
console.log(fruits.reverse())
let n=[1,2,4,5,8,9,1,5,3]
//ascending order
console.log(n.sort())
console.log(n.sort(function(a,b) { return a-b}))
//descending order
console.log(n.sort(function(a,b) { return b-a}))


//objects in js
//dictionaries in python
let student={first: 'harsh',
last:'khatri',
age:15,
height:99,
studentinfo: function (){
    return this.first+ '\n' +this.last;
    }
};
console.log(student.first)
console.log(student.last)
console.log(student.age)
console.log(student.height)
student.first='notharsh'
console.log(student.first)
//Equivalent to self in pyhton
console.log(student.studentinfo())


//Conditionals,control flows(if-else)
var age=prompt("Your age?")
if  ((age>=18) && (age<=35)){
    console.log('Custumer')
} else {
    console.log("not customer")
}

//Switch statement
switch (6){
    case 0:
        text='weekend'
        break
    case 5:
        text='weekend'
        break
   case 6:
        text='weekend'
        break
    default:
        text='weekday'
}
console.log(text)
*/


//JSON files generally conssits of
// the list with objects inside it generally the data of persons.
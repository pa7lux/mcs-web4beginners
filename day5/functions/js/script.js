console.log('Hello');

var myFirstFunction = function(argument){
  //тело функции
  var name = argument.toLocaleUpperCase();
  return 'Hello, ' + name;
}
var name = prompt('Your name');
console.log(myFirstFunction(name));


function mySecondFunction(e){
  return -e;
}
var myNumber = prompt('Enter the number, bro:');
console.log(mySecondFunction(myNumber));

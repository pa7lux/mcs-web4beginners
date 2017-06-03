var module = function(number){
  if(number>=0){
    return number;
  }else if(number<0){
    return -number;
  } else {
    return 'Функция работает только с числами';
  }
}
console.log(module(3)); //3
console.log(module(-3)); //3
console.log(module('Hello')); //3

var checkAge = function(age) {
  return age>=18 ? 'You can drink' : 'Go to school';
}

var yourAge = prompt('Сколько тебе лет?');
console.log(checkAge(yourAge));

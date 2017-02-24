// var greetings = 'Hello world!';
// alert(greetings);
// document.write(greetings);
// console.log(greetings);

// var userName = prompt(' Your name? ');
// var greetings = ' Hello ' + userName;
// document.write(greetings);
// document.write('<br>');

// var userAge = Number(prompt('Your age? '));
// var nextAge = userAge + 1 ;
// document.write('Soon you will be ' + nextAge);

// function sum(a, b){
//     // int a = prompt('A?');
//     // int b = prompt('B?')
//     // a += b;
//     var result = a + b;
//     return result;
    
// }
// // var calc = sum(42, 23);
// // console.log(calc);
// // document.write(calc);
// var num1 = Number(prompt('Num1'));
// var num2 = Number(prompt('Num2'));
// var num3 = Number(prompt('Num3'));

// var calc = sum(num1, num2);
// var calc1 = sum(calc, num3);
// document.write(calc1);

// function tellAge(age){
//     if(age < 18) {
//         return 'Kid';
//     } else {
//         return 'Adult'; 
//     }
// }
// var age = Number(prompt('your age?'));
// document.write(tellAge(age));

// var result = Math.sqrt(16);
// document.write(result);

//Робите розвязок квадратного рівняння.
   

//Введите параметр а: 
var a = prompt('A?');
//Введите параметр b: 
var b = prompt('B?');
//Введите параметр c:
var c = prompt('C?');

function make() {
    a = Number(a);
    b = Number(b);
    c = Number(c);
   var x1, x2, d;
   var result = '';
   d = b*b - 4*a*c;
 alert('D = ' + d);
   if (d < 0) {
    result = 'Do not have unsver';
    alert(result);
   }else if (d = 0) {
       result = 'have 1 ';
   }else {
       result = ' have 2 ';
       }
 alert(result);
   x1 = (-b - Math.sqrt(d))/(2*a);
   x2 = (-b + Math.sqrt(d))/(2*a);
    alert('x1 = ' + x1);
 alert('x2 = ' + x2);
}
make();
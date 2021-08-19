// ДЗ-2. Задание 1. Почему код даёт именно такие результаты?
/*
console.log("Задание №1");

var a = 1, b = 1, c, d;
c = ++a;
console.log(c);       // 2  - декремент увеличил значение a на 1 и возвращает это же значение. В итоге а=2
d = b++;
console.log(d);       //1  - инкремент увеличил значение b на 1,но возвращает старое значение          (при этом b=1)
c = (2 + ++a);
console.log(c);  // 5 -  декремент увеличил измененное значение a(=2) на 1 и вернул значение 3,т.е. а=2+1=3  c=(2+3)=5
d = (2 + b++);
console.log(d);  //4 -  инкремент со значением b=2 увеличивает свое значение на 1,но при этом возвращаетя прежнее значение 2: d=(2+2)=4

console.log(a);                // 3:  итоговое а=3;
console.log(b);                // 3:  итоговое b=3;
*/
//_____________________________________________

// ДЗ-2. Задание 2. Чему будет равен x в примере ниже?

/*
console.log("Задание №2");

var f = 2;
var x = 1 + (f *= 2);
console.log(x);

// x= 1+(2*2)=5
*/

//________________________________________________

/* ДЗ-2. Задание 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

/*
console.log("Задание №3");

let g = + prompt("Введите любое число:");
let h = + prompt("Введите любое число:");

if (g > 0 && h > 0) {
    console.log("Оба числа положительные" + " " + "и разница между ними" + " " + (g - h));
}
else if (g < 0 && h < 0) {
    console.log("Оба числа отрицательны" + " " + "и их произведение = " + (g * h));
}
else if (g >= 0 && h < 0 || g < 0 && h > 0) {
    console.log("Одно число меньше, а может и больше другого" + ", " + "поэтому мы считаем согласно заданию сумму:" + (g + h));
}
*/


//___________________________________________

// ДЗ-2. Задание 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

/*
console.log("Задание №4");

let number = "11";
switch (number) {
    case "0":
        console.log("Число 0");
    case "1":
        console.log("Число 1");
    case "2":
        console.log("Число 2");
    case "3":
        console.log("Число 3");
    case "4":
        console.log("Число 4");
    case "5":
        console.log("Число 5");
    case "6":
        console.log("Число 6");
    case "7":
        console.log("Число 7");
    case "8":
        console.log("Число 8");
    case "9":
        console.log("Число 9");
    case "10":
        console.log("Число 10");
    case "11":
        console.log("Число 11");
    case "12":
        console.log("Число 12");
    case "13":
        console.log("Число 13");
    case "14":
        console.log("Число 14");
    case "15":
        console.log("Число 15");
}

*/
/* ДЗ-2. Задание 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
console.log("Пятое задание");
*/

console.log("Задание №5");

//Умножение:

let a;
let b;
function mathOperationMult(a, b) {
    return a * b;
}
c = mathOperationMult(5, 4);
console.log(c);

//Сложение:

function mathOperationPlus(a, b) {
    return a + b;
}
c = mathOperationPlus(11, 1);
console.log(c);

// Вычитание:

function mathOperationMinus(a, b) {
    return a - b;
}
c = mathOperationMinus(18, 5);
console.log(c);

//Деление:

function mathOperationDiv(a, b) {
    if (b == 0) {
        return " На ноль делить нельзя";
    } else {
        return a / b;
    }
}
c = mathOperationDiv(9, 0);
console.log(c);

/*
ДЗ-2. Задание 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/

console.log("Задание №6");

let arg1;
let arg2;
let operation = "деление";
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return mathOperationPlus(arg1, arg2, operation);
        case 'вычитание':
            return mathOperationMinus(arg1, arg2, operation);
        case 'деление':
            return mathOperationDiv(arg1, arg2, operation);
        case 'умножение':
            return mathOperationMult(arg1, arg2, operation);
    }
}
let operat = mathOperation(9, 3, operation);
console.log(operat);

//Округление чисел

//Math.floor(num) - округляет число в меньшую сторону
let fstNum = Math.floor(5.8);
let sndNum = Math.floor(7.2);
let thrdNum = Math.floor(-2.3);

console.log(`First: ${fstNum}`);
console.log(`Second: ${sndNum}`);
console.log(`Thirs: ${thrdNum}`);


//Math.ceil(num) - округляет число в большую сторону
let fstNum1 = Math.ceil(5.8);
let sndNum1 = Math.ceil(7.2);
let thrdNum1 = Math.ceil(-2.3);

console.log(`First: ${fstNum1}`);
console.log(`Second: ${sndNum1}`);
console.log(`Thirs: ${thrdNum1}`);


//Math.round(num) - округляет число до ближайщего челого числа
let fstRound = Math.round(5.8);
let sndRound = Math.round(7.2);
let thrdRound = Math.round(-2.3);

console.log(`First: ${fstRound}`);
console.log(`Second: ${sndRound}`);
console.log(`Thirs: ${thrdRound}`);


//Округление при помощи toFixed
let fixedNum = 5.848;
console.log(`Num: ${fixedNum.toFixed(1)}`) //Получаем строку а не число
 

//isFinite - преобразует аргумент в обычное число и возвращает true, если оно число
console.log(isFinite("25"));
console.log(isFinite(10/0));
console.log(isFinite(10/1)); 

//Преборазование при помощи parseInt и parseFloat
let parseVal = parseInt("20px");
let parseVal2 = parseFloat("2.3gdsg");

console.log(`${parseVal}  ${parseVal2}`);


//Др
console.log(Math.max(10,15,12,15,45));
console.log(Math.floor(58.858));

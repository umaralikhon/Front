function showMessage(){
	console.log('Hello world');
}

showMessage();

//Вложенность функции
function getSum(){
	let fstNum;
	let sndNum;

	function getFstNum(){
		fstNum = 3;
	}

	function getSndNum(){
		sndNum = 4;
	}

	getFstNum();
	getSndNum();

	let sum = fstNum + sndNum;

	console.log(`Sum: ${sum}`);
}

getSum();


//Внешняя переменная
let message = 'Hello'

function sayHello(){
	console.log("Hello world");
}

console.log(message);
sayHello();


//Параметры
function calcNums(numOne, numTwo){
	let sum = numOne + numTwo;
	console.log(`Sum: ${sum}`)
}

calcNums(3,5);


//Параметры по умолчанию
function defaultParams(numOne = 5, numTwo = 7){
	let sum = numOne + numTwo;
	return sum;
}

console.log(`No default value: ${defaultParams(5, 1)}`);
console.log(`Default value: ${defaultParams()}`)


//Функции - коллбеки(callbacks)


function callBackFoo(numOne, numTwo, more, less, equal){
	let sum = numOne + numTwo;

	if(sum > 5){
		more();
	}else if(sum === 5){
		equal();
	}else{
		less();
	}
}

function showMoreMessage(){
	console.log("Sum more than 5");
}

function showEqualMessage(){
	console.log("Sum equals to 5");
}

function showLessMessage(){
	console.log("Sum less than 5");
}

callBackFoo(3, 5, showMoreMessage, showEqualMessage, showEqualMessage);



//Рекурсия
function calcSumRecursion(numOne, numTwo){
	if(numTwo === 1){
		return numOne;
	}else{
		return numOne * calcSumRecursion(numOne, numTwo - 1);
	}
}

console.log(calcSumRecursion(2,5));


//Функциональные выражения(Function Expressions)
/*
	let имя_переменной = function(параметр, ..., параметр){
		return выражение
	}
*/

let showMessageExp = function(){
	console.log("Function expression");
};

showMessageExp(); 


function getSummExp(){
	let summ = 1 + 5;
	console.log(`Summ: ${summ}`);
};

let someVar = getSummExp;

someVar();
getSummExp();


//Стрелочные функции(arrow function)
/*
	let имя_переменной = (параметр, ..., параметр) => выажение
*/

let getMessage = (text, name) => text + ' ' + name;

console.log(getMessage('Hello', 'Baby'));


let getMessage2 = (text, name) => {
	let fullText = text + ' ' + name;
	return fullText;
};

console.log(getMessage2('Hello', 'Kitten'));


//Планирование вызова функции

/*
	setTimeout() - позволяет вызвать функцию один раз через определенный интервал времени
	setInterval() - позволяет вызвать функцию регулярно через определенный интервал времени
*/

 /*
 	setTimeout(функция/код, задержка, параметр, ..., параметр);
 	setInterval(функция/код, задержка, параметр, ..., параметр);
 */

let getMessageWithTime = (text, name) => console.log(text + ' ' + name);

 setTimeout(getMessageWithTime, 3000, 'Hello', 'Kristina');
 setInterval(getMessageWithTime, 3000, 'Hello', 'Alisa');


 //clearTimeout
 function showNumber(num){
 	console.log(num);
 	let timeId = setTimeout(showNumber, 1000, num++);

 	if(num === 5){
 		clearTimeout(timeId);
 	}
 }

 setTimeout(showNumber, 1000, 1);
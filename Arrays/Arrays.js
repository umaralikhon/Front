//Объявление массива
let arr1 = new Array();
let arr2 = [];

let arr3 = ["Alisa", "Alexa", "Siri", ];
console.log(arr3[0]);

let arr4 = [
    "Diana",
    address = {
        country: "Uzbekistan",
        city: "Tashkent",
    },

    function() {
        console.log("Hello world!");
    },

    function showHello() {
        console.log("Hello Dear!");
    },
]

console.log(arr4[1].country); //Если элемент массива объект
arr4[2](); //Если элемент массива функция
arr4[3](); //Даже если у функции есть имя



//Реализация очереди
//Метод push - добавляет элемент в конец массива
let pushArr = ["Alisa", "Alexa", "Siri"];
pushArr.push("Veronika", "Sofia");

console.log(pushArr);


//Метод shift - удаляет элемент в начале массива.
//Так что второй элемент становится первым
pushArr.shift();
console.log(pushArr);


//Метод рор - удаляет элемент с конца массива
pushArr.pop();
console.log(pushArr);


//Метод unshift - добавляет элемент в начало массива
pushArr.unshift("Diana", "Yana");
console.log(pushArr);


//Метод splice - удаляет элемент из любой позиции массива
/*
	array.splice(startPosit, deleteAmount);
	startPosit - позиция с которого начинается удаление элемента
	deleteAmount - количество удаляемых элементов начиная с startPosit
*/

pushArr.splice(2, 1);
console.log(pushArr);


//Удаляем элемет и возвращем его в отдельную переменную
let removed = pushArr.splice(2, 1);
console.log(`Removed: ${removed}`);
console.log(`Current: ${pushArr}`);


//Заменяем элемент
/*
	array.splice(startPosit, changeAmount, value);
	startPosit - позиция с которого начинается замена элемента
	changeAmount - количество  заменяемых элементов начиная с startPosit
	value - значения заменяемых элементов
*/

pushArr.splice(0, 1, "Kristina");
console.log(pushArr);


//Добавления элементов
/*
	array.splice(startPosit, 0, value1, ..., valueN);
	startPosit - позиция с которого начинается добавление элемента
	0 - количество  заменяемых/удаляемых элементов нет
	value - значения добавляемых элементов
*/
pushArr.splice(2, 0, "Diana", "Maria");
console.log(pushArr);



//Компирование массива
//Метод slice
/*
	array.slice(start, end);
	start - позиция начало копирования
	end - позиция конца копирования
*/

let copyArr = pushArr.slice(0, 3);
console.log(copyArr);


//Метод concat - копирует массив и если надо, добавляет новые элементы в конец массива
let concatArr = copyArr.concat("Alisa", "Veronika", "Veronika");
console.log(concatArr);


//Методы indexOf, lastIndexOf, includes
console.log(concatArr.indexOf("Veronika"));
console.log(concatArr.lastIndexOf("Veronika"));
console.log(concatArr.indexOf("Veronika", 2));
console.log(concatArr.includes("Veronika"));


//Поиск объектов в массиве
//Методы find/findIndex

let objectArr = [
    { name: "Alisa", age: 22 },
    { name: "Alexa", age: 19 },
    { name: "Siri", age: 30 },
]
console.log(objectArr);


//Найти 1 - элемент, где age = 22
let resultOne = objectArr.find(function(item, index, array) {
    return item.age === 22;
});

console.log(resultOne);


//То же самое при помощи стрелочной функции
let resultTwo = objectArr.find(item => item.age === 22);
console.log(resultTwo);


//Метод filter - найдет все элементы из массива и возвращает новый массив
let resultThree = objectArr.filter(function(item, index, arry) {
    return item.age >= 22;
});

console.log(resultThree);

let resultFour = objectArr.filter(item => item.age >= 22);
console.log(resultFour);



//Сортировка при помощи sort
let sortArr = concatArr.concat(0, "Polina", "Ekaterina", "Helena");
console.log(sortArr.sort());


//Сортировка чисел
let numArr = [1, 2, 5, 2, 4, 6, 7, 2, 5, 3, 4];

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

console.log(numArr.sort(compareNumeric));


//Простой способ сортировки
function compareNums(a, b) {
    return a - b;
}

console.log(numArr.sort(compareNums));


//Сортировка чисел при помощи стрелочных функций
let lamArr = numArr.sort((a, b) => a - b);
console.log(lamArr);


//Метод reverse - меняет порядок элементов обратно
console.log(sortArr.reverse());


//Преобразование массивов
//Метод map - вызывает функцию для каждого элемента массива и возвращает массив результатов выполненной этой функцией

let mapArr = sortArr.map(function(item, index, array) {
    return item[0];
});

console.log(mapArr);

//map при помощии стрелочных функции
let mapArr2 = sortArr.map(item => item[0] + "X");
console.log(mapArr2);


//Метод split - преобразует строку по заданному разделителю
let strSplit = "Метод split - преобразует строку по заданному разделителю"
let splitArr = strSplit.split(" ");
console.log(splitArr);

//Можно ограничить количество элементов массива
console.log(strSplit.split(" ", 3));


//Проверка на массивность
if (Array.isArray(sortArr)) {
    console.log("Array");
}


//Перебор элементов при помощи FOR OF
for (item of sortArr) {
    console.log(sortArr.indexOf(item) + " " + item);
}


//Метод foreach - выполняют функцию для каждого массива
sortArr.forEach(function(item, index, array) {
    console.log(`${item} | ${index} | ${array}`);
});
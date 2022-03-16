//NAVIGATOR
/*
	При помощи объекта navigator можем получить информацию о браузере и платформе
*/


//Браузер
console.log(navigator.userAgent);

//Платформа
console.log(navigator.platform);

//LOCATION
/*
	При помощи location можно получить текущую страницу браузера и перенаправить его на другой url
*/
// console.log(location.href); //Получаем текущий адрес
//location.href = "https://fls.guru"; //Перенаправляем на другой адрес


//alert - выводит простое диалоговое окно
// alert("Привет!");

/*
	confirm - выводит диалоговое окно с двумя кнопками (Подтвердить/Отмена), значение которое, можно получить в переменную

*/
// const confirmRequest = confirm("Хочешь меня?");
// console.log(confirm);
// confirm("Точно не хочешь?");

/*
	promt - выводит диалоговое окно с полем для ввода и двумя кнопками (ok/cancel).
	Если юзер ничего не напишет и нажимает унопку ок, то получим пустую строку.
	Если юзер нажимает кнопку отмена, то получим значение null
*/

// let val = prompt("Кто ты воин?");
// console.log(val);
// alert("Нет, ты еблан!");

//Самые верхние элеименты html - дерева доступны как свойства объекта document
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;

console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);

//Первые и последние элементы
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;

console.log(firstChildNode);
console.log(lastChildNode);

//При помощи метода childNodes можно получить коллекцию всех дочерних объектов(html - тегов)
const myChildNode = bodyElement.childNodes;
console.log(myChildNode);

//Для проверки наличия дочерних узлов существует спец метод hasChildNodes()
console.log(bodyElement.hasChildNodes());

//Перебор дочерних узло
for (nodes of myChildNode) {
    console.log(nodes);
}

//Соседние и родительские узлы
const prevNode = bodyElement.previousSibling;
const nextNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

console.log(prevNode);
console.log(nextNode);
console.log(parentNode);


//Получаем коллекцию всех дочерних элементов(не текстов)
const bodyChildren = bodyElement.children;
console.log(bodyChildren);

//Получение первых и последних дочерних элементов
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;

console.log(firstChild);
console.log(lastChild);

//Соседние и родительские элементы
const previousSiblingElem = bodyElement.previousElementSibling;
const nextSiblingElem = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;

console.log("Previous: ");
console.log(previousSiblingElem);
console.log("Next")
console.log(nextSiblingElem);
console.log("Parent: ")
console.log(parentElement);


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
console.log(location.href); //Получаем текущий адрес
//location.href = "https://fls.guru"; //Перенаправляем на другой адрес


//alert - выводит простое диалоговое окно
alert("Привет!");

/*
	confirm - выводит диалоговое окно с двумя кнопками (Подтвердить/Отмена), значение которое, можно получить в переменную

*/
const confirmRequest = confirm("Хочешь меня?");
console.log(confirm);
confirm("Точно не хочешь?");

/*
	promt - выводит диалоговое окно с полем для ввода и двумя кнопками (ok/cancel).
	Если юзер ничего не напишет и нажимает унопку ок, то получим пустую строку.
	Если юзер нажимает кнопку отмена, то получим значение null
*/

let val = prompt("Кто ты воин?");	
console.log(val);
alert("Нет, ты еблан!");



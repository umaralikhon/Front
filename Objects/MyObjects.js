//Создание объекта
let userInfo1 = new Object();
let userInfo2 = {};

let userInfo = {
    name: "Alisa",
    age: 30,
    "likes proging": true,
};

console.log(userInfo);
console.log(userInfo.name);
console.log(userInfo["likes proging"]);


//Вычисление свойств объекта
let username = "Alexa";
let userCompany = {
    [username + " Amazon"]: true,
};

console.log(`About: ${userCompany["Alexa Amazon"]}`);


//Символы
let id = Symbol("id");
let userInfo3 = {
    name: "Alexa",
    age: 25,
    [id]: "Something",
}

console.log(userInfo3);


//Вложенные объекты
let userInfo4 = {
    name: "Alexa",
    age: 25,
    address: {
        country: "USA",
        state: "California",
    },
}

console.log(userInfo4);
console.log(userInfo4.address);
console.log(userInfo4.address.country);


//Свойства из переменной
function makeUserinfo(name, age) {
    return {
        name: name,
        age: age,
    }
}

let user = makeUserinfo("Alisa", 23);
console.log(user);


//Добавление свойства
let userinfo5 = {
    name: "Siri"
}

console.log("Name: " + userinfo5.name);

userinfo5.company = "Apple";
console.log(userinfo5);

userinfo5["I like Java"] = true;
console.log(userinfo5);

userinfo5.address = {
    country: "USA",
    city: "New-York",
}

console.log(userinfo5);


//Удаление свойства
delete userinfo5.company;
console.log(userinfo5);


//Изменение объекта
userinfo5.name = "Alexa";
console.log(userinfo5);


//Дублирование объекта
let userinfo6 = Object.assign({}, userinfo5);
userinfo6.name = "Alisa";

console.log(userinfo5);
console.log(userinfo6);


//Добавление новых свойств при помощи Object.assign()
Object.assign(userinfo6, { company: "Yandex" });
console.log(userinfo6);


//Проверка существование свойства

//Проверка на существование объекта при помощи "?"
if (userinfo6 ?.company) {
    console.log(userinfo6.company);
}

//Проверка на существование объекта при помощи оператора "in"
if ("country" in userinfo6.address) {
    console.log(userinfo6.address.country);
}


//Цикл for ... in
for(let key in userinfo6){
    //Доступ к ключам
    console.log(key);

    //Доступ к значениям
    console.log(userinfo6[key]);
}


//Методы объекта
let userinfo7 = {
    name: "Siri",
    age: 25,
    showInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    },
}


userinfo7.showInfo();


//Фунция - конструктор
/*
    1 - Название функиции начинается с заглавной буквы.
    2 - Вызов функции осуществляется при помощи ключ слова new
*/

function UserInfo8(name, age){
    this.name = name;
    this.age = age;
}

console.log(new UserInfo8("Alisa", 25));
console.log(new UserInfo8("Diana", 20));
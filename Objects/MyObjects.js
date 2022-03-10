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
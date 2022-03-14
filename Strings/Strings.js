let textLegth = "Hello world!";
console.log(`Tetx length: ${textLegth.length}`);	

//Получение символа строки
let textSymbol = "Hello!";
console.log(textSymbol[0]);


for(const symbol of textSymbol){
	console.log(symbol); 
}


//Поиск подстрок при помощи indexOf(str, [position])
console.log(textSymbol.indexOf("lo"));
console.log(textSymbol.indexOf('lo', 1));


//Поиск подстрок при помощи includes, startsWith, endsWith
console.log(textSymbol.includes("Hel"));
console.log(textSymbol.includes("Hel", 2));

console.log(textSymbol.startsWith("Hel"));
console.log(textSymbol.endsWith("llo!"));


//Получение часть строки при помощи slice(start [, end])
console.log(textSymbol.slice(2, 5));

let str = "Hello world";

if (2 > 0) {
    console.log(str);
}

let fst = "5";
let snd = 5;

if (fst == snd) {
    console.log("fst == snd");
} else {
    console.log("fst != snd");
}

if (fst === snd) {
    console.log("fst === snd");
} else {
    console.log("fst !=== snd");
}


//Condition "?"

let message = "Hello ";
let messageEnd = (5 > 1) ? "Veronika" : "Alisa";

message += messageEnd;
console.log(message);
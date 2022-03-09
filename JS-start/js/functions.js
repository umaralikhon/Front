function showMessage() {
    console.log("Hello world");
}

showMessage();

//Inner functions
function countSum() {
    let fstNum;
    let sndNum;

    function firstNum() {
        fstNum = 2;
    }

    function secondNum() {
        sndNum = 5;
    }

    firstNum();
    secondNum();

    let sum = fstNum + sndNum;
    console.log(`Sum: ${sum}`);
}

countSum();


//Parameters
function countSum2(fst, snd) {
    let sum = fst + snd;
    console.log(`Sum: ${sum}`);
}

countSum2(5, 4);

//Default parameters
function countSum3(fst = 3, snd = 5) {
    let sum = fst + snd;
    console.log(`Sum: ${sum}`);
}

countSum3(5);

//Callbacks
function calcSum(fst, snd, more, less) {
    let sum = fst + snd;

    if (sum > 5) {
        more(sum);
    } else if (sum < 5) {
        less(sum);
    }
}

function moreMessage(sum) {
    console.log(`More than ${sum}`);
}

function lessMessage(sum) {
    console.log(`Less than ${sum}`);
}

calcSum(2, 5, moreMessage, lessMessage);

//Return
function calcSum2(fst, snd) {
    return fst + snd;
}

let result = calcSum2(2, 3);
console.log(`Result: ${result}`);

//Recursion
function calcSum3(fst, snd){
	if(snd === 1){
		return fst;
	}else{
		return fst * calcSum3(fst, snd - 1);
	}
}

console.log(calcSum3(3,4));
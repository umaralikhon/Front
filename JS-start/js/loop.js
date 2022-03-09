//while
let num = 0;

while (num < 5) {
    console.log(num);
    num++;
}

//for
num = 0;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//break
for(let i = 0; i < 5; i++){
	num++;
	if(num == 3) break;
}

console.log(`Break Num: ${num}`);	


//continue
num = 0;
for(let i = 0; i < 5; i++){
	num++;
	if(num == 2) continue;
	console.log(`Break Num: ${num}`);
}
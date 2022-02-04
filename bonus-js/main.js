// number, string, boolean, null, undefined
// object


// const로 선언하면 자체 ref(참조값,주소)가 잠겨있다.(변경 불가능) 
const obj = {
    name : 'john',
    age : 5,
};

obj.hello = "hello";



console.log(obj);
let obj2 = obj;
obj.name = "james";
console.log(obj.name);
console.log("------------");
console.log(obj2.name);


//##################################

const num1 = 1;
const num2 = 2;
const result = num1 + num2;

console.log(result);

function add(a , b) {
    return a + b;
}

console.log(add(num1,num2));

const doSomething = add;
const result2 = doSomething(5,3);
const result3 = add(5,3);
console.log(result2);
console.log(result3);
function divide(num1, num2) {
    return num1 / num2;
}
function surprise(operator) {
    const result = operator(2,3);
    console.log(result);
}

surprise(divide);

//##################################

// false : 9, -0, '', null, undefined, NaN
// true : -1,, 'hello', []
let num=3;// undefined

if (num) {
    console.log("true");
} else {
    console.log("false");
}

num && console.log(num);

//##################################

class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase(){
        this.counter++;
        console.log(this.counter);
        if (this.counter%5 ==0) {
            this.callback && this.callback(this.counter);
        }
    }


}

function printSomething2(num){
    console.log(`yo! ${num}`);
}

function alertNum(num){
    alert(`Wow ${num}`);
}

const coolCounter = new Counter(printSomething2);

for(i=0;i<5;i++){
    coolCounter.increase();
}

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.callback = alertNum;
coolCounter.increase();

let age:number = 50;
let username:string = 'Max'; // name wasnt working
let toggle:boolean = true;
let empty:null = null;
let notInitialize:void = undefined;
let callback = (a:number) => { return 100 + a };

let anything:any = -20;
anything = 'Text';
anything = {};

let some:string;
some = 'Text';

let str:string;

str = "some";

const person:readonly[string, number] = ['Max', 21];

// 6,7,8 not done

function showMessage(message:string) {
 console.log(message);
}

function calc(num1:number, num2:number) {
 return num1 + num2;
}

function customError() {
 throw new Error('Error');
}


// 10 not done


// 2. done
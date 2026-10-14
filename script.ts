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

enum status{
    REST = "resting",
    "ready" = "yes",
}
console.log(status.REST)

const stringnumber:string | number = "hello"

const enabledisable: "enable" | "disable" = "enable"

function showMessage(message:string) {
 console.log(message);
}

function calc(num1:number, num2:number) {
 return num1 + num2;
}

function customError() {
 throw new Error('Error');
}



type Page = {
 title: string;
 likes: number;
 accounts: string[];
 status: "open" | "close";
 details?: {
 createAt: Date;
 updateAt: Date;
 };
}

const page1:Page = {
 title: 'The awesome page',
 likes: 100,
 accounts: ['Max', 'Anton', 'Nikita'],
 status: 'open',
 details: {
   createAt: new Date('2021-01-01'),
   updateAt: new Date('2021-05-01'),
 }
}

const page2:Page = {
 title: 'Python or Js',
 likes: 5,
 accounts: ['Alex'],
 status: 'close',
}


// 2. done